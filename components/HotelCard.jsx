import { View , Text , Image} from "react-native";

export default function HotelCard({hotel}){

    return (
        <View className='mr-4 w-44'>
            <Image className='w-full h-28 rounded-lg object-cover' source={require('../assets/landingv2.png')}/>
            <Text className='text-lg text-neutral-800 font-bold my-1'>{hotel?.item?.hotel_name}</Text>
            <View className='flex flex-row items-center justify-between my-1'>
                <Text className='text-neutral-600'>⭐{hotel?.item?.rating}</Text>
                <Text className='text-neutral-600'>💰{hotel?.item?.price}</Text>
            </View>
        </View>
    )
}