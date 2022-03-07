import React,{useCallback} from "react";
import { Image, Linking, Alert} from "react-native";
import Style from "./style";




const LinkingComponent = ({url}) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        } else {
          Alert.alert(`Erro ao tenta abrir: ${url}`);
        }
      }, [url]);



    return (
        <>
           <Style.Button  onPress={handlePress}>
               <Image source={require("../../assets/images/Arrow-Grenn.png")}/>
           </Style.Button>
        </>
    );
};

export default LinkingComponent;
