import React ,{ useEffect, useState} from "react"
import Style from "./style"

function CardHours({days,hours, minutes,  postDate,initDate, timing}){

    const [percentage, setPercentage] = useState(100)
    useEffect(() => {
        const informedDate = new Date(postDate)
        const localDate = new Date(initDate)

        const differenceTime =  localDate - informedDate 
       
        const percentage =  parseInt(  ((timing / differenceTime) * 100))
        return setPercentage(percentage)
    }, [timing])


    return(
        <Style.Wrapper>
            <Style.Desc>Tempo até o evento</Style.Desc>
            <Style.WrapperDate>
                <Style.WrapperTime>
                    <Style.TimeNumber>{days}</Style.TimeNumber>
                    <Style.TimeText>DAY(s)</Style.TimeText>
                </Style.WrapperTime>

                <Style.WrapperTime>
                    <Style.TimeNumber>{hours}</Style.TimeNumber>
                    <Style.TimeText>HOUR(s)</Style.TimeText>
                </Style.WrapperTime>

                <Style.WrapperTime>
                    <Style.TimeNumber>{minutes}</Style.TimeNumber>
                    <Style.TimeText>MIN(s)</Style.TimeText>
                </Style.WrapperTime>
            </Style.WrapperDate>

            <Style.StatusBar>
                <Style.Progress percentagem={percentage}>
                </Style.Progress>
            </Style.StatusBar>
        </Style.Wrapper>
    )
}

export default CardHours;
