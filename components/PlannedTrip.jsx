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
            <View key={day}>
                <Text className='text-neutral-800 text-lg font-semibold'>{day}</Text>
                {details.map((activity, index) => (
                    <View key={index}>
                        <Text>{activity.activity}</Text>
                        <Text>{activity.best_time_to_visit}</Text>
                        <Text>{activity.location}</Text>
                        <Text>{activity.time}</Text>
                    </View>
                ))}
            </View>
        ))}
         </View>
    )
}