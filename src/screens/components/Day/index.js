import React from 'react';
import { connect } from 'react-redux';

import {
    DayButton,
    DayItem,
    DayText
} from './style';

const Page = ({ day, month, workoutDays, dailyProgress, onPress, dayW }) => {

    let bgColor = '#D4D4D4';
    let opacity = 1;

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), month, day);

    if (workoutDays.includes(thisDate.getDay())) {
        if (thisDate.getTime() < today.getTime()) {
            let thisYear = thisDate.getFullYear();
            let thisMonth = thisDate.getMonth() + 1;
            let thisDay = thisDate.getDate();

            thisMonth = (thisMonth < 10) ? '0' + thisMonth : thisMonth;
            thisDay = (thisDay < 10) ? '0' + thisDay : thisDay;

            let dayFormated = `${thisYear}-${thisMonth}-${thisDay}`;

            if (dailyProgress.includes(dayFormated)) {
                bgColor = '#B5FFB8'; // TREINOU
            } else {
                bgColor = '#FFB5B5'; // NÃO TREINOU
            }
        }
    } else {
        opacity = 0.4;
    }

    if (thisDate.getTime() == today.getTime()) {
        bgColor = '#B5EEFF';
        opacity = 1;
    }

    return (
        <DayButton dayW={dayW} onPress={onPress} underlayColor='transparent'>
            <DayItem bgColor={bgColor} opacity={opacity}>
                <DayText>{day}</DayText>
            </DayItem>
        </DayButton>
    );
}

const mapStateToProps = (state) => {
    return {
        workoutDays: state.userReducer.workoutDays
    }
}

export default connect(mapStateToProps)(Page);