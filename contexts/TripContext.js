import { createContext, useContext, useState } from "react";


const TripContext= createContext();

export default function TripProvider({children}){

    const [tripData,setTripData]=useState({})

    return(
        <TripContext.Provider value={{
            tripData,
            setTripData
        }}>
        {children}
        </TripContext.Provider>
    )

}

export function useTrip(){
    const context = useContext(TripContext);
    return context
}

