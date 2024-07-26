import { useEffect, useState } from "react";
import { View , Text , Image} from "react-native";
import { fetchImage } from "../services/unsplashImages";

export default function HotelCard({hotel}){

    const [imageURL,setImageURL] = useState();

    useEffect(()=>{
        fetchImage(hotel?.item?.hotel_name).then(data=>{
            console.log(data)
            setImageURL(data.results[0].urls.regular)
        });
    },[])

    return (
        <View className='mr-4 w-44'>
            <Image className='w-full h-28 rounded-lg object-cover' source={{uri:imageURL}}/>
            <Text className='text-lg text-neutral-800 font-bold my-1'>{hotel?.item?.hotel_name}</Text>
            <Text className='text-xs text-neutral-500'>{hotel?.item?.address}</Text>
            <View className='flex flex-row items-center justify-between my-3'>
                <Text className='text-neutral-600'>⭐{hotel?.item?.rating}</Text>
                <Text className='text-neutral-600'>💰{hotel?.item?.price}</Text>
            </View>
        </View>
    )
}