import React from 'react';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import {
    Container,
    HeaderText,
    NextButton,
    NextButtonText,
    WorkoutList
} from './style';
import workoutJSON from '../../presetWorkouts.json';
import Workout from '../components/workout/index';

function Page(props) {

    const nextPage = () => {
        props.navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{
                name: 'AppTab'
            }]
        })
        );
    }

    props.navigation.setOptions({
        headerRight: () => (
            <NextButton onPress={nextPage}
                underlayColor="transparent"
            >
                <NextButtonText>{(props.myWorkouts.length > 0) ? "Concluir" : "Ignorar"}</NextButtonText>
            </NextButton>
        ),
        headerRightContainerStyle: {
            marginRight: 20
        },
        headerTitle: ""
    });

    const addWorkout = (item) => {
        if (props.myWorkouts.findIndex(i => i.id == item.id) < 0) {
            props.addWorkout(item);
        } else {
            props.delWorkout(item);
        }
    }

    return (
        <Container>
            <HeaderText>Opções de treinos pré-criados com base no seu nível.</HeaderText>
            <HeaderText>Você selecionou {props.myWorkouts.length} {(props.myWorkouts.length == 1) ? "treino" : "treinos"}</HeaderText>

            <WorkoutList
                data={workoutJSON}
                renderItem={({ item }) => <Workout data={item} addAction={() => addWorkout(item)} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        myWorkouts: state.userReducer.myWorkouts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWorkout: (workout) => dispatch({ type: 'ADD_WORKOUT', payload: { workout } }),
        delWorkout: (workout) => dispatch({ type: 'DEL_WORKOUT', payload: { workout } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);