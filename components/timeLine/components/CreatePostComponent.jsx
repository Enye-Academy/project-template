import {
    Button, Icon, Input, Upload
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import { STRINGS } from '../constants';

const { POST } = STRINGS;
const { TextArea } = Input;

/**
 * Helper function that is used for creating the input part of the post *component
 * @function
 * @param {String} InputPlaceholder - the placeholder for the input component
 * @param {integer} rowHeight - the minimum amount of rows that the input
 * component will initially contain
 * @return {Object} the input part of the createpost component
 */
const CreatePostInput = props => {
    const {
        InputPlaceholder, rowHeight, handleOnChange,
    } = props;
    return (
        <TextArea
            placeholder={InputPlaceholder}
            size="small"
            className="compose-textarea"
            autosize={{ minRows: rowHeight }}
            autoFocus
            onChange={handleOnChange}
        />
    );
};

/**
 * Helper function that controls and houses picture upload and post
 * button of the post component and is also the footer of the post component
 * @function
 * @param {Function} handleOkFunction -  controls what happens when the
 * submit button  of the modal is clicked
 * @return {Object} The footer part of the post component which contains
 * both the upload picture
 * and the send post components
 */
const CreatePostButtons = props => {
    const { handleOkFunction } = props;
    return (
        <section className="modal-footer">
            <Upload>
                <Icon
                    type="picture"
                    className="create-post-icon"
                />
            </Upload>

            <Button key="submit" type="primary" onClick={handleOkFunction}>
                {POST}
            </Button>
        </section>
    );
};

/**
 * full create post component which combines the CreatePostInput ans
 * CreatePostButtons component. i
 * @function
 * @param {String} InputPlaceholder - the placeholder for the input component
 * @param {integer} rowHeight - the minimum amount of rows that the input
 * component will initially contain
 *  @param {Function} handleOkFunction -  controls what happens when the
 * submit button  of the modal is clicked
 * @return {Object} the input part of the createpost component
 */

const CreatePostComponent = props => {
    const {
        InputPlaceholder,
        rowHeight,
        handleOkFunction,
        handleOnChange,
    } = props;

    return (
        <>
            <CreatePostInput
                InputPlaceholder={InputPlaceholder}
                rowHeight={rowHeight}
                handleOnChange={handleOnChange}
            />
            <div className="comment-post-button">
                <CreatePostButtons handleOkFunction={handleOkFunction} />
            </div>
        </>
    );
};

export { CreatePostComponent, CreatePostInput, CreatePostButtons };

CreatePostInput.propTypes = {
    InputPlaceholder: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    rowHeight: PropTypes.number.isRequired,
};

CreatePostButtons.propTypes = {
    handleOkFunction: PropTypes.func.isRequired,
};
CreatePostComponent.propTypes = {
    InputPlaceholder: PropTypes.string.isRequired,
    handleOkFunction: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    rowHeight: PropTypes.number.isRequired,
};
