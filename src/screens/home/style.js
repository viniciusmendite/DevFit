import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #FFF;
`;

export const TextHeader = styled.Text`
font-size:18px;
font-weight: bold;
`;

export const SettingButtonArea = styled.TouchableHighlight`
width: 30px;
height: 30px;
justify-content: center;
align-items: center;
margin-right: 10px;
`;

export const SettingButtonImage = styled.Image`
width: 25px;
height: 25px;
`;

export const Legend = styled.View`
width: 90%;
align-items: flex-start;
margin-top: 30px;
`;

export const LegendText = styled.Text`
color: #555;
`;

export const LegendItem = styled.View`
flex-direction: row;
align-items: center;
margin-top: 5px;
`;

export const LegendBox = styled.View`
width: 17px;
height: 17px;
margin-right: 5px;
`;