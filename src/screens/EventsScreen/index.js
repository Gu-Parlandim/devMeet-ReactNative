import React, {useState, useEffect} from "react";
import {  FlatList, Text} from "react-native";
import Style from "./style";
import CardEvents from "../../components/CardEvents";
import EventHeader from "../../components/EventHeader";
import EventFooter from "../../components/EventFooter";


function EventScreen ({navigation, route}){
    const { id } = route.params;

    const [dateEvents, setDateEvents] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getEvents(){
            const  response = await fetch(`https://dev-meet-backend.herokuapp.com/events?tipoId=${id}&page=1`)
            const date = await response.json()
            
            setDateEvents(date)
            if(dateEvents){
                setLoading(false)
            }
            return 
        }
        getEvents()
    }, [])


    function renderItem({item}){
        return <CardEvents list={item} navigation={navigation}/>;
    };
    function headerComponent(){
        return <EventHeader navigation={navigation}/>
    };
    function footerComponent(){
        return <EventFooter />
    };

    return (
        <>
            <Style.Container>
                <Style.EventList>
                    {loading  ? <Text>carregando...</Text> :
                        <FlatList  
                            showsVerticalScrollIndicator={false} 
                            showsHorizontalScrollIndicator={false}
                            data={dateEvents}
                            keyExtractor={item => item.id}
                            ListHeaderComponent={headerComponent}
                            renderItem={renderItem}
                            ListFooterComponent={footerComponent}
                            /> 
                    }
                    </Style.EventList>
            </Style.Container>
        </>
    );
};


export default EventScreen;