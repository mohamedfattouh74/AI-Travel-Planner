import { Text , View , TouchableOpacity, ActivityIndicator} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from "react";
import StartNewTripCard from "../../components/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../configs/firebase.config";
import UserTripList from "../../components/UserTripList";
import { useRouter } from "expo-router";


export default function MyTrip(){

    const router = useRouter();
    const [userTrips , setUserTrips] = useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const user =auth.currentUser;
    


    useEffect(()=>{
        user && getMyTrips()
    },[user])

    const getMyTrips= async ()=>{
        setIsLoading(true);
        setUserTrips([])
        const q = query(collection(db,'UserTrips'),where('userEmail','==',user.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        setUserTrips(prev=>[...prev , doc.data()])
        });
        setIsLoading(false);
    }

    return (
        <View className='px-8 pt-20 flex-1'>
        {!isLoading && <View className='flex flex-row justify-between items-center'>
                <Text className='text-3xl font-bold text-neutral-800'>My Trips</Text>
                <TouchableOpacity onPress={()=>{router.push('/create-trip/search-place')}}>
                    <AntDesign name="pluscircle" size={34} color="black" />
                </TouchableOpacity>
            </View>}
            <View className='flex-1'>
                {isLoading ? <ActivityIndicator className='flex-1 items-center justify-center' size={'large'} color={'black'}/> : userTrips.length == 0 && !isLoading ? <StartNewTripCard/>: <UserTripList userTrips={userTrips}/>}
            </View>
                
        </View>
    )
}