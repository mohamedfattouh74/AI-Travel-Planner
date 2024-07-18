import { Ionicons } from "@expo/vector-icons";
import { Text , View , TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import StartNewTripCard from "../../components/StartNewTripCard";

export default function MyTrip(){

    const [userTrips , setUserTrips] = useState([])

    return (
        <View className='px-8 pt-20 flex-1'>
            <View className='flex flex-row justify-between items-center'>
                <Text className='text-3xl font-bold text-neutral-800'>My Trips</Text>
                <TouchableOpacity>
                    <AntDesign name="pluscircle" size={34} color="black" />
                </TouchableOpacity>
            </View>
            {userTrips.length == 0 ? <StartNewTripCard/>: ''}
        </View>
    )
}