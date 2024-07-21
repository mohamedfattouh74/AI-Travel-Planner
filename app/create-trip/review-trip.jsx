import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { useTrip } from "../../contexts/TripContext";
import moment from 'moment'

export default function ReviewTrip(){
    const navigation = useNavigation();
    const router = useRouter();
    const {tripData,setTripData} = useTrip();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    return (
        <View className='mt-20 mx-8 flex-1'>
            <Text className='font-bold text-3xl text-neutral-800 mt-4'>Review your trip</Text>  
            <Text className='font-semibold text-xl text-neutral-800 mt-8'>Before generating your trip, please review your selection</Text> 
            
            <View className='flex flex-row items-center mt-8'>
                <Text className='text-3xl'>📍</Text>
                <View className='ml-6'>
                    <Text className='text-neutral-500 font-medium'>Destination</Text>
                    <Text className='text-neutral-800 text-lg font-bold'>{tripData?.location?.name}</Text>
                </View>
            </View>

            <View className='flex flex-row items-center mt-8'>
                <Text className='text-3xl'>📅</Text>
                <View className='ml-6'>
                    <Text className='text-neutral-500 font-medium'>Travel date</Text>
                    <Text className='text-neutral-800 text-lg font-bold'>{moment(tripData?.startDate).format('DD MMM') + ' To ' + moment(tripData?.endDate).format('DD MMM')} ({tripData.totalNoOfDays} days)</Text>
                </View>
            </View>

            <View className='flex flex-row items-center mt-8'>
                <Text className='text-3xl'>✈</Text>
                <View className='ml-6'>
                    <Text className='text-neutral-500 font-medium'>Who is traveling</Text>
                    <Text className='text-neutral-800 text-lg font-bold'>{tripData?.travellingPeople?.title}</Text>
                </View>
            </View>

            <View className='flex flex-row items-center mt-8'>
                <Text className='text-3xl'>💰</Text>
                <View className='ml-6'>
                    <Text className='text-neutral-500 font-medium'>Budget</Text>
                    <Text className='text-neutral-800 text-lg font-bold'>{tripData?.budget?.title}</Text>
                </View>
            </View>

            <TouchableOpacity className='bg-black py-4 px-20 rounded-full mt-12' onPress={()=>{router.replace('/create-trip/generate-trip')}}>
                    <Text className='text-white font-medium text-center'>Build my trip</Text>
            </TouchableOpacity>
        
        </View>

        
    )
}