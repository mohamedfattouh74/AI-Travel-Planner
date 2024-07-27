import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function PlannedTrip({details}){


    const [activitiesByDate, setActivitiesByDate] = useState({});

    useEffect(()=>{
        const groupedActivities = {};
        Object.entries(details).map(([day,details])=>{
            const date = details.day;
            if (!groupedActivities[date]) {
                groupedActivities[date] = [];
            }
            groupedActivities[date].push(details);
        });
        setActivitiesByDate(groupedActivities);
    },[])


    return (
        <View>
            <Text className='text-lg text-neutral-800 font-bold'>🌄 Plan Details</Text>

            {activitiesByDate && Object.entries(activitiesByDate).map(([day, details]) => (
            <View key={day} className='my-'>
                <Text className='text-neutral-800 text-xl font-bold my-2'>{day}:</Text>
                {details.map((activity, index) => (
                    <View key={index} className='my-1'>
                        <View className='flex flex-row items-center justify-between'>
                        <Text className='text-lg font-semibold'>{activity?.time}</Text>                                      
                        <Text className='text-neutral-600'>📍<Text>{activity?.location}</Text></Text>
                        </View>
                        <Text className='my-1 font-medium'>{activity?.activity}</Text>
                        <Text className='text-neutral-500'>{activity?.best_time_to_visit}</Text>
                    </View>
                ))}
            </View>
        ))}
         </View>
    )
}