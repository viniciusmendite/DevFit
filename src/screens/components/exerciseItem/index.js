import React from 'react';

import {
    ExerciseItemArea,
    ExerciseMuscleArea,
    ExerciseMuscleImage,
    ExerciseInfo,
    ExerciseName,
    ExerciseDetails,
    ExerciseCheck,
    ExerciseDone,
    ExerciseUnDone,
    ExerciseCount,
    ExerciseCountText
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
        <ExerciseItemArea >
            <>
                <ExerciseCount>
                    <ExerciseCountText>{props.index + 1}.</ExerciseCountText>
                </ExerciseCount>

                <ExerciseMuscleArea>
                    <ExerciseMuscleImage source={useMuscleImage(props.data.muscle)} />
                </ExerciseMuscleArea>

                <ExerciseInfo>
                    <ExerciseName>{props.data.name}</ExerciseName>
                    <ExerciseDetails>
                        {`${props.data.sets} séries - ${props.data.reps} rep ${props.data.load ? `- ${props.data.load} kg` : ''}`}
                    </ExerciseDetails>
                </ExerciseInfo>

                <ExerciseCheck onPress={props.checkAction} underlayColor="transparent" >
                    {props.data.done ? <ExerciseDone source={require('../../../assets/check-white.png')} /> : <ExerciseUnDone></ExerciseUnDone>}
                </ExerciseCheck>
            </>
        </ExerciseItemArea>
    );
}