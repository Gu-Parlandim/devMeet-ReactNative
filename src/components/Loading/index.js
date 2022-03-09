import React from "react";

import Style from "./style"
import LottieView from "lottie-react-native";

function Loading(){
    

    return (
        <Style.Wrapper>
           <LottieView 
           source={require("../../assets/animations/animation.json")} 
           style={{width: 180, height:180}}
           autoPlay={true}
           loop={true}/>
        </Style.Wrapper>
    )
}

export default Loading;