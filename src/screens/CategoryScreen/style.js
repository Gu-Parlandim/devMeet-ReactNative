import styled from "styled-components/native"

const Style = {}

Style.Container = styled.SafeAreaView`
    background-color:  #282828;
    padding:5%  9% 0;
    flex: 1;
`
Style.WrapperInto = styled.View`
    margin:5px 0;
`

Style.Title = styled.Text`
    color:#fff;
    font-size:30px;
    font-family:"Epilogue-Bold";
    line-height: 45px;
    margin-bottom:13px;
`
Style.Description = styled.Text`
    line-height: 32px;
    font-size:20px;
    font-family:"Epilogue-Regular" ;
    margin-bottom:5px;
`

Style.WrapperCards = styled.FlatList`
`

Style.WrappButtonNext = styled.SafeAreaView`
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
    margin:12px 0;
`
Style.TextNext = styled.Text`
    margin-right:5px;
    color:#fff;
    font-family:"Epilogue-Bold";
    font-size:16px;
    padding:10px 0;
`

Style.ButtonNext = styled.Pressable`
    justify-content:center;
    align-items:center;
    background-color:#04D361;
    border-radius: 9px;
`

export default Style