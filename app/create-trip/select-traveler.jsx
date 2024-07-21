import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View , Text , FlatList , TouchableOpacity, ToastAndroid} from "react-native";
import { travelOptions } from "../../constants/travel-options";
import { TravelOptionCard } from "../../components/TravelOptionCard";
import { useTrip } from "../../contexts/TripContext";

export default function SelectTraveler(){

    const navigation = useNavigation();
    const router= useRouter();
    const [currentSelection,setCurrentSelection]=useState({})
    const {tripData,setTripData} = useTrip();


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    useEffect(()=>{
        setTripData({...tripData,travellingPeople:currentSelection.item})
    },[currentSelection])

    function onOptionSelectionContinue(){
        if(!currentSelection.item) {
            ToastAndroid.show('Please select an option', ToastAndroid.LONG);
            return;
        }
        else{
            router.push('/create-trip/select-dates')
        }
    }
    
    return(
        <View className='mt-20 mx-8 flex-1'>
            <Text className='font-bold text-3xl text-neutral-800 mt-4'>Who's Going?</Text>  
            <Text className='font-semibold text-xl text-neutral-600 mt-4'>Choose your travelers</Text> 

            <FlatList 
            className='mt-4'
            data={travelOptions} 
            keyExtractor={item=>item.id} 
            renderItem={(item)=><TouchableOpacity onPress={()=>{setCurrentSelection(item)}}><TravelOptionCard option={item} selectedOption={currentSelection.item}/></TouchableOpacity>}
            horizontal={false}
            />         

            <TouchableOpacity className='bg-black py-4 px-20 rounded-full mb-12' onPress={onOptionSelectionContinue}>
                    <Text className='text-white font-medium text-center'>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}