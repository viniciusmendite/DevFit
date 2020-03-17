import React from 'react';
import { connect } from 'react-redux';

import Workout from '../components/workout/index';
import {
    Container,
    TextHeader,
    WorkoutList,
    ButtonArea,
    ButtonImage
} from './style';

function Page(props) {

    const nextPage = () => {
        props.navigation.navigate('EditWorkout');
    }

    const AddWorkoutButton = () => {
        return (
            <ButtonArea onPress={nextPage} underlayColor='transparent'>
                <ButtonImage source={require('../../assets/add.png')} />
            </ButtonArea>
        );
    }

    props.navigation.setOptions({
        headerRight: () => (
            <AddWorkoutButton />
        ),
        headerRightContainerStyle: {
            marginRight: 15
        },
        headerTitle: <TextHeader>Meus Treinos</TextHeader>,
        headerTitleAlign: "center"
    });

    const editWorkout = (workout) => {
        props.navigation.navigate("EditWorkout", { workout });
    }

    return (
        <Container>
            <WorkoutList
                data={props.myWorkouts}
                renderItem={({ item }) =>
                    <Workout
                        data={item}
                        editAction={() => editWorkout(item)}
                        delAction={() => props.delWorkout(item)}
                    />}
            />
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
        myWorkouts: state.userReducer.myWorkouts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delWorkout: (workout) => dispatch({ type: "DEL_WORKOUT", payload: { workout } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);