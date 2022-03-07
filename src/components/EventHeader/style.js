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
    max-width:190px;
    font-family:"Epilogue-Bold";
    line-height: 40px;
`


Style.Description = styled.View`
    margin:8px 0px 18px ;
    max-width:230px;
`

Style.DescriptionText = styled.Text`
    font-size:16px;
    color:#C6C6C6 ;
    font-family:"Epilogue-Regular";
    line-height: 24px;
`


export default Style