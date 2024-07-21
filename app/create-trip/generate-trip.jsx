import { View , Text , Image} from "react-native";
import { useTrip } from "../../contexts/TripContext";
import { AI_PROMPT } from "../../constants/AI-options";
import { useEffect, useState } from "react";
import { chatSession } from "../../configs/GeminiModel";
import { useRouter } from "expo-router";
import {auth,db} from '../../configs/firebase.config'
import { doc, setDoc } from "firebase/firestore"; 


export default function GenerateTrip(){

    const {tripData , setTripData} = useTrip();
    const router = useRouter();
    const user = auth.currentUser;
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        GenerateAITrip();
    },[])
    const GenerateAITrip= async ()=>{
        setIsLoading(true);

        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}',tripData?.location?.name)
        .replace('{totalDays}',tripData?.totalNoOfDays)
        .replace('{totalNight}',tripData?.totalNoOfDays - 1)
        .replace('{traveler}',tripData?.travellingPeople?.title)
        .replace('{budget}',tripData?.budget?.title)        
        .replace('{totalDays}',tripData?.totalNoOfDays)
        .replace('{totalNight}',tripData?.totalNoOfDays - 1)

        console.log(FINAL_PROMPT)

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        const text = await result.response.text();
        const beginningOfJSON=text.indexOf('{');
        const endOfJSON=text.lastIndexOf('}')

        console.log(text);
        console.log('-----------------------------------------------')
        console.log(text.slice(beginningOfJSON,endOfJSON+1))

        const slicedText = text.slice(beginningOfJSON,endOfJSON+1)
        
        const tripResponse=JSON.parse(slicedText);

        console.log(tripResponse)

        setIsLoading(false);

        const docId=(Date.now()).toString();
        const result_= await setDoc(doc(db,"UserTrips",docId),{
            userEmail:user.email,
            tripPlan:tripResponse,
            tripData:JSON.stringify(tripData),
            docId: docId
        })

        router.push('(tabs)/mytrip')

    }


    return (
        <View className='mt-20 mx-8 flex-1 items-center'>
            <Text className='font-bold text-3xl text-neutral-800 mt-4 text-center'>Please Wait...</Text> 
            <Text className='font-bold text-xl text-neutral-800 mt-12 text-center'>We are working to generate your dream trip</Text> 
      
            <Image className='object-contain w-full max-h-80 mt-6 bg-transparent' source={require('../../assets/airplane.gif')}/>

            <Text className='font-bold text-neutral-600 mt-12 text-center'>Don't Go Back</Text> 


        </View>
    )
}
