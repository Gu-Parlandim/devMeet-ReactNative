import React, {createContext, useState, useEffect} from "react"

export const EventsContext = createContext({
    loading: false,
    events: {
        "id": "0",
        "tipoId": 0,
        "dataInicio": "0",
        "dataPublicacao": "",
        "descricao": "",
        "link": " ",
        "organizador": " ",
        "titulo": " "},
  });

  
function EventProvide({children}){
    const [dateEvents, setDateEvents] = useState({
        loading: false,
        events: []
    })

    function GetEvents(){
        setDateEvents({...dateEvents,loading: true})
        fetch("https://dev-meet-backend.herokuapp.com/events")
            .then(res => res.json())
            .then(date => {
                setDateEvents({...dateEvents, events: date})
            })
            .catch((err) => console.log(err))
            .finally(() => {
                console.log("teminou")
            })
        setDateEvents({...dateEvents,loading: false})
        return 
    }

    const contextValue = {
        dateEvents,
        getEvents:  GetEvents()
    }

    return (
        <EventsContext.Provider value={contextValue}>
          {children}
        </EventsContext.Provider>
      );
}

export default EventProvide;