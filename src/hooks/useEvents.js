import React, {useContext} from "react";
import { EventsContext } from "../services/Api";


function useEvents(){
    const {dateEvents, getEvents} = useContext(EventsContext)
    return  [dateEvents , getEvents]
}

export default useEvents;