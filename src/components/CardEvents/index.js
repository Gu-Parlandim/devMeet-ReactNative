import React ,{memo} from "react";
import Style from "./style";
import IArrowOrange from "../../assets/images/arrow-rightOrange.svg"
import formatDate from "../../services/formatDate";
import formatTime from "../../services/formatTime";

const CardEventsT = ({list, navigation}) => {
   
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

                    <Style.ButtonDetails 
                    onPress={() => navigation.navigate('DetailsScreen', list)}
                    style={({pressed}) => [
                        {
                            opacity: pressed ? 0.4 : 1
                        }]}>
                            <IArrowOrange />
                    </Style.ButtonDetails>
                </Style.Details>
            </Style.Container>
        </>
    );
};

const CardEvents = memo(CardEventsT);
export default CardEvents;
