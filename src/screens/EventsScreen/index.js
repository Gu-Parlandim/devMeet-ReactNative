import React from "react";
import {  Text, StatusBar, Image, FlatList} from "react-native";
import Style from "./styles";
import CardEvents from "../../components/CardEvents";

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
        id: 7,
        date: "24/02/2002",
        title: "lorem puse nero pe",
        description: "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
        autor: "Comunidade Ballerini"
    }

]

const EventScreen = ({navigation}) => {

    return (
        <>
            <Style.Container>
            <StatusBar  backgroundColor="#282828"/>
                <Style.WrapperInto>
                    <Style.Tittle>Eventos disponíveis</Style.Tittle>

                    <Style.ButtonBack>
                        <Style.WapperButton onPress={() => navigation.goBack()}>
                            <Image source={require("../../assets/images/arrow-left.png")}/>
                            <Style.ButtonText>Voltar</Style.ButtonText>
                        </Style.WapperButton>
                    </Style.ButtonBack>

                </Style.WrapperInto>

                <Style.Description>
                    <Style.DescriptionText>
                        Selecione o evento desejado. E espere sua data!
                    </Style.DescriptionText>
                </Style.Description>

                <Style.EventList>
                    <FlatList 
                        data={DATA}
                        renderItem={(item) => <CardEvents>{item}</CardEvents>}/>
                </Style.EventList>

            </Style.Container>
        </>
    );
};


export default EventScreen;