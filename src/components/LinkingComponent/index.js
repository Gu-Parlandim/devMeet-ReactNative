import React,{useCallback} from "react";
import { Image, Linking, Alert} from "react-native";
import Style from "./style";
import IArrowGreen from "../../assets/images/Arrow-green.svg"




const LinkingComponent = ({url}) => {
    const handlePress = useCallback(async () => {
        if (url.startsWith("https://")) {
            await Linking.openURL(`${url}`);
        } else {
            await Linking.openURL(`https://${url}`);
        }
      }, [url]);



    return (
        <>
           <Style.Button  onPress={handlePress}>
               <IArrowGreen width={20} height={20} />
           </Style.Button>
        </>
    );
};

export default LinkingComponent;
