import styled from 'styled-components/native';

export const ExerciseItemArea = styled.View`
height: 50px;
flex-direction: row;
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
flex: 1;
flex-direction: column;
justify-content: center;
margin-left: 5px;
`;

export const ExerciseName = styled.Text`
font-size: 15;
color: #FFF;
`;

export const ExerciseDetails = styled.Text`
font-size: 12;
color: #999;
`;

export const ExerciseCheck = styled.TouchableHighlight`
width: 60px;
justify-content: center;
align-items: center;
`;

export const ExerciseDone = styled.Image`
width: 40px;
height: 40px;
`;

export const ExerciseUnDone = styled.View`
width: 40px;
height:40px;
border: 5px solid #FFF;
border-radius: 20px;
`;

export const ExerciseCount = styled.View`
width: 25px;
justify-content: center;
`;

export const ExerciseCountText = styled.Text`
font-size: 17px;
color: #FFF;
`;