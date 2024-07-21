import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {View , TouchableOpacity, Text, ToastAndroid } from "react-native";
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker'
import { useTrip } from "../../contexts/TripContext";


export default function SearchPlace(){

    const navigation = useNavigation();
    const router= useRouter();
    const [selected, setSelected] = useState('+1');
    const [country, setCountry] = useState('');
    const {tripData,setTripData} = useTrip();


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'
        })
    },[])

    useEffect(()=>{
        setTripData({...tripData,location:country})
    },[country])

    function onCountrySelectionContinue(){
        if(!country){
            ToastAndroid.show('Please select country', ToastAndroid.LONG);
            return;
        }
        else{
            router.push('/create-trip/select-traveler')
        }
    }

    return(
        <View className='mt-20 mx-4 flex-1'>
            <Text className='font-semibold text-xl text-neutral-800 my-4'>Click to select a country</Text>
            <CountryCodeDropdownPicker 
                selected={selected} 
                setSelected={setSelected}
                setCountryDetails={setCountry} 
                countryCodeTextStyles={{fontSize: 13}}
            />

            <TouchableOpacity className='bg-black py-4 px-20 rounded-full mt-6' onPress={onCountrySelectionContinue}>
                    <Text className='text-white font-medium text-center'>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}