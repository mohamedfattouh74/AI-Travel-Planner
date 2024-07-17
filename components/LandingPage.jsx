import { useRouter } from "expo-router";
import { View , Text , Image , StyleSheet, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function LandingPage(){

    const router = useRouter();
    return (
        <>
        <View>
            <Image style={styles.landingImage} source={require('../assets/landing.png')}/>
        </View>

        <View className='bg-white -mt-4 rounded-t-[30px] flex-1'>
            <Text className='text-neutral-800 font-bold text-center text-3xl pt-12'>AI Travel Planner</Text>

            <Text className="text-neutral-500 text-center pt-4 px-16">Discover your next adventure effortlessly. Personalized itineraries at your fingertips. Travel smarter with AI-driven insights.</Text>
            
            <View className='flex justify-center items-center mt-16'>
                <TouchableOpacity className='bg-black py-4 px-24 rounded-full' onPress={()=>router.push('sign-in')}>
                    <Text className='text-white font-medium'>Get Started</Text>
                </TouchableOpacity>
            </View>
       
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    landingImage:{
        width:wp(100),
        height:hp(60)
    }
})