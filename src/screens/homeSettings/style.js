import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #FFFFFF;
flex:1;
padding: 0 20px;
`;

export const TextHeader = styled.Text`
font-size:18px;
font-weight: bold;
`;

export const Label = styled.Text`
font-size:15px;
font-weight: bold;
margin-top: 20px;
margin-bottom: 10px;
`;

export const Input = styled.TextInput`
border: 1px solid #CCC;
width: 100%;
height: 50px;
border-radius: 10px;
font-size: 16px;
padding: 10px
`;

export const ListArea = styled.View`
flex-direction: row;
justify-content: space-between
`;

export const DayItem = styled.TouchableHighlight`
width: 30px;
height: 30px;
border-radius: 5px;
background-color: #EEE;
justify-content: center;
align-items: center;
`;

export const DayItemText = styled.Text``;

export const LevelItem = styled.TouchableHighlight`
padding: 0 15px;
height: 30px;
border-radius: 5px;
background-color: #EEE;
justify-content: center;
align-items: center;
`;

export const LevelItemText = styled.Text``;

export const ButtonReset = styled.TouchableHighlight`
width: 100%;
background-color: #A5E8BC;
padding: 10px 20px;
border-radius: 100px;
justify-content: center;
align-items: center;
`;

export const ButtonResetText = styled.Text``;