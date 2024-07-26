import { View , Text , Image , TouchableOpacity} from "react-native";
import moment from "moment";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { fetchImage } from "../services/unsplashImages";

export default function UserTripCard({trip}){

    const tripData = JSON.parse(trip?.tripData);
    const router = useRouter();
    const [imageURL,setImageURL] = useState();

    useEffect(()=>{
        fetchImage(trip?.tripPlan?.trip?.destination).then(data=>{
            console.log(data)
            setImageURL(data.results[0].urls.regular)
        });
    },[])


    return(
        <TouchableOpacity className='mt-6' onPress={()=>router.push({pathname:'/trip-details',params:{
            trip:JSON.stringify(trip)
            }})}>
            <View className='flex flex-row items-center gap-3'>
                <Image className='w-32 h-32 rounded-lg object-cover' source={{uri:imageURL}}/>
             <View>
                <Text className='text-lg text-neutral-800 font-bold'>{trip?.tripPlan?.trip?.destination}</Text>
                <Text className='text-neutral-500 font-semibold my-1'>{moment(tripData.startDate).format('DD MMM yyyy')}</Text>
                <Text className='text-neutral-500 font-semibold'>Traveling: {tripData?.travellingPeople?.title}</Text>
             </View>
            </View>
        </TouchableOpacity>
    )
}