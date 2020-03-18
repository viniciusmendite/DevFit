import styled from 'styled-components/native';

export const ExerciseItemArea = styled.TouchableHighlight`
height: 50px;
flex-direction: row;
background-color: #FFF;
margin-bottom: 10px;
`;

export const ExerciseMuscleArea = styled.View`
height: 50px;
width: 50px;
background-color: #FFCC98;
border-radius: 10px;
justify-content: center;
align-items: center;
`;

export const ExerciseMuscleImage = styled.Image`
height: 35px;
width: 35px;
`;

export const ExerciseInfo = styled.View`
flex-direction: column;
justify-content: center;
margin-left: 5px;
`;

export const ExerciseName = styled.Text`
font-size: 15;
color: #000;
`;

export const ExerciseDetails = styled.Text`
font-size: 12;
color: #999;
`;

export const ExerciseSwipe = styled.TouchableHighlight`
height: 50px;
background-color: #ff3b1f;
justify-content: center;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
`;

export const ExerciseSwipeIcon = styled.Image`
height: 20px;
width: 20px
margin-left: 15px;
`;