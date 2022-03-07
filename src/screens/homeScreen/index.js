import React from "react";
import { Image, View, StatusBar} from "react-native";
import Style from "./styles";



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
                            Encontre o seu
                            <Style.Span > próximo</Style.Span> evento de programação!
                        </Style.Text>
                    </View>
                </Style.WrappText>

                <Style.MainImage>
                    <Image  source={require('../../assets/images/person.png')}/>
                    
                </Style.MainImage>

                <View>
                    <Style.Button style={({pressed}) => [
                            {
                                backgroundColor: pressed ? "#ff510081" : "#FF5100"
                            }
                        ]} 
                        onPress={() => navigation.navigate('EventScreen')}>

                        <Style.ButtonIcon source={require('../../assets/images/Arrow-right.png')}/>
                    </Style.Button>
                </View>
                
            </Style.Container>
        </>
    );
};


export default HomeScreen;
