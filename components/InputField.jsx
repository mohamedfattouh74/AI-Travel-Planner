import { View , Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

export default function InputField({label,placeholder,control,isPassword=false,errors}){

    return (
        <View className='my-2'>
            <Text className='mb-2 text-neutral-800'>{label[0].toUpperCase()+ label.slice(1)}</Text>
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
                {errors.label && <Text>{errors.label.message}</Text>}
                
        </View>
    )
}