import styled from "styled-components/native"

const Style = {}

Style.Container = styled.Pressable`
    background-color: ${({selected}) => selected ? "#FF5100" : "#fff"};
    border-radius:10px;
    padding:12px;
    flex:1;
    margin:6px;
    justify-content:space-around ;
    opacity: ${({hasActive, selected}) => hasActive ? selected ? 1 : 0.4 : 1};
`
Style.Title = styled.Text`
    font-family:"Epilogue-Medium" ;
    color:${({selected}) => selected ? "#FFF" : "#282828"};
    font-size:13px;
    margin:18px  0;
`

Style.WrappInfo = styled.View`
    flex-direction:row;
`


Style.Info = styled.Text`
    color: ${({selected}) => selected ? "#FFF" :"#FF5100"};
    font-size:10px;
    font-family:"Epilogue-Bold";
`

Style.InfoSpan = styled.Text`
    font-family:"Epilogue-Regular";
    font-size:10px;
    color: ${({selected}) => selected ? "#FFF" : "#C7C7C7"};
`

export default Style