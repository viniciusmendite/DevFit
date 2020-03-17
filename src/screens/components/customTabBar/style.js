import styled from 'styled-components/native';

export const TabBarArea = styled.SafeAreaView`
background-color: #EEE;
flex-direction: row;
`;

export const TabBarItem = styled.View`
flex: 1;
height: 65px;
align-items: center
`;

export const TabRegular = styled.TouchableHighlight`
align-items: center
`;

export const TabRegularImage = styled.Image`
width: 25px;
height: 25px;
margin-top: 10px;
margin-bottom: 5px;
`;

export const TabRegularText = styled.Text`
`;

export const TabBall = styled.TouchableHighlight`
width: 100px;
height: 100px;
background-color: #3BA237;
border-radius: 50px;
justify-content: center;
align-items: center;
border: 5px solid #FFF;
margin-top: -50px; 
`;

export const TabBallImage = styled.Image`
width: 40px;
height: 40px;
`;
