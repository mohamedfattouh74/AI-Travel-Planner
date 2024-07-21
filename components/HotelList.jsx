import { View , Text , FlatList} from "react-native";
import HotelCard from "./HotelCard";

export default function HotelList({hotelList}){

    return ( 
        <View>
            <Text className='text-lg text-neutral-800 font-bold'>🏩 Hotel Recommendation</Text>
            <FlatList className='mt-4' 
            horizontal={true} 
            data={hotelList} 
            renderItem={(item,index)=><HotelCard hotel={item} key={index}/>}
            showsHorizontalScrollIndicator={false}
            />
         </View>
    )
}