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

export const WorkoutList = styled.FlatList`
width: 100%
`;