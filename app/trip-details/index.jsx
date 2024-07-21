import { useLocalSearchParams, useNavigation } from "expo-router";
import moment from "moment";
import { useEffect, useState } from "react";
import { View, Text , Image  } from "react-native";
import FlightInfo from "../../components/FlightInfo";
import HotelList from "../../components/HotelList";
import PlannedTrip from "../../components/PlannedTrip";
import { ScrollView } from "react-native-gesture-handler";

export default function TripDetails(){

    const navigation = useNavigation();
    const {trip} = useLocalSearchParams();
    const [tripDetails,setTripDetails]=useState();

    const formatData=(data)=>{
        return JSON.parse(data);
    }


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })

        const formattedData=formatData(trip)
        setTripDetails(formattedData);
        console.log(formattedData);
        console.log(formattedData.tripPlan?.trip?.destination)
        
    },[])

    return tripDetails && (
            
        <ScrollView>
            <View>
                <Image className='w-full h-72' source={{uri:`https://via.placeholder.com/900x450?text=${tripDetails.tripPlan?.trip?.destination}`}}/>
            </View>
            <View className='bg-white -mt-4 rounded-t-[30px] flex-1 p-4'>
                <Text className='text-lg text-neutral-800 font-bold'>{tripDetails.tripPlan?.trip?.destination}</Text>
                <View className='flex flex-row items-center gap-2'>
                    <Text className='text-neutral-500 font-semibold'>{moment(formatData(tripDetails?.tripData).startDate).format('DD MMM yyyy')}</Text>
                    <Text className='text-neutral-500 font-semibold'>{moment(formatData(tripDetails?.tripData).endDate).format('DD MMM yyyy')}</Text>
                </View>
                <Text className='text-neutral-500 font-semibold'>🚙 {formatData(tripDetails?.tripData).travellingPeople?.title}</Text>
                <View className='mx-1 mt-4'>
                    <FlightInfo flightData={tripDetails.tripPlan?.trip?.flight}/>
                </View>
                <View className='mx-1 mt-4'>
                    <HotelList hotelList={tripDetails.tripPlan?.trip?.hotels}/>
                </View>
                <View className='mx-1 mt-4'>
                    <PlannedTrip details={tripDetails.tripPlan?.trip?.daily_plan}/>
                </View>
            </View>
        </ScrollView>
        )
    }
