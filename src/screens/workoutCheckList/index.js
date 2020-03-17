import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StatusBar, Alert } from 'react-native';

import ExerciseItem from '../components/exerciseItem/index';
import {
    Container,
    SafeArea,
    WorkoutHeader,
    WorkoutTitle,
    WorkoutClose,
    WorkoutCloseText,
    WorkoutList
} from './style';

function Page(props) {

    let workout = props.route.params.workout;

    const [exercises, setExercises] = useState([...workout.exercises]);

    const checkAction = (item, index) => {
        let newExercises = [...exercises];

        if (!item.done) {
            newExercises[index].done = true;
        } else {
            newExercises[index].done = false;
        }

        setExercises(newExercises);

        checkWorkout();
    }

    const checkWorkout = () => {
        if (exercises.every(i => i.done)) {
            Alert.alert("DevFit 💪", "PARABÉNS! Você finalizou!");

            let today = new Date();

            // FORMATANDO A DATA EM AAA-MM-DD
            let thisYear = today.getFullYear();
            let thisMonth = today.getMonth() + 1;
            let thisDay = today.getDate();

            thisMonth = (thisMonth < 10) ? '0' + thisMonth : thisMonth;
            thisDay = (thisDay < 10) ? '0' + thisDay : thisDay;

            let dayFormated = `${thisYear}-${thisMonth}-${thisDay}`;

            props.setProgress(dayFormated);
            props.setLastWorkout(workout.id);

            props.navigation.goBack();
        }
    }

    return (
        <Container source={require('../../assets/fitness.jpg')}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <SafeArea>
                <WorkoutHeader>
                    <WorkoutTitle>{workout.name}</WorkoutTitle>
                    <WorkoutClose onPress={() => props.navigation.goBack()} underlayColor="transparent">
                        <WorkoutCloseText>Fechar</WorkoutCloseText>
                    </WorkoutClose>
                </WorkoutHeader>
                <WorkoutList
                    data={exercises}
                    renderItem={({ item, index }) =>
                        <ExerciseItem
                            data={item}
                            index={index}
                            checkAction={() => checkAction(item, index)}
                        />
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </SafeArea>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        lastWorkout: state.userReducer.lastWorkout,
        myWorkouts: state.userReducer.myWorkouts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProgress: (date) => dispatch({ type: "SET_PROGRESS", payload: { date } }),
        setLastWorkout: (id) => dispatch({ type: "SET_LASTWORKOUT", payload: { id } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);