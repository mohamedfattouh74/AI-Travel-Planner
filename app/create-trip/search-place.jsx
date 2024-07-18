import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {View, TextInput, TouchableOpacity, Text } from "react-native";
import { getLocations } from "../../services/locations";
import { SafeAreaView } from "react-native-safe-area-context";


export default function SearchPlace(){

    const navigation = useNavigation();
    const router= useRouter();
    // const [searchValue,setSearchValue]=useState('');
    // const [locationsList,setlocationsList]=useState([]);

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'
        })
    },[])

    function enteringLocation(value){
        setSearchValue(value);
        if(value.length==3){
            getLocations(value);
        }
    }
    return(
        <SafeAreaView className='mt-24'>
            <TextInput className='rounded-lg border border-black p-4 w-full mx-8' placeholder="Search..." value={searchValue} onChangeText={enteringLocation}/>
            <View className='flex justify-center items-center mt-12'>
                <TouchableOpacity className='bg-black py-4 px-36 rounded-full' onPress={router.push('/create-trip/search-place')}>
                            <Text className='text-white font-medium'>Sign In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}