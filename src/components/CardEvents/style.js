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
    min-height:180px;
`

Style.WrapperDate = styled.View`
    flex-direction:row;
    margin:15px 0 5px;
`

Style.Date = styled.Text`
    font-size:16px;
    color:#FF5100;
    font-weight:bold;
`

Style.Time = styled.Text`
    font-size:16px;
    color:#FF5100;
`

Style.Title = styled.Text`
    color:#282828;
    font-size:20px;

`

Style.Description = styled.Text`
    color:#959595;
    font-size:10px;
    margin:5px 0;
`
Style.Details = styled.View`
    
`
Style.WrapperOrg = styled.View`
    flex-direction:row;
    margin:5px 0;
`

Style.Organizado = styled.Text`
    font-size:8px;
    color:#282828;
`

Style.Contributor =styled.Text`
    font-size:8px;
    color: #282828;
    font-weight: bold;
`
Style.ButtonDetails = styled.Pressable`
    justify-content:center;
    align-items: center;
`

export default Style