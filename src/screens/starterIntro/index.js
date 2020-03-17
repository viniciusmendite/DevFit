import React from 'react';

import {
    Container,
    WelcomeText,
    WelcomeImage,
    WelcomeLogo,
    BeginConfigArea,
    BeginButton,
    BeginButtonText
} from './style';

export default (props) => {

    const start = () => {
        props.navigation.navigate('StarterName');
    }

    return (
        <Container>
            <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
            <WelcomeImage>
                <WelcomeLogo source={require('../../assets/boneco.png')} />
            </WelcomeImage>
            <BeginConfigArea>
                <BeginButton onPress={start} underlayColor='#0B7AC6' >
                    <BeginButtonText>Iniciar Configuração</BeginButtonText>
                </BeginButton>
            </BeginConfigArea>
        </Container>
    );
}