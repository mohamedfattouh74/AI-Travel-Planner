import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity, Text, View, ToastAndroid } from "react-native";
import { useEffect, useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment'

export default function SelectDates(){

    const navigation = useNavigation();
    const router = useRouter();
    const [startDate,setStartDate]=useState()
    const [endDate,setEndDate]=useState()

    function onDateChange(date,type){
        if(type=='START_DATE') setStartDate(moment(date));
        if(type=='END_DATE') setEndDate(moment(date));
    }

    function onDateSelectionContinue(){
        if(!startDate && !endDate) {
            ToastAndroid.show('Please select start and end dates', ToastAndroid.LONG);
            return;
        }
        const totalNoOfDays = endDate.diff(startDate,'days')
        console.log(totalNoOfDays+1); // we need to add 1 as the max range duration allows us to add number +1
        router.push('/create-trip/select-budget') 
    }


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    return(
        <View className='mt-20 mx-8 flex-1'>
            <Text className='font-bold text-3xl text-neutral-800 mt-4'>Travel Dates</Text>  

            <View className='mt-8'> 
                <CalendarPicker 
                selectedRangeStyle={{backgroundColor:'black'}}
                selectedDayTextStyle={{color:'white'}}
                todayBackgroundColor="#757575"
                minDate={new Date()}
                maxRangeDuration={5}
                allowRangeSelection={true} 
                onDateChange={onDateChange} />
            </View>

            <TouchableOpacity className='bg-black py-4 px-20 rounded-full mt-6' onPress={onDateSelectionContinue}>
                    <Text className='text-white font-medium text-center'>Continue</Text>
            </TouchableOpacity>

        </View>

    )
}