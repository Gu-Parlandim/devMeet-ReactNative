import styled from 'styled-components/native'

const Style = {}

Style.Wrapper = styled.View`
    margin-top:35px;
`

Style.Desc = styled.Text`
    font-family:"Epilogue-Bold";
    font-size:16px;
    color: #fff;
`

Style.WrapperDate = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin:16px 0px;
`

Style.WrapperTime = styled.View`
    flex-direction: row;
    align-items:center;

`
Style.TimeNumber = styled.Text`
    color: #fff;
    font-family:"Rajdhani-Bold";
    font-size:40px;
`

Style.TimeText = styled.Text`
    font-family:"Rajdhani-Medium";
    color: rgba(255, 255, 255, 0.5);
    font-size:10px;
    margin:3px;
`
Style.StatusBar = styled.View`
    width:100%;
    height:9px;
    border-radius:5px;
    background-color:#3C3C3C;
`

Style.Progress = styled.View`
    width:${({percentagem}) => `${percentagem}%`};
    height:100%;
    background-color: #FF5100;
`


export default Style