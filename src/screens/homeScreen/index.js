import React from "react";
import { View, StatusBar} from "react-native";
import Style from "./styles";
import IPerson from "../../assets/images/person.svg"
import IArrowRight from "../../assets/images/arrow-right.svg"



const HomeScreen = ({navigation}) => {

    return (
        <>
            <Style.Container>
                <StatusBar  backgroundColor="#282828"/>
                <Style.WrappText>
                    <View>
                        <Style.Title>Olá, Dev 
                            <Style.TitleAfter> !</Style.TitleAfter>
                        </Style.Title>
                    </View>

                    <View>
                        <Style.Text>
                            Encontre o seu <Style.Span >próximo</Style.Span> evento de programação!
                        </Style.Text>
                    </View>
                </Style.WrappText>

                <Style.MainImage>
                    <IPerson />
                </Style.MainImage>

                <View>
                    <Style.Button style={({pressed}) => [
                            {
                                backgroundColor: pressed ? "#ff510081" : "#FF5100"
                            }
                        ]} 
                        onPress={() => navigation.navigate('CategoryScreen')}>

                        <IArrowRight />
                    </Style.Button>
                </View>
                
            </Style.Container>
        </>
    );
};


export default HomeScreen;
