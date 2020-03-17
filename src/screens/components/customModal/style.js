import styled from 'styled-components/native';

export const ModalBoxArea = styled.KeyboardAvoidingView`
flex: 1;
background-color: rgba(0, 0, 0, 0.5);
justify-content: center;
align-items: center;
`;

export const ModalBox = styled.View`
width: 90%;
padding: 20px;
background-color: #FFF;
`;

export const ModalClose = styled.TouchableHighlight`
height: 40px;
align-self: flex-end;
`;

export const CloseText = styled.Text`
font-size: 18px;
font-weight: bold;
`;

export const ModalBody = styled.View``;
