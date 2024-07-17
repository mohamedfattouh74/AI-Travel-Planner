import { View , Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

export default function InputField({label,placeholder,control,isPassword=false}){

    return (
        <View className='my-2'>
            <Text className='mb-2 text-neutral-800'>{label}</Text>
                <Controller 
                    control={control}
                    name={label}
                    render={({field:{onChange,onBlur,value}})=>
                        <TextInput
                        className='rounded-lg border border-black p-4 w-full'
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur} 
                        secureTextEntry={isPassword}/>
                    }
                />
        </View>
    )
}