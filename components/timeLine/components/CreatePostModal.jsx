import { Modal } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import { CreatePostComponent } from './CreatePostComponent';
import { STRINGS } from '../constants';

const { CREATE_POST_PLACEHOLDER } = STRINGS;

const CreatePostModal = props => {
    const {
        visible, handleOkFunction, closeModal, handleValueChange, value,
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
                InputPlaceholder={CREATE_POST_PLACEHOLDER}
                handleValueChange={handleValueChange}
                value={value}
            />
        </Modal>
    );
};

export default CreatePostModal;

CreatePostModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    handleOkFunction: PropTypes.func.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
};
