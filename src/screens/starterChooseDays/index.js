import React from 'react';
import { connect } from 'react-redux';
import { Alert, Text } from 'react-native';

import {
    Container,
    HeaderText,
    NextButton,
    NextButtonText,
    BoldText,
    DaysArea,
    ButtonDays
} from './style';

function Page(props) {

    const nextPage = () => {
        if (!props.workoutDays.length) {
            Alert.alert("DevFit 😒", `${props.name.split(' ')[0]}, você precisa treinar pelo menos 1 dia!`);
            return
        }

        props.navigation.navigate("StarterLevel");
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

    const toggleDay = (d) => {

        let newWorkoutDays = [...props.workoutDays];

        if (!props.workoutDays.includes(d)) {
            newWorkoutDays.push(d);
        } else {
            newWorkoutDays = newWorkoutDays.filter(i => i != d);
        }

        props.setWorkoutDays(newWorkoutDays);
    }

    let firstName = props.name.split(' ')[0];

    return (
        <Container>
            <HeaderText>Opa, <BoldText>{firstName}</BoldText>, tudo bem?</HeaderText>
            <HeaderText>Quais <BoldText>dias da semana</BoldText> você pretende treinar?</HeaderText>

            <DaysArea>
                <ButtonDays bgColor={props.workoutDays.includes(1) ? '#A5E8BC' : false} onPress={() => toggleDay(1)} underlayColor='#CCC'>
                    <Text>Segunda</Text>
                </ButtonDays>

                <ButtonDays bgColor={props.workoutDays.includes(2) ? '#A5E8BC' : false} onPress={() => toggleDay(2)} underlayColor='#CCC'>
                    <Text>Terça</Text>
                </ButtonDays>

                <ButtonDays bgColor={props.workoutDays.includes(3) ? '#A5E8BC' : false} onPress={() => toggleDay(3)} underlayColor='#CCC'>
                    <Text>Quarta</Text>
                </ButtonDays>

                <ButtonDays bgColor={props.workoutDays.includes(4) ? '#A5E8BC' : false} onPress={() => toggleDay(4)} underlayColor='#CCC'>
                    <Text>Quinta</Text>
                </ButtonDays>

                <ButtonDays bgColor={props.workoutDays.includes(5) ? '#A5E8BC' : false} onPress={() => toggleDay(5)} underlayColor='#CCC'>
                    <Text>Sexta</Text>
                </ButtonDays>

                <ButtonDays bgColor={props.workoutDays.includes(6) ? '#A5E8BC' : false} onPress={() => toggleDay(6)} underlayColor='#CCC'>
                    <Text>Sábado</Text>
                </ButtonDays>

                <ButtonDays bgColor={props.workoutDays.includes(0) ? '#A5E8BC' : false} onPress={() => toggleDay(0)} underlayColor='#CCC'>
                    <Text>Domingo</Text>
                </ButtonDays>
            </DaysArea>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
        workoutDays: state.userReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } }),
        setWorkoutDays: (workoutDays) => dispatch({ type: 'SET_WORKOUTDAYS', payload: { workoutDays } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);