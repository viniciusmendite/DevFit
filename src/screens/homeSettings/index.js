import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import {
    Container,
    TextHeader,
    Label,
    Input,
    ListArea,
    DayItem,
    DayItemText,
    LevelItem,
    LevelItemText,
    ButtonReset,
    ButtonResetText
} from './style';

function Page(props) {

    props.navigation.setOptions({
        headerTitle: <TextHeader>Configurações</TextHeader>,
        headerTitleAlign: "center"
    });

    const toggleWorkoutDay = (d) => {
        let newWorkoutDays = [...props.workoutDays];

        if (newWorkoutDays.includes(d)) {
            if (newWorkoutDays.length == 1) {
                Alert.alert("DevFit 😅", "Calma ae! Você tem que treinar pelo menos 1 dia");
                return;
            }
            newWorkoutDays = newWorkoutDays.filter(i => i != d);
        } else {
            newWorkoutDays.push(d);
        }
        props.setWorkoutDays(newWorkoutDays);
    }

    return (
        <Container>
            <Label>Seu nome completo:</Label>
            <Input value={props.name} onChangeText={name => props.setName(name)} />

            <Label>Dias em que você treina:</Label>
            <ListArea>
                <DayItem onPress={() => toggleWorkoutDay(1)} underlayColor="#CCC" style={props.workoutDays.includes(1) ? { backgroundColor: "#A5E8BC" } : {}} >
                    <DayItemText>S</DayItemText>
                </DayItem>

                <DayItem onPress={() => toggleWorkoutDay(2)} underlayColor="#CCC" style={props.workoutDays.includes(2) ? { backgroundColor: "#A5E8BC" } : {}} >
                    <DayItemText>T</DayItemText>
                </DayItem>

                <DayItem onPress={() => toggleWorkoutDay(3)} underlayColor="#CCC" style={props.workoutDays.includes(3) ? { backgroundColor: "#A5E8BC" } : {}} >
                    <DayItemText>Q</DayItemText>
                </DayItem>

                <DayItem onPress={() => toggleWorkoutDay(4)} underlayColor="#CCC" style={props.workoutDays.includes(4) ? { backgroundColor: "#A5E8BC" } : {}} >
                    <DayItemText>Q</DayItemText>
                </DayItem>

                <DayItem onPress={() => toggleWorkoutDay(5)} underlayColor="#CCC" style={props.workoutDays.includes(5) ? { backgroundColor: "#A5E8BC" } : {}} >
                    <DayItemText>S</DayItemText>
                </DayItem>

                <DayItem onPress={() => toggleWorkoutDay(6)} underlayColor="#CCC" style={props.workoutDays.includes(6) ? { backgroundColor: "#A5E8BC" } : {}} >
                    <DayItemText>S</DayItemText>
                </DayItem>

                <DayItem onPress={() => toggleWorkoutDay(0)} underlayColor="#CCC" style={props.workoutDays.includes(0) ? { backgroundColor: "#A5E8BC" } : {}} >
                    <DayItemText>D</DayItemText>
                </DayItem>
            </ListArea>

            <Label>Seu nível:</Label>
            <ListArea>
                <LevelItem onPress={() => props.setLevel("beginner")} disabled={props.level == 'beginner' ? true : false} style={props.level == "beginner" ? { backgroundColor: "#A5E8BC" } : {}} underlayColor="transparent" >
                    <LevelItemText>Iniciante</LevelItemText>
                </LevelItem>

                <LevelItem onPress={() => props.setLevel("intermediate")} disabled={props.level == 'intermediate' ? true : false} style={props.level == "intermediate" ? { backgroundColor: "#A5E8BC" } : {}} underlayColor="transparent" >
                    <LevelItemText>Intermediário</LevelItemText>
                </LevelItem>

                <LevelItem onPress={() => props.setLevel("advanced")} disabled={props.level == 'advanced' ? true : false} style={props.level == "advanced" ? { backgroundColor: "#A5E8BC" } : {}} underlayColor="transparent" >
                    <LevelItemText>Avançado</LevelItemText>
                </LevelItem>
            </ListArea>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
        workoutDays: state.userReducer.workoutDays,
        level: state.userReducer.level
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch({ type: "SET_NAME", payload: { name } }),
        setWorkoutDays: (workoutDays) => dispatch({ type: "SET_WORKOUTDAYS", payload: { workoutDays } }),
        setLevel: (level) => dispatch({ type: "SET_LEVEL", payload: { level } }),
        resetSettings: () => dispatch({ type: "RESET_SETTINGS" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);