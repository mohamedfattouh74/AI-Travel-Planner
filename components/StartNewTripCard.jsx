import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, View ,TouchableOpacity} from "react-native";

export default function StartNewTripCard(){

    const router = useRouter();

    return(

        <View className='p-6 mt-16 items-center flex-1'>
            <Ionicons name="location-sharp" color={'black'} size={34} />
            <Text className='text-2xl text-neutral-800 font-semibold mt-4'>No trips planned yet</Text>
            <Text className='text-lg text-center text-neutral-500 leading-snug font-medium mt-4'>Looks like it's time to plan a new travel experience! Get started below</Text>
            <View className='flex justify-center items-center mt-6'>
                <TouchableOpacity className='bg-black py-4 px-20 rounded-full' onPress={()=>{router.push('/create-trip/search-place')}}>
                    <Text className='text-white font-medium'>Start New Trip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}