import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
background-color: #000;
flex:1;
align-items: center;
`;

export const SafeArea = styled.SafeAreaView`
flex: 1;
width: 100%;
align-items: center;
background-color: rgba(1, 59, 14, 0.8);
padding-top: 20px;
`;

export const WorkoutHeader = styled.View`
flex-direction: row;
width: 90%;
align-items: center;
height: 70px;
`;

export const WorkoutTitle = styled.Text`
flex: 1;
color: #FFF;
font-size: 20px;
`;

export const WorkoutClose = styled.TouchableHighlight``;

export const WorkoutCloseText = styled.Text`
font-size: 22px;
color: #FFF;
font-weight: bold;
`;

export const WorkoutList = styled.FlatList`
width: 90%;
flex: 1;
`;