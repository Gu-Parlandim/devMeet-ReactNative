import React from "react";
import {  Image} from "react-native";
import Style from "./style";



const EventHeader = ({navigation}) => {
    return (
        <>
            <Style.WrapperInto>
                <Style.Tittle>Eventos disponíveis</Style.Tittle>

                <Style.ButtonBack onPress={() => navigation.goBack()}>
                    <Style.WapperButton>
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
        </>
    );
};


export default EventHeader;