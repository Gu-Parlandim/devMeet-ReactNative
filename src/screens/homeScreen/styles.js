import styled from "styled-components/native";

const Style = {};

Style.Container = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    background-color: #282828;
    flex: 1;
`

Style.WrappText = styled.View`
    align-items:flex-start;
    align-self:flex-start;
    margin-left: 50px;
`

Style.Title  = styled.Text`
    font-size:40px;
    font-weight:bold;
    margin-bottom:29px;

`
Style.TitleAfter = styled.Text`
    color: #FF5100;
    font-size:44px;
`

Style.Text = styled.Text`
    color: #C6C6C6;
    font-size:24px;
    max-width:200px;
`

Style.Span =styled.Text`
    background-color:#FF5100;
    padding:1px;
`

Style.MainImage = styled.View`
    margin-bottom:20px;
`

Style.Button = styled.Pressable`
    background-color: #FF5100; 
    border-radius: 12px;
    width: 53px;
    height: 53px;
    justify-content: center;
    align-items: center;

`

Style.ButtonIcon = styled.Image`
    aspect-ratio: 1;
`

export default Style;