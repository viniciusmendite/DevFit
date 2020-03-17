import React, { useState, useEffect } from 'react';

import {
    BalloomTriangle,
    BalloomArea,
    BalloomBigText,
    BalloomButton,
    BalloomButtonText,
    BalloomText,
    Strong
} from './style';

export default (props) => {

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), props.selectedMonth, props.selectedDay);

    // FORMATANDO A DATA EM AAA-MM-DD
    let thisYear = thisDate.getFullYear();
    let thisMonth = thisDate.getMonth() + 1;
    let thisDay = thisDate.getDate();

    thisMonth = (thisMonth < 10) ? '0' + thisMonth : thisMonth;
    thisDay = (thisDay < 10) ? '0' + thisDay : thisDay;

    let dayFormated = `${thisYear}-${thisMonth}-${thisDay}`;
    // FIM DA FORMATAÇÃO DA DATA

    let dayOff = false;
    let isToday = false;
    let isFuture = false;
    let isDone = false;

    if (!props.workoutDays.includes(thisDate.getDay())) {
        dayOff = true;
    } else if (thisDate.getTime() > today.getTime()) {
        isFuture = true
    } else {
        if (props.dailyProgress.includes(dayFormated)) {
            isDone = true;
        } else {
            isDone = false;
        }
    }

    if (thisDate.getTime() == today.getTime()) {
        isToday = true;
    }

    const setDone = () => {
        props.addProgress(dayFormated);
    }

    const setUnDone = () => {
        props.delProgress(dayFormated);
    }

    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const timerFunction = () => {
            let now = Date.now();
            let endToday = new Date();
            endToday.setHours(23);
            endToday.setMinutes(59);
            endToday.setSeconds(59)
            endToday = endToday.getTime();
            let diff = endToday - now; // RESULTADO EM MILISEGUNDOS

            let h = Math.floor(diff / (1000 * 60 * 60)); // PEGANDO A HORA
            let m = Math.floor((diff / (1000 * 60)) - (h * 60)); // PEGANDO O MIN
            let s = Math.floor((diff / 1000) - (m * 60) - ((h * 60) * 60)); // PEGANDO OS SEGUNDOS

            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;

            setTimeLeft(`${h}h ${m}m ${s}s`);
        }

        let timer = setInterval(timerFunction, 1000);
        timerFunction();

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <BalloomTriangle />
            <BalloomArea>
                {dayOff &&
                    <BalloomBigText>Dia de Descanso!</BalloomBigText>
                }

                {isFuture &&
                    <BalloomBigText>Data no Futuro!</BalloomBigText>
                }

                {!dayOff && !isFuture && isDone &&
                    <>
                        <BalloomBigText><Strong>Parabéns</Strong>, você treinou!</BalloomBigText>
                        <BalloomButton onPress={setUnDone} underlayColor='#4AC34E'>
                            <BalloomButtonText>DESMARCAR</BalloomButtonText>
                        </BalloomButton>
                    </>
                }

                {!dayOff && !isFuture && !isDone && !isToday &&
                    <>
                        <BalloomBigText><Strong>Fraco!</Strong> Você falhou neste dia.</BalloomBigText>
                        <BalloomButton onPress={setDone} underlayColor='#4AC34E'>
                            <BalloomButtonText>MARCAR COMO FEITO</BalloomButtonText>
                        </BalloomButton>
                    </>
                }

                {!dayOff && !isFuture && !isDone && isToday &&
                    <>
                        <BalloomBigText><Strong>HOJE TEM TREINO 🚀</Strong></BalloomBigText>
                        <BalloomText>Você tem {timeLeft} para treinar</BalloomText>
                        <BalloomButton onPress={props.goToWorkout} underlayColor='#4AC34E'>
                            <BalloomButtonText>INICIAR TREINO</BalloomButtonText>
                        </BalloomButton>
                    </>
                }

            </BalloomArea>
        </>
    );
}