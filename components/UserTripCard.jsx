import { View , Text , Image } from "react-native";
import moment from "moment";
export default function UserTripCard({trip}){

    const tripData = JSON.parse(trip?.tripData);

    return(
        <View className='mt-6'>
            <View className='flex flex-row items-center gap-3'>
                <Image className='w-32 h-32 rounded-lg object-cover' source={require('../assets/landingv2.png')}/>
             <View>
                <Text className='text-lg text-neutral-800 font-bold'>{trip?.tripPlan?.trip?.destination}</Text>
                <Text className='text-neutral-500 font-semibold'>{moment(tripData.startDate).format('DD MMM yyyy')}</Text>
                <Text className='text-neutral-500 font-semibold'>Traveling: {tripData?.travellingPeople?.title}</Text>
             </View>
            </View>
        </View>
    )
}