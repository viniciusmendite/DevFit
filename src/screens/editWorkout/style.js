import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #FFFFFF;
flex:1;
padding: 20px;
`;

export const TextHeader = styled.Text`
font-size:18px;
font-weight: bold;
`;

export const SaveArea = styled.TouchableHighlight`
width: 30px;
height: 30px;
justify-content: center;
align-items: center;
`;

export const SaveImage = styled.Image`
width: 25px;
height: 25px;
`;

export const NameInput = styled.TextInput`
border: 1px solid #CCC;
width: 100%;
height: 50px;
border-radius: 10px;
font-size: 16px;
padding: 10px;
`;

export const ExercisesArea = styled.View`
flex: 1;
margin-top: 20px;
padding-top: 20px;
border-top-width: 1px;
border-top-color: #CCC;
`;

export const ExercisesButton = styled.TouchableHighlight`
width: 100%;
background-color: #4AC34E;
padding: 10px 20px;
border-radius: 100px;
justify-content: center;
align-items: center;
`;

export const ExercisesButtonText = styled.Text`
font-size: 16px;
color: #FFF;
`;

export const ExercisesList = styled.FlatList`
flex: 1;
padding-top: 20px;
`;

export const ModalLabel = styled.Text`
font-size: 15px;
font-weight: bold;
margin-top: 10px;
`;

export const ModalMusclesScroll = styled.ScrollView``;

export const ModalInput = styled.TextInput`
width: 100%;
font-size: 14px;
color: #333;
height: 40px;
border-bottom-width: 1px;
border-bottom-color: #CCC;
`;

export const ModalMuscle = styled.TouchableHighlight`
width: 50px;
height: 50px;
background-color: #EEE;
border-radius: 10px;
justify-content: center;
align-items: center;
margin-right: 10px;
opacity: ${props => props.opacity};
`;

export const ModalMuscleImage = styled.Image`
width: 35px;
height: 35px;
`;

export const ModalExtra = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
`;

export const ModalExtraItem = styled.View`
align-items: center;
`;

export const Button = styled.TouchableHighlight`
width: 100%;
background-color: #4AC34E;
padding: 10px 20px;
border-radius: 100px;
justify-content: center;
align-items: center;
margin-top: 20px;
`;

export const ButtonText = styled.Text`
font-size: 16px;
color: #FFF;
`;