import styled from "styled-components/native";

const Style = {};

Style.Container = styled.SafeAreaView`
    background-color: #282828;
    flex: 1;
    padding:5%  9% 0;
`

Style.WrappInto = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

Style.WrappDate = styled.View`

`
Style.Date = styled.Text`
    font-size:24px;
    font-family:"Rajdhani-Bold";
    color:#FF5100;
`

Style.Time = styled.Text`
    font-size:24px;
    font-family:"Rajdhani-Medium";
    color:#FF5100;
`

Style.ButtonBack = styled.Pressable`
    justify-content:center;
    align-items:center;
`
Style.WrapperText = styled.View`
    margin:32px 0 40px;
`

Style.Title = styled.Text`
    font-family:"Epilogue-ExtraBold";
    font-size:28px;
    margin-bottom:14px;
    color:#fff;
    line-height: 40px;
`
Style.Description = styled.Text`
    color:#959595;
    font-family:"Epilogue-Regular";
    font-size:12px;
    margin-bottom:27px;
    line-height: 24px;
`

Style.WrapperOrg = styled.View`
    flex-direction:row;
    margin:5px 0;
`

Style.Organizado = styled.Text`
    font-size:10px;
    color:#fff;
    font-family:"Epilogue-Medium";
`

Style.Contributor =styled.Text`
    font-size:10px;
    color: #fff;
    font-family:"Epilogue-Bold";
`
Style.WrapperEventLink = styled.View`
    justify-content:center;
    align-items: center;
`

Style.LinkTitle = styled.Text`
    color:#fff;
    font-size:20px;
    font-family:"Epilogue-ExtraBold";
    margin-bottom:22px;
`
Style.BoxLink = styled.View`
    background-color:#323232;
    width:100%;
    padding:15px;
    border-radius: 5px;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
`

Style.Link = styled.Text`
    font-size:16px;
    color:#fff;
    font-family:"Rajdhani-Regular";
`
export default Style