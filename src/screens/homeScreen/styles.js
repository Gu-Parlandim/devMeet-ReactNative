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
    font-family:"Epilogue-ExtraBold";
    margin-bottom:29px;

`
Style.TitleAfter = styled.Text`
    color: #FF5100;
    font-size:44px;
    font-family:"Epilogue-ExtraBold";
`

Style.Text = styled.Text`
    color: #C6C6C6;
    font-size:24px;
    max-width:270px;
    font-family:"Epilogue-Regular";
    line-height: 40px;
`

Style.Span = styled.Text`
    background-color:#FF5100;
    padding:1px;
    font-family:"Epilogue-Regular";
`

Style.MainImage = styled.View`
    margin-bottom:20px;
`

Style.Button = styled.Pressable`
    background-color: #FF5100; 
    border-radius: 12px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;

`

export default Style;