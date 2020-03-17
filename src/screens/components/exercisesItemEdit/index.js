import React from 'react';
import { SwipeRow } from 'react-native-swipe-list-view';

import {
    ExerciseItemArea,
    ExerciseMuscleArea,
    ExerciseMuscleImage,
    ExerciseInfo,
    ExerciseName,
    ExerciseDetails,
    ExerciseSwipe,
    ExerciseSwipeIcon
} from './style';

export default (props) => {

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

    return (
        <SwipeRow leftOpenValue={50} disableLeftSwipe={true} >
            <ExerciseSwipe onPress={props.delAction} underlayColor='#ff3b1f' >
                <ExerciseSwipeIcon source={require('../../../assets/trash-white.png')} />
            </ExerciseSwipe>

            <ExerciseItemArea onPress={props.editAction} underlayColor='#FFF' >
                <>
                    <ExerciseMuscleArea>
                        <ExerciseMuscleImage source={useMuscleImage(props.data.muscle)} />
                    </ExerciseMuscleArea>

                    <ExerciseInfo>
                        <ExerciseName>{props.data.name}</ExerciseName>
                        <ExerciseDetails>
                            {`${props.data.sets} séries - ${props.data.reps} rep ${props.data.load ? `- ${props.data.load} kg` : ''}`}
                        </ExerciseDetails>
                    </ExerciseInfo>
                </>
            </ExerciseItemArea>
        </SwipeRow>
    );
}
