import styled from 'styled-components/native';

export const MonthScroll = styled.ScrollView`
width: 100%;
max-height: 60px;
`;

export const MonthButton = styled.TouchableHighlight`
width: ${props=>props.width};
justify-content: center;
align-items: center
`;

export const MonthItem = styled.View`
width: 90%;
height: 30px;
background-color: #EEE;
border-radius: 15px;
justify-content: center;
align-items: center;
`;

export const MonthText = styled.Text``;