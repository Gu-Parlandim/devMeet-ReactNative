import styled from "styled-components/native";

const Style = {};

Style.Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    padding:0 5%;
    margin-bottom:30px;
    margin-top:9px;
    border-radius:9px;
    flex:1;
`

Style.WrapperDate = styled.View`
    flex-direction:row;
    margin:15px 0 5px;
`

Style.Date = styled.Text`
    font-size:16px;
    color:#FF5100;
    font-family:"Rajdhani-Bold";
`

Style.Time = styled.Text`
    font-size:16px;
    color:#FF5100;
    font-family:"Rajdhani-Medium";
`

Style.Title = styled.Text`
    color:#282828;
    font-size:20px;
    font-family:"Epilogue-ExtraBold";
    line-height: 24px;

`

Style.Description = styled.Text`
    color:#959595;
    font-size:10px;
    margin:5px 0;
    font-family:"Epilogue-Regular";
    line-height: 14px;
`
Style.Details = styled.View`
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
`
Style.WrapperOrg = styled.View`
    flex-direction:row;
    margin:10px 0 18px;
`

Style.Organizado = styled.Text`
    font-size:8px;
    color:#282828;
    font-family:"Epilogue-Medium";
`

Style.Contributor =styled.Text`
    font-size:8px;
    color: #282828;
    font-family:"Epilogue-Bold";
`
Style.ButtonDetails = styled.Pressable`
    justify-content:center;
    align-items: center;
    width:5px;
    height:5px;
`

export default Style