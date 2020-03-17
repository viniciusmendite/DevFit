import React from 'react';
import { Modal, Platform } from 'react-native';

import {
    ModalBoxArea,
    ModalBox,
    ModalClose,
    CloseText,
    ModalBody
} from './style';

export default (props) => {
    return (
        <Modal visible={props.visible} transparent={true} animationType='fade'>
            <ModalBoxArea behavior={Platform.OS == 'ios' ? 'padding' : null}>
                <ModalBox>
                    <ModalClose onPress={props.closeAction} underlayColor='transparent'>
                        <CloseText>Fechar</CloseText>
                    </ModalClose>
                    <ModalBody>
                        {props.children}
                    </ModalBody>
                </ModalBox>
            </ModalBoxArea>
        </Modal>
    );
}
