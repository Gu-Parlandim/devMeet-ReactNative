import React from "react";
import {  Text, StatusBar, Image, FlatList} from "react-native";
import Style from "./style";
import CardEvents from "../../components/CardEvents";
import EventHeader from "../../components/EventHeader";
import EventFooter from "../../components/EventFooter";

const DATA = [
    {
        id: 1,
        date: "24/02/2002",
        title: "lorem puse nero pe",
        description: "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
        autor: "Comunidade Ballerini"
    },
    {
        id: 2,
        date: "24/02/2002",
        title: "lorem puse nero pe",
        description: "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
        autor: "Comunidade Ballerini"
    },
    {
        id: 3,
        date: "24/02/2002",
        title: "lorem puse nero pe",
        description: "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
        autor: "Comunidade Ballerini"
    },
    {
        id: 4,
        date: "24/02/2002",
        title: "lorem puse nero pe",
        description: "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
        autor: "Comunidade Ballerini"
    },
    {
        id: 5,
        date: "24/02/2002",
        title: "lorem puse nero pe",
        description: "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
        autor: "Comunidade Ballerini"
    },
    {
        id: 6,
        date: "24/02/2002",
        title: "lorem puse nero pe",
        description: "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
        autor: "Comunidade Ballerini"
    },
    {
        id: 7,
        date: "24/02/2002",
        title: "lorem puse nero pe",
        description: "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
        autor: "Comunidade Ballerini"
    }

]

const EventScreen = ({navigation}) => {

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
                    <FlatList  
                        showsVerticalScrollIndicator={false} 
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        keyExtractor={item => item.id}
                        ListHeaderComponent={headerComponent}
                        ListFooterComponent={footerComponent}
                        renderItem={renderItem}/>
                </Style.EventList>
            </Style.Container>
        </>
    );
};


export default EventScreen;