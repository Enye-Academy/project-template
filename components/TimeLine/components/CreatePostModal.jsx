import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { CreatePostComponent } from './CreatePostComponent';
import { CREATEPOST_PLACEHOLDER } from '../constant';

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
    closeModal: PropTypes.func,
    handleOkFunction: PropTypes.func,
    handleStatusChange: PropTypes.func,
    visible: PropTypes.bool,
    handleOnChange: PropTypes.func,
    textValue: PropTypes.string,
};
