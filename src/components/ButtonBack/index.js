import React from "react";
import {  Image} from "react-native";
import Style from "./style";


function ButtonBack({navigation}){
    return (
        <Style.ButtonBack onPress={() => navigation.goBack()}>
            <Style.WapperButton>
                <Image source={require("../../assets/images/arrow-left.png")}/>
                <Style.ButtonText>Voltar</Style.ButtonText>
            </Style.WapperButton>
        </Style.ButtonBack>
    )
}

export default ButtonBack