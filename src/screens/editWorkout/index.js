import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import uuid from 'uuid/v4';

import ExercisesItemEdit from '../components/exercisesItemEdit/index';
import CustomModal from '../components/customModal/index';
import {
    Container,
    TextHeader,
    SaveArea,
    SaveImage,
    NameInput,
    ExercisesArea,
    ExercisesButton,
    ExercisesButtonText,
    ExercisesList,
    ModalLabel,
    ModalMusclesScroll,
    ModalInput,
    ModalMuscle,
    ModalMuscleImage,
    ModalExtra,
    ModalExtraItem,
    Button,
    ButtonText
} from './style';

function Page(props) {

    let isEdit = (props.route.params && props.route.params.workout) ? true : false;

    let workout = (props.route.params && props.route.params.workout) ? props.route.params.workout : false;

    const [name, setName] = useState(workout ? workout.name : '');
    const [id, setId] = useState(workout ? workout.id : '');
    const [exercises, setExercises] = useState(workout ? workout.exercises : []);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalId, setModalId] = useState('');
    const [modalName, setModalName] = useState('');
    const [modalMuscle, setModalMuscle] = useState('');
    const [modalSets, setModalSets] = useState('');
    const [modalReps, setModalReps] = useState('');
    const [modalLoad, setModalLoad] = useState('');

    const handleSave = () => {
        let workout = { id, name, exercises };
        if (props.route.params && props.route.params.workout) {

            if (workout.exercises.length > 0) {

                if (workout.id != '') {
                    props.editWorkout(workout);
                }

                props.navigation.goBack();

            } else {
                Alert.alert("DevFit 😅", props.name + ", você precisa ter pelo menos 1 exercício ! ");
            }

        } else {

            if (workout.exercises.length == 0) {
                Alert.alert("DevFit 😅", props.name + ", você precisa ter pelo menos 1 exercício ! ");
            } else {
                workout.id = uuid();
                props.addWorkout(workout)

                props.navigation.goBack();
            }
        }

    }

    const SaveWorkoutButton = () => {
        return (
            <SaveArea onPress={handleSave} underlayColor="transparent">
                <SaveImage source={require('../../assets/check-black.png')} />
            </SaveArea>
        );
    }

    props.navigation.setOptions({
        headerRight: () => (
            <SaveWorkoutButton />
        ),
        headerRightContainerStyle: {
            marginRight: 15
        },
        headerTitle: <TextHeader>{isEdit ? "Editar Treino" : "Adicionar Treino"}</TextHeader>,
        headerTitleAlign: "center"
    });

    const editExercise = (item) => {
        setModalId(item.id);
        setModalName(item.name);
        setModalMuscle(item.muscle);
        setModalSets(item.sets);
        setModalReps(item.reps);
        setModalLoad(item.load);
        setModalVisible(true);
    }

    const delExercise = (item) => {
        let newExercises = [...exercises];
        newExercises = newExercises.filter(i => i.id != item.id);
        setExercises(newExercises);
    }

    const modalSave = () => {
        let newExercises = [...exercises];

        if (modalName == '' || modalMuscle == '' || modalSets == '' || modalReps == '') {
            Alert.alert("DevFit 😅", "Preencha todas as informações!");
            return;
        }

        if (modalId) {
            let index = newExercises.findIndex(i => i.id == modalId);
            if (index > -1) {
                newExercises[index].name = modalName;
                newExercises[index].muscle = modalMuscle;
                newExercises[index].sets = modalSets;
                newExercises[index].reps = modalReps;
                newExercises[index].load = modalLoad;
            }
        } else {
            let ex = {
                id: uuid(),
                name: modalName,
                muscle: modalMuscle,
                sets: modalSets,
                reps: modalReps,
                load: modalLoad
            };
            newExercises.push(ex);
        }

        setExercises(newExercises);
        setModalVisible(false);
    }

    const resetModal = () => {
        setModalId('');
        setModalName('');
        setModalMuscle('');
        setModalSets('');
        setModalReps('');
        setModalLoad('');
    }

    const addExercises = () => {
        resetModal();
        setModalVisible(true);
    }

    return (
        <Container>
            <CustomModal visible={modalVisible} closeAction={() => setModalVisible(false)}>
                <ModalLabel>Músculo de foco</ModalLabel>
                <ModalMusclesScroll horizontal={true} showsHorizontalScrollIndicator={false} >
                    <ModalMuscle opacity={modalMuscle == "abs" ? 1 : 0.3} onPress={() => setModalMuscle("abs")} underlayColor="transparent" >
                        <ModalMuscleImage source={require("../../assets/muscles/abs.png")} />
                    </ModalMuscle>

                    <ModalMuscle opacity={modalMuscle == "back" ? 1 : 0.3} onPress={() => setModalMuscle("back")} underlayColor="transparent" >
                        <ModalMuscleImage source={require("../../assets/muscles/back.png")} />
                    </ModalMuscle>

                    <ModalMuscle opacity={modalMuscle == "biceps" ? 1 : 0.3} onPress={() => setModalMuscle("biceps")} underlayColor="transparent" >
                        <ModalMuscleImage source={require("../../assets/muscles/biceps.png")} />
                    </ModalMuscle>

                    <ModalMuscle opacity={modalMuscle == "chest" ? 1 : 0.3} onPress={() => setModalMuscle("chest")} underlayColor="transparent" >
                        <ModalMuscleImage source={require("../../assets/muscles/chest.png")} />
                    </ModalMuscle>

                    <ModalMuscle opacity={modalMuscle == "gluteos" ? 1 : 0.3} onPress={() => setModalMuscle("gluteos")} underlayColor="transparent" >
                        <ModalMuscleImage source={require("../../assets/muscles/gluteos.png")} />
                    </ModalMuscle>

                    <ModalMuscle opacity={modalMuscle == "legs" ? 1 : 0.3} onPress={() => setModalMuscle("legs")} underlayColor="transparent" >
                        <ModalMuscleImage source={require("../../assets/muscles/legs.png")} />
                    </ModalMuscle>

                    <ModalMuscle opacity={modalMuscle == "shoulders" ? 1 : 0.3} onPress={() => setModalMuscle("shoulders")} underlayColor="transparent" >
                        <ModalMuscleImage source={require("../../assets/muscles/shoulders.png")} />
                    </ModalMuscle>

                    <ModalMuscle opacity={modalMuscle == "triceps" ? 1 : 0.3} onPress={() => setModalMuscle("triceps")} underlayColor="transparent" >
                        <ModalMuscleImage source={require("../../assets/muscles/triceps.png")} />
                    </ModalMuscle>
                </ModalMusclesScroll>

                <ModalLabel>Nome do exercício</ModalLabel>
                <ModalInput value={modalName} onChangeText={e => setModalName(e)} />

                <ModalExtra>
                    <ModalExtraItem>
                        <ModalLabel>Séries</ModalLabel>
                        <ModalInput keyboardType='phone-pad' value={modalSets} onChangeText={e => setModalSets(e)} />
                    </ModalExtraItem>

                    <ModalExtraItem>
                        <ModalLabel>Repetições</ModalLabel>
                        <ModalInput keyboardType='phone-pad' value={modalReps} onChangeText={e => setModalReps(e)} />
                    </ModalExtraItem>

                    <ModalExtraItem>
                        <ModalLabel>Carga</ModalLabel>
                        <ModalInput keyboardType='phone-pad' value={modalLoad} onChangeText={e => setModalLoad(e)} />
                    </ModalExtraItem>
                </ModalExtra>

                <Button onPress={modalSave} underlayColor="#4AC34E">
                    <ButtonText>Salvar Alterações</ButtonText>
                </Button>

            </CustomModal>

            <NameInput
                value={name}
                onChangeText={e => setName(e)}
                placeholder="Digite o nome do treino"
            />

            <ExercisesArea>
                <ExercisesButton onPress={addExercises} underlayColor="#4AC34E">
                    <ExercisesButtonText>Adicionar Exercício</ExercisesButtonText>
                </ExercisesButton>

                <ExercisesList
                    data={exercises}
                    renderItem={({ item }) =>
                        <ExercisesItemEdit
                            data={item}
                            delAction={() => delExercise(item)}
                            editAction={() => editExercise(item)}
                        />}
                    keyExtractor={item => item.name}
                />
            </ExercisesArea>

        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWorkout: (workout) => dispatch({ type: "ADD_WORKOUT", payload: { workout } }),
        editWorkout: (workout) => dispatch({ type: "EDIT_WORKOUT", payload: { workout } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);