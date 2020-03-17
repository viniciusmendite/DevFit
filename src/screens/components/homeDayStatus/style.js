import styled from 'styled-components/native';

export const BalloomTriangle = styled.View`
width: 0;
height: 0;
border-left-color: transparent;
border-left-width: 15px;
border-bottom-width: 15px;
border-bottom-color: #EDEDED;
border-right-width: 15px;
border-right-color: transparent;
`;

export const BalloomArea = styled.View`
width: 90%;
padding: 20px;
background-color: #EDEDED;
border-radius: 10px;
`;

export const BalloomBigText = styled.Text`
font-size: 15px;
align-self: center;
`;

export const BalloomButton = styled.TouchableHighlight`
width: 100%;
background-color: #4AC34E;
padding: 10px 20px;
border-radius: 100px;
justify-content: center;
align-items: center;
margin-top: 10px;
`;

export const BalloomButtonText = styled.Text`
color: #FFF;
font-weight: bold;
`;

export const BalloomText = styled.Text`
font-size: 13px;
align-self: center;
margin-top: 10px;
`;

export const Strong = styled.Text`
font-weight: bold;
`;