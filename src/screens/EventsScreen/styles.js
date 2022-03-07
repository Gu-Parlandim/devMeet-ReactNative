import styled from "styled-components/native";

const Style = {};

Style.Container = styled.SafeAreaView`
    background-color: #282828;
    flex: 1;
    padding:12% 9%;
`

Style.WrapperInto = styled.View`
    flex-direction:row;
    justify-content: space-between;
    align-items:flex-start ;
`

Style.Tittle = styled.Text`
    color: #fff;
    font-size:32px;
    max-width:170px;
`

Style.ButtonBack = styled.Pressable`
    color: #C6C6C6;
`
Style.WapperButton = styled.View`
    flex-direction:row;
    align-items: center;
`

Style.ButtonText = styled.Text`
    font-size:12px;
    margin-left:2px;
`
Style.Description = styled.View`
    margin:8px 0px 18px ;
    max-width:210px;
`

Style.DescriptionText = styled.Text`
    font-size:16px;
    color:#C6C6C6 ;
`

Style.EventList = styled.SafeAreaView``



export default Style