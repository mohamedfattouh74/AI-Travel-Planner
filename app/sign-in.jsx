import { View , Text , TouchableOpacity, Alert} from "react-native";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { useRouter } from "expo-router";


function submitForm(data){
    Alert.alert(JSON.stringify(data)
    )
}
export default function SignIn(){

    const { control, handleSubmit, formState:{errors}} = useForm();
    const router = useRouter();
    return(
        <View className='pt-24 px-6'>
            <Text className='font-bold text-3xl text-neutral-800'>Let's Sign You In</Text>
            <Text className='text-neutral-600 text-xl mt-4'>Welcome Back</Text>
            <Text className='text-neutral-600 text-xl mt-4'>You've been missed!</Text>
            

            <View className='mt-16'>
                <InputField label={'email'} placeholder={'Enter email address'} control={control}/>
                <InputField label={'password'} placeholder={'Enter password'} control={control} isPassword={true}/>
            </View>

            <View className='flex justify-center items-center mt-12'>
                <TouchableOpacity className='bg-black py-4 px-36 rounded-full' onPress={handleSubmit(submitForm)}>
                            <Text className='text-white font-medium'>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View className='flex justify-center items-center mt-4'>
                <TouchableOpacity className='bg-transparent border border-black py-4 px-28 rounded-full' onPress={()=>router.push('sign-up')}>
                            <Text className='text-black font-medium'>Create Account</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}