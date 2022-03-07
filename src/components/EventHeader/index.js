import React from "react";
import Style from "./style";
import ButtonBack from "../ButtonBack"



const EventHeader = ({navigation}) => {
    return (
        <>
            <Style.WrapperInto>
                <Style.Tittle>Eventos disponíveis</Style.Tittle>

                <ButtonBack navigation={navigation}/>
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