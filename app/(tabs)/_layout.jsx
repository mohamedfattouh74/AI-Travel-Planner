import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout(){

    return (

        <Tabs screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'black',
            tabBarStyle:{
                position:'absolute',
                bottom:25,
                borderRadius:25,
                marginHorizontal:20,
                shadowColor:'black',
                shadowOffset:{width:0,height:10},
                shadowRadius:10,
                shadowOpacity:0.1,
                padding:6
            },
            tabBarLabelStyle:{
                paddingBottom:6
            }
        }}>
            <Tabs.Screen name="mytrip" options={{
                tabBarLabel:'My Trip',
                tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color={color} />
            }}/>
            <Tabs.Screen name="discover" options={{
                tabBarLabel:'Discover',
                tabBarIcon:({color})=><Ionicons name="globe-sharp" size={24} color={color} />
            }}/>
            <Tabs.Screen name="profile" options={{
                tabBarLabel:'Profile',
                tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color={color} />
            }}/>
        </Tabs>
    )
}