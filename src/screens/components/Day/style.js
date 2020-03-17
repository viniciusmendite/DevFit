import styled from 'styled-components/native';

export const DayButton = styled.TouchableHighlight`
width: ${props=>props.dayW};
justify-content: center;
align-items: center;
`;

export const DayItem = styled.View`
width: 30px;
height: 30px;
border-radius: 15px;
background-color: ${props=>props.bgColor};
opacity: ${props=>props.opacity};
justify-content: center;
align-items: center
`;

export const DayText = styled.Text`

`;