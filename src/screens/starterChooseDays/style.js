import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #FFF;
padding-left: 30px;
padding-right: 30px;
padding-top: 30px;
`;

export const HeaderText = styled.Text`
font-size: 15px;
text-align: center;
color: #333;
margin-bottom: 30px;
`;

export const NextButton = styled.TouchableHighlight`
`;

export const NextButtonText = styled.Text`
color: #0B7AC6;
font-size: 20px;
`;

export const BoldText = styled.Text`
font-weight: bold;
`;

export const DaysArea = styled.View`
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`;

export const ButtonDays = styled.TouchableHighlight`
width: 100px;
background-color: ${props => props.bgColor || "#EEE"};
padding: 10px 20px;
border-radius: 100px;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`;