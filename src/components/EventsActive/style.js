import styled from "styled-components/native"

const Style = {}

Style.Wrapper = styled.View`
    background-color:#323232;
    margin:30px 0;
    width:100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
Style.WrappInto = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

Style.Title = styled.Text`
    color: #fff;
    font-family:"Epilogue-ExtraBold";
    font-size:19px;
    max-width:220px ;
    line-height: 28px;
    margin-left:15px;
`

Style.StatusBar = styled.View`
    width:100%;
    height:8px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    background-color:#1abc6360;
    overflow: hidden;
    margin-top:11px;
`

Style.Progress = styled.View`
    width:${({percentagem}) => `${percentagem}%`};
    height:100%;
    background-color: ${({status}) => status == "ending" ? "#bc2222fa" :  "#04D361"};
`
export default Style