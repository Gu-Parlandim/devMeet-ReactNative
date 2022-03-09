import React, { useEffect, useState } from "react";
import {  ScrollView, StatusBar} from "react-native";
import Style from "./style";
import ButtonBack from "../../components/ButtonBack";
import LinkingComponent from "../../components/LinkingComponent";
import formatDate from "../../services/formatDate";
import formatTime from "../../services/formatTime";
import CardHours from "../../components/CardHours";
import currentTime from "./timing";
import EventsActive from "../../components/EventsActive";


const DetailsScreen = ({ route, navigation }) => {
    const { id, dataInicio, descricao, titulo, organizador, link } = route.params;

    const [timeLeft, setTimeLeft] = useState(currentTime(dataInicio));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(currentTime(dataInicio));
        }, 60000);
        return () => clearTimeout(timer);
    });
    

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

                    {!timeLeft.differenceTime < 1 
                        ? <EventsActive /> 

                        :<CardHours 
                            days={timeLeft.days} 
                            minutes={timeLeft.minutes}
                            hours={timeLeft.hours}/> }

                   
                </ScrollView>
            </Style.Container>
        </>
    );
};

export default DetailsScreen;
