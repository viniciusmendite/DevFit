import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';

import Day from '../Day/index';
import {
    DaysScroll
} from './style';

const screenWidth = Math.round(Dimensions.get('window').width);
let dayW = Math.round(screenWidth / 9);
let offsetW = Math.round((screenWidth - dayW) / 2);

export default (props) => {

    const DayRef = useRef();

    const [selectedDay, setSelectedDay] = useState(props.selectedDay);

    const handleScrollEnd = (event) => {
        let posX = event.nativeEvent.contentOffset.x;
        let targetDay = Math.round(posX / dayW) + 1;
        setSelectedDay(targetDay);
    }

    const scrollToDay = (d) => {
        let posX = (d - 1) * dayW;
        DayRef.current.scrollTo({ x: posX, y: 0, animated: true });
        setSelectedDay(d);
    }

    useEffect(() => {
        props.setSelectedDay(selectedDay);
    }, [selectedDay]);

    useEffect(() => {
        setTimeout(() => {
            if (props.selectedMonth == new Date().getMonth()) {
                scrollToDay(new Date().getDate());
            } else {
                scrollToDay(1);
            }
        }, 10);
    }, [props.selectedMonth]);

    let days = [];
    let daysInMonth = new Date(new Date().getFullYear(), (props.selectedMonth + 1), 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    return (
        <DaysScroll
            ref={DayRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate='fast'
            snapToInterval={dayW}
            contentContainerStyle={{ paddingLeft: offsetW, paddingRight: offsetW }}
            onMomentumScrollEnd={handleScrollEnd}
        >
            {days.map((d, k) => (
                <Day
                    key={k}
                    day={d}
                    month={props.selectedMonth}
                    dailyProgress={props.dailyProgress}
                    workoutDays={props.workoutDays}
                    onPress={() => scrollToDay(d)}
                    dayW={dayW}
                />
            ))}
        </DaysScroll>
    );
}