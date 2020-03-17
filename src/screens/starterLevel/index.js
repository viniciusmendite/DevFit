import React from 'react';
import { connect } from 'react-redux';
import { Alert, Text } from 'react-native';

import {
    Container,
    HeaderText,
    NextButton,
    NextButtonText,
    LevelArea,
    BoldText,
    ButtonLevel
} from './style';

function Page(props) {

    const nextPage = () => {
        if (!props.level) {
            Alert.alert("DevFit 😒", `${props.name.split(' ')[0]}, você precisa escolher um nível!`);
            return
        }

        props.navigation.navigate("StarterRecommendations");
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

    let funnyPhrase = '';
    switch (props.workoutDays.length) {
        case 1:
            funnyPhrase = 'Só 1 dia não vai adianter muito, mas...';
            break;
        case 2:
            funnyPhrase = '2 dias eu acho pouco, mas quem sou eu para te julgar?';
            break;
        case 3:
            funnyPhrase = 'Legal, 3 dias dá pro gasto...';
            break;
        case 4:
            funnyPhrase = 'Legal, 4 dias vai ser TOP!';
            break;
        case 5:
            funnyPhrase = 'É isso aí, 5 dias é o mínimo, lets GO!';
            break;
        case 6:
            funnyPhrase = 'É, 6 dias não é pra todo mundo...';
            break;
        case 7:
            funnyPhrase = 'Wooow! Todo dia?! WTF?!';
            break;
    }

    return (
        <Container>
            <HeaderText>{funnyPhrase}</HeaderText>
            <HeaderText><BoldText>Qual seu nível hoje?</BoldText></HeaderText>

            <LevelArea>
                <ButtonLevel bgColor={props.level == 'beginner' ? '#A5E8BC' : false} disabled={props.level == 'beginner' ? true : false} onPress={() => props.setLevel('beginner')} underlayColor='#CCC'>
                    <Text>Iniciante / Um frango</Text>
                </ButtonLevel>

                <ButtonLevel bgColor={props.level == 'intermediate' ? '#A5E8BC' : false} disabled={props.level == 'intermediate' ? true : false} onPress={() => props.setLevel('intermediate')} underlayColor='#CCC'>
                    <Text>Intermediário / Me viro bem</Text>
                </ButtonLevel>

                <ButtonLevel bgColor={props.level == 'advanced' ? '#A5E8BC' : false} disabled={props.level == 'advanced' ? true : false} onPress={() => props.setLevel('advanced')} underlayColor='#CCC'>
                    <Text>Avançado / Primo do The Rock</Text>
                </ButtonLevel>
            </LevelArea>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
        level: state.userReducer.level,
        workoutDays: state.userReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLevel: (level) => dispatch({ type: 'SET_LEVEL', payload: { level } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);