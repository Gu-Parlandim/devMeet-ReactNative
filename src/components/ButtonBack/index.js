import React from "react";
import {  Image} from "react-native";
import Style from "./style";
import IArrowLeft from "../../assets/images/arrow-left.svg"


function ButtonBack({navigation}){
    return (
        <Style.ButtonBack 
            onPress={() => navigation.goBack()}
            style={({pressed}) => [
                {
                    opacity: pressed ? 0.1 : 1
                }]}>
                <Style.WapperButton>
                    <IArrowLeft />
                    <Style.ButtonText >Voltar</Style.ButtonText>
                </Style.WapperButton>
        </Style.ButtonBack>
    )
}

export default ButtonBack