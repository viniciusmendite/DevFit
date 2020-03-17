import React, { useState } from 'react';
import {
    Container,
    WorkoutInfo,
    WorkoutTitle,
    WorkoutScroll,
    MuscleGroup,
    MuscleImage,
    WorkoutActions,
    WorkoutButton,
    WorkoutButtonImage
} from './style';

export default (props) => {

    const [included, setIncluded] = useState(false);

    let muscleGroups = [];
    for (let i in props.data.exercises) {
        if (!muscleGroups.includes(props.data.exercises[i].muscle)) {
            muscleGroups.push(props.data.exercises[i].muscle);
        }
    }

    const useMuscleImage = (muscle) => {
        let muscleImage = null;

        switch (muscle) {
            case 'abs':
                muscleImage = require('../../../assets/muscles/abs.png');
                break;
            case 'back':
                muscleImage = require('../../../assets/muscles/back.png');
                break;
            case 'biceps':
                muscleImage = require('../../../assets/muscles/biceps.png');
                break;
            case 'chest':
                muscleImage = require('../../../assets/muscles/chest.png');
                break;
            case 'gluteos':
                muscleImage = require('../../../assets/muscles/gluteos.png');
                break;
            case 'legs':
                muscleImage = require('../../../assets/muscles/legs.png');
                break;
            case 'shoulders':
                muscleImage = require('../../../assets/muscles/shoulders.png');
                break;
            case 'triceps':
                muscleImage = require('../../../assets/muscles/triceps.png');
                break;
        }

        return muscleImage;
    }

    const addWorkout = () => {
        setIncluded(!included);
        props.addAction();
    }

    const editWorkout = () => {
        props.editAction();
    }

    const delWorkout = () => {
        props.delAction();
    }

    const goWorkout = () => {
        props.goAction();
    }

    return (
        <Container>
            <WorkoutInfo>
                <WorkoutTitle>{props.data.name}</WorkoutTitle>
                <WorkoutScroll horizontal={true} >
                    {muscleGroups.map((m, index) => (
                        <MuscleGroup key={index}>
                            <MuscleImage source={useMuscleImage(m)} />
                        </MuscleGroup>
                    ))}
                </WorkoutScroll>
            </WorkoutInfo>
            <WorkoutActions>
                {props.addAction &&
                    <WorkoutButton onPress={() => addWorkout()} underlayColor='transparent' >
                        <WorkoutButtonImage source={included ? require('../../../assets/check-black.png') : require('../../../assets/add.png')} />
                    </WorkoutButton>
                }

                {props.editAction &&
                    <WorkoutButton onPress={() => editWorkout()} underlayColor='transparent' >
                        <WorkoutButtonImage source={require('../../../assets/edit-black.png')} />
                    </WorkoutButton>
                }

                {props.delAction &&
                    <WorkoutButton onPress={() => delWorkout()} underlayColor='transparent' >
                        <WorkoutButtonImage source={require('../../../assets/trash-black.png')} />
                    </WorkoutButton>
                }

                {props.goAction &&
                    <WorkoutButton onPress={() => goWorkout()} underlayColor='transparent' >
                        <WorkoutButtonImage source={require('../../../assets/play-black.png')} />
                    </WorkoutButton>
                }
            </WorkoutActions>
        </Container>
    );
}