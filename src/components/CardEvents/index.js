import React ,{memo} from "react";
import {  Image} from "react-native";
import Style from "./style";


const CardEventsT = ({list, navigation}) => {
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
                <Style.WrapperDate>
                    <Style.Date>{formatDate(list.dataInicio)} </Style.Date>
                    <Style.Time>{formatTime(list.dataInicio)}</Style.Time>
                </Style.WrapperDate>

                <Style.Title>{list.titulo}</Style.Title>

                <Style.Description  numberOfLines={3}>
                    {list.descricao}
                </Style.Description>

                <Style.Details>
                    <Style.WrapperOrg>
                        <Style.Organizado>Organizado por: </Style.Organizado>
                        <Style.Contributor>{list.organizador}</Style.Contributor>
                    </Style.WrapperOrg>

                    <Style.ButtonDetails onPress={() => navigation.navigate('DetailsScreen', list)}>
                        <Image source={require("../../assets/images/Arrow-rightOrange.png")}/>
                    </Style.ButtonDetails>
                </Style.Details>
            </Style.Container>
        </>
    );
};

const CardEvents = memo(CardEventsT);
export default CardEvents;
