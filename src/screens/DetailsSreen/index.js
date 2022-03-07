import React from "react";
import {  ScrollView, StatusBar, Text} from "react-native";
import Style from "./style";
import ButtonBack from "../../components/ButtonBack";
import LinkingComponent from "../../components/LinkingComponent";


const DetailsScreen = ({ route, navigation }) => {
    const { id, dataInicio, descricao, titulo, organizador, link } = route.params;

    function formatDate(date){
        let dateTime = new Date(`${date}`).toLocaleString()
        const NewDate = `${dateTime.substring(8,11)}/${dateTime.substring(0,3)}`.toUpperCase();
        return NewDate;
    }
    function formatTime(dateTime){
        const time = new Date(`${dateTime}`).toLocaleTimeString("pt-Bt", {hour: "numeric",minute: "numeric"}).toString();
        return time.substring(0,5);
    }



    return (
        <>
            <Style.Container>
                <StatusBar backgroundColor="#282828" />
                <ScrollView showsVerticalScrollIndicator={false} 
                            showsHorizontalScrollIndicator={false}>
                    <Style.WrappInto>
                        <Style.WrappDate>
                            <Style.Date>{formatDate(dataInicio)}</Style.Date>
                            <Style.Time>{formatTime(dataInicio)}</Style.Time>
                        </Style.WrappDate>

                        <ButtonBack navigation={navigation}/>
                    </Style.WrappInto>

                    <Style.WrapperText>
                            <Style.Title>{titulo}</Style.Title>
                            <Style.Description>
                                {descricao}
                            </Style.Description>

                            <Style.WrapperOrg>
                                <Style.Organizado>Organizado por: </Style.Organizado>
                                <Style.Contributor>{organizador}</Style.Contributor>
                            </Style.WrapperOrg>
                    </Style.WrapperText>

                    <Style.WrapperEventLink>
                            <Style.LinkTitle>Link do evento</Style.LinkTitle>
                            <Style.BoxLink>
                                <Style.Link>{link}</Style.Link>
                                <LinkingComponent url={link}/>
                            </Style.BoxLink>
                    </Style.WrapperEventLink>
                </ScrollView>
            </Style.Container>
        </>
    );
};

export default DetailsScreen;
