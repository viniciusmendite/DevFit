import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
justify-content: center;
align-items: center;
background-color: #FFF;
padding-left: 30px;
padding-right: 30px;
`;

export const WelcomeText = styled.Text`
font-size: 22px;
color: #333;
margin-top: 50px;
`;

export const WelcomeImage = styled.View`
flex: 1;
justify-content: center;
`;

export const WelcomeLogo = styled.Image`
width: 200px;
height: 200px;
`;

export const BeginConfigArea = styled.View`
width: 100%;
margin-bottom: 50px;
`;

export const BeginButton = styled.TouchableHighlight`
width: 100%;
background-color: #0072C0;
padding: 10px 20px;
border-radius: 100px;
justify-content: center;
align-items: center;
`;

export const BeginButtonText = styled.Text`
color: #FFF;
font-size: 17px;
`;