import styled from "styled-components/native";

const Style = {};


Style.ContaineScholl = styled.ScrollView``

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


Style.EndLline = styled.View`
    padding:10px;
    align-items:center;
    justify-content:center;
`
Style.EndLlineTex = styled.Text`
    color:#fff;
    font-size:12px;
`

export default Style