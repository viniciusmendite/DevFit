import React from 'react';
import { connect } from 'react-redux';
import { HeaderBackButton } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';

import Workout from '../components/workout/index';
import {
    Container,
    TextHeader,
    WorkoutList,
    Title
} from './style';

function Page(props) {

    const handleBackAction = () => {
        props.navigation.goBack();
    }

    props.navigation.setOptions({
        headerLeft: () => (
            <HeaderBackButton onPress={handleBackAction} />
        ),
        headerTitle: <TextHeader>Escolha seu Treino</TextHeader>,
        headerTitleAlign: "center"
    });

    const goWorkout = (workout) => {
        props.navigation.navigate('WorkoutCheckList', { workout });
    }

    let lastWorkout = false;
    if (props.lastWorkout) {
        lastWorkout = props.myWorkouts.find(i => i.id == props.lastWorkout);
    }

    return (
        <Container>
            {lastWorkout &&
                <>
                    <Title>Seu último treino foi:</Title>
                    <Workout data={lastWorkout} />
                </>
            }
            <Title>Escolha seu treino de hoje:</Title>
            <WorkoutList
                data={props.myWorkouts}
                renderItem={({ item }) =>
                    <Workout
                        data={item}
                        goAction={() => goWorkout(item)}
                    />}
            />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);