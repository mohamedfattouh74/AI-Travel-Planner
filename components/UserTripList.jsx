import moment from "moment";
import { Image, Text, View  , TouchableOpacity , ScrollView} from "react-native";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { fetchImage } from "../services/unsplashImages";

export default function UserTripList({userTrips}){

    const LatestTrip = JSON.parse(userTrips[0]?.tripData);
    const router = useRouter();
    const [imageURL,setImageURL] = useState();

    useEffect(()=>{
        fetchImage(userTrips[0]?.tripPlan?.trip?.destination).then(data=>{
            console.log(data)
            setImageURL(data.results[0].urls.regular)
        });
    },[])

    return ( 
            <View className='mt-6 flex-1'>
                <Image className='w-full h-52 rounded-lg object-cover' source={{uri:imageURL}}/>
                <View className='mt-4 text-neutral-800'>
                    <Text className='text-xl font-bold '>{userTrips[0]?.tripPlan?.trip?.destination}</Text>
                    <View className='flex flex-row justify-between items-center'>
                    <Text className='text-lg text-neutral-500'>{moment(LatestTrip?.startDate).format('DD MMM yyyy')}</Text>
                    <Text className='text-lg text-neutral-800'> 🚙 {LatestTrip?.travellingPeople?.title}</Text>
                    </View>
                    <TouchableOpacity className='bg-black py-4 px-20 rounded-full mt-4' onPress={()=>router.push({pathname:'/trip-details',params:{
                        trip:JSON.stringify(userTrips[0])
                        }})}>
                        <Text className='text-white font-medium text-center'>See your plan</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} className='flex-1 mt-4 mb-24'>

                {
                    userTrips.map((trip,index)=><UserTripCard trip={trip} key={index}/>)
                } 
                </ScrollView>
        

            </View>

    )
}