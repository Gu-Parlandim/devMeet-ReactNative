import React, { useEffect, useState } from "react"
import Style from "./style"
import {View} from "react-native"
import LottieView from "lottie-react-native";


function EventsActive({timing}){
    const [currentStatus, setCurrentStatus] = useState("on")
    const [percentage, setPercentage] = useState(100)
    useEffect(() => {
        const dayTiming = 86400000
        const time = (timing * -1)
        const progess =  dayTiming - time
    
        if(progess < 0){
            
            setCurrentStatus("ending")
            setPercentage(100)
            return 
        }

        const percentage =  parseInt(( 100 - (time / dayTiming) * 100))
        return setPercentage(percentage)
    }, [timing])
    

    return (
        <Style.Wrapper>
            {currentStatus === "on" 
                ?   <Style.WrappInto>
                        <Style.Title>O Evento já está rolando!</Style.Title>
                        <LottieView 
                            source={require("../../assets/animations/celebration.json")}
                            autoPlay={true}
                            style={{ width: 70, height:87}}/>
                    </Style.WrappInto>

                :  <Style.WrappInto>
                        <Style.Title>Esse evento já foi encerrado</Style.Title>
                        <LottieView 
                            source={require("../../assets/animations/end_of_event.json")}
                            autoPlay={true}
                            style={{ width: 35,marginRight:10}} loop={true}/>
                    </Style.WrappInto>
            }

            <Style.StatusBar>
                <Style.Progress percentagem={percentage} status={currentStatus}>
                </Style.Progress>
            </Style.StatusBar>

        </Style.Wrapper>
    )
}

export default EventsActive;