import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';

import HomeMonthScroll from '../components/homeMonthScroll/index';
import HomeDaysScroll from '../components/homeDaysScroll/index';
import HomeDayStatus from '../components/homeDayStatus/index';

import {
    Container,
    TextHeader,
    SettingButtonArea,
    SettingButtonImage,
    Legend,
    LegendText,
    LegendItem,
    LegendBox
} from './style';

function Page(props) {

    const SettingButton = () => {
        return (
            <SettingButtonArea underlayColor='transparent' onPress={() => props.navigation.navigate('HomeSettings')} >
                <SettingButtonImage source={require('../../assets/config.png')} />
            </SettingButtonArea>
        );
    }

    props.navigation.setOptions({
        headerRight: () => (
            <SettingButton />
        ),
        headerTitle: <TextHeader>Seu progresso diário</TextHeader>,
        headerTitleAlign: "center"
    });

    let today = new Date();
    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(today.getDate());

    return (
        <Container>
            <StatusBar backgroundColor="#4AC34E" />
            <HomeMonthScroll
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
            />
            <HomeDaysScroll
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}

                dailyProgress={props.dailyProgress}
                workoutDays={props.workoutDays}
            />
            <HomeDayStatus
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}

                dailyProgress={props.dailyProgress}
                workoutDays={props.workoutDays}

                addProgress={props.addProgress}
                delProgress={props.delProgress}
                goToWorkout={() => props.navigation.navigate("WorkoutStack")}
            />

            <Legend>
                <LegendText>Legenda:</LegendText>
                <LegendItem>
                    <LegendBox style={{ backgroundColor: "#B5EEFF" }} />
                    <LegendText>Hoje</LegendText>
                </LegendItem>

                <LegendItem>
                    <LegendBox style={{ backgroundColor: "#B5FFB8" }} />
                    <LegendText>Treino feito</LegendText>
                </LegendItem>

                <LegendItem>
                    <LegendBox style={{ backgroundColor: "#FFB5B5" }} />
                    <LegendText>Treino perdido</LegendText>
                </LegendItem>

                <LegendItem>
                    <LegendBox style={{ backgroundColor: "#D4D4D4", opacity: 0.4 }} />
                    <LegendText>Dia de descanso</LegendText>
                </LegendItem>

                <LegendItem>
                    <LegendBox style={{ backgroundColor: "#D4D4D4" }} />
                    <LegendText>Dia futuro</LegendText>
                </LegendItem>

            </Legend>

        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        dailyProgress: state.userReducer.dailyProgress,
        workoutDays: state.userReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProgress: (date) => dispatch({ type: "SET_PROGRESS", payload: { date } }),
        delProgress: (date) => dispatch({ type: "DEL_PROGRESS", payload: { date } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);