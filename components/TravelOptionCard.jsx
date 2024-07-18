import { View , Text} from "react-native"

export function TravelOptionCard ({option,selectedOption}){
    const { item }= option;

    return(    
        <View className={`my-2 py-6 px-8 bg-neutral-200 flex-row justify-between items-center rounded-xl border border-transparent ${selectedOption?.title==item?.title && 'border border-neutral-800'}`}>
            <View className=''>
                <Text className='text-neutral-800 text-xl font-bold py-2'>{item.title}</Text>
                <Text className='text-neutral-500 font-medium'>{item.description}</Text>
            </View>
            <Text className='text-4xl'>{item.icon}</Text>
        </View>
        )
    
}