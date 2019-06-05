import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { CreatePostComponent } from './CreatePostComponent';
import { CREATEPOST_PLACEHOLDER } from '../constants';

const CreatePostModal = props => {
    const {
        visible, handleOkFunction, closeModal, handleOnChange, textValue,
    } = props;

    return (
        <Modal
            visible={visible}
            onOk={handleOkFunction}
            onCancel={closeModal}
            className="create-post-modal"
            footer={null}
        >
            <CreatePostComponent
                handleOkFunction={handleOkFunction}
                rowHeight={5}
                InputPlaceholder={CREATEPOST_PLACEHOLDER}
                textValue={textValue}
                handleOnChange={handleOnChange}
            />
        </Modal>
    );
};

export default CreatePostModal;
CreatePostModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    handleOkFunction: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    textValue: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
};
