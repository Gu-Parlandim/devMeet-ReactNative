import React from "react";
import {  ScrollView, StatusBar, Text} from "react-native";
import Style from "./style";
import ButtonBack from "../../components/ButtonBack"



const DetailsScreen = ({ route, navigation }) => {
    const { id } = route.params;


    return (
        <>
            <Style.Container>
                <StatusBar backgroundColor="#282828" />
                <ScrollView showsVerticalScrollIndicator={false} 
                            showsHorizontalScrollIndicator={false}>
                    <Style.WrappInto>
                        <Style.WrappDate>
                            <Style.Date>02/MAR</Style.Date>
                            <Style.Time>19:00</Style.Time>
                        </Style.WrappDate>

                        <ButtonBack navigation={navigation}/>
                    </Style.WrappInto>

                    <Style.WrapperText>
                            <Style.Title>Criando interfaces muito malucas com o Figma!</Style.Title>
                            <Style.Description>
                                Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.
                            </Style.Description>

                            <Style.WrapperOrg>
                                <Style.Organizado>Organizado por: </Style.Organizado>
                                <Style.Contributor>Comunidade Ballerini</Style.Contributor>
                            </Style.WrapperOrg>
                    </Style.WrapperText>

                    <Style.WrapperEventLink>
                            <Style.LinkTitle>Link do evento</Style.LinkTitle>
                            <Style.BoxLink>
                                <Style.Link>meet.google/12345</Style.Link>
                            </Style.BoxLink>
                    </Style.WrapperEventLink>
                </ScrollView>
            </Style.Container>
        </>
    );
};

export default DetailsScreen;
