import React from "react";
import {  Text, StatusBar, Image} from "react-native";
import Style from "./style";



const CardEvents = ({list, navigation}) => {

    return (
        <>
            <Style.Container>
                <Style.WrapperDate>
                    <Style.Date>02/mar</Style.Date>
                    <Style.Time>- 19:00</Style.Time>
                </Style.WrapperDate>

                <Style.Title>Criando interfaces muito malucas com o Figma!</Style.Title>

                <Style.Description  numberOfLines={3}>
                    Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.
                </Style.Description>

                <Style.Details>
                    <Style.WrapperOrg>
                        <Style.Organizado>Organizado por: </Style.Organizado>
                        <Style.Contributor>Comunidade Ballerini</Style.Contributor>
                    </Style.WrapperOrg>

                    <Style.ButtonDetails onPress={() => navigation.navigate('DetailsScreen', list)}>
                        <Image source={require("../../assets/images/Arrow-rightOrange.png")}/>
                    </Style.ButtonDetails>
                </Style.Details>
            </Style.Container>
        </>
    );
};

export default CardEvents;
