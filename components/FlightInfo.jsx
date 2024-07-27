import { View , Text , TouchableOpacity , Linking } from "react-native"

export default function FlightInfo({flightData}){

    const onPress = () => Linking.canOpenURL(flightData?.booking_url).then(() => {
        Linking.openURL(flightData?.booking_url);
    });

    return (
        <View className='bg-gray-200 p-4 rounded-lg'>
            <View className='flex flex-row items-center justify-between'>
                <Text className='text-lg text-neutral-800 font-bold'>✈ Flights</Text>
                <TouchableOpacity className='bg-black py-2 px-8 rounded-full' onPress={onPress}>
                    <Text className='text-white font-medium text-center'>Book Here</Text>
            </TouchableOpacity>
            </View>
            <Text><Text className='font-semibold'>Airline: </Text>{flightData?.details?.airline} </Text>
            <Text><Text className='font-semibold'>Class: </Text> {flightData?.details?.flight_class} </Text>
            <Text><Text className='font-semibold'>Price: </Text> {flightData?.price}  </Text>
        </View>
    )

}