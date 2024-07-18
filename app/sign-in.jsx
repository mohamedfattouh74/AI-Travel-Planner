import { View , Text , TouchableOpacity, Alert} from "react-native";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { router, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../services/auth";

function submitForm(data){
    login(data,()=>{
        router.replace('/mytrip')
    })
    
}

const formScheme = yup.object({
    email: yup.string().email('Please enter valid email').required('This field is required'),
    password : yup.string().required('This field is required')
})
export default function SignIn(){

    const { control, handleSubmit, formState:{errors}} = useForm({
        resolver : yupResolver(formScheme)
    });
    const router = useRouter();

    return(
        <View className='pt-24 px-6'>
            <Ionicons name="arrow-back" size={24} color={'black'} onPress={()=>router.back()}/>
            <Text className='font-bold text-3xl text-neutral-800 mt-4'>Let's Sign You In</Text>
            <Text className='text-neutral-600 text-xl mt-4'>Welcome Back</Text>
            <Text className='text-neutral-600 text-xl mt-4'>You've been missed!</Text>
            <View className='mt-16'>
                <InputField label={'email'} placeholder={'Enter email address'} control={control} errors={errors}/>
                <InputField label={'password'} placeholder={'Enter password'} control={control} isPassword={true} errors={errors}/>
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