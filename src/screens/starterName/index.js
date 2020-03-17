import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';

import {
    Container,
    HeaderText,
    NameInput,
    NextButton,
    NextButtonText
} from './style';

function Page(props) {

    const nextPage = () => {
        if (!props.name) {
            Alert.alert("DevFit 😒", "Você precisa de um nome!");
            return
        }

        props.navigation.navigate("StarterChooseDays");
    }

    props.navigation.setOptions({
        headerRight: () => (
            <NextButton onPress={nextPage}
                underlayColor="transparent"
            >
                <NextButtonText>Próximo</NextButtonText>
            </NextButton>
        ),
        headerRightContainerStyle: {
            marginRight: 20
        },
        headerTitle: ""
    });

    const nextAction = () => {
        if (!props.name) {
            Alert.alert("DevFit 😅", "Você precisa de um nome!");
            return
        }

        props.navigation.navigate("StarterChooseDays");
    }

    return (
        <Container>
            <HeaderText>Qual é o seu nome?</HeaderText>
            <NameInput
                value={props.name}
                onChangeText={t => props.setName(t)}
                autoFocus={true}
                autoCapitalize='words'
                onSubmitEditing={nextAction}
            />
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);