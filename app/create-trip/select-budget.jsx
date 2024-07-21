import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View , Text , FlatList , TouchableOpacity, ToastAndroid} from "react-native";
import { budgetOptions } from "../../constants/budget-options";
import { TravelOptionCard } from "../../components/TravelOptionCard";
import { useTrip } from "../../contexts/TripContext";

export default function SelectBudget(){

    const navigation = useNavigation();
    const router= useRouter();
    const [currentSelection,setCurrentSelection]=useState({})

    const {tripData,setTripData} = useTrip();
    console.log(tripData)
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    useEffect(()=>{
        setTripData({...tripData,budget:currentSelection.item})
    },[currentSelection])

    function onBudgetSelectionContinue(){
        if(!currentSelection.item) {
            ToastAndroid.show('Please select budget', ToastAndroid.LONG);
            return;
        }
        else{
            router.push('/create-trip/review-trip')
        }
    }

    return (
        <View className='mt-20 mx-8 flex-1'>
            <Text className='font-bold text-3xl text-neutral-800 mt-4'>Budget</Text>  
            <Text className='font-semibold text-lg text-neutral-600 mt-4'>Choose spending habits for your trip</Text> 

            <FlatList 
            className='mt-4'
            data={budgetOptions} 
            keyExtractor={item=>item.id} 
            renderItem={(item)=><TouchableOpacity onPress={()=>{setCurrentSelection(item)}}><TravelOptionCard option={item} selectedOption={currentSelection.item}/></TouchableOpacity>}
            horizontal={false}
            />   

            <TouchableOpacity className='bg-black py-4 px-20 rounded-full mb-24' onPress={onBudgetSelectionContinue}>
                    <Text className='text-white font-medium text-center'>Continue</Text>
            </TouchableOpacity>

        </View>
    )
}