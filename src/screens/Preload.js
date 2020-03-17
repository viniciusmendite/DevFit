import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

const Preload = (props) => {

    if (!props.name) {
        // Se não possuir um usuário, manda para tela de início
        props.navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'StarterStack' }
            ]
        })
        );
    } else {
        // Se possuir um usuário, manda para a tela principal do App
        props.navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'AppTab' }
            ]
        })
        );
    }

    return null;
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name
    }
}

export default connect(mapStateToProps)(Preload);