import React from 'react';
import {
    Form, Icon, Input, message
} from 'antd';
import PropTypes from 'prop-types';

import {
    LOGIN_INPUTS
} from '../constants';

/**
* function that is used to also handle password validation, this compares the two password field;
* @function
* @param {string} className class of the input field
* @param {string} id id of the input field
* @param {string} iconType preceding icon of the input field
* @param {function} decorator a Two-way binding for form
* @param {string} placeholder placeholder of the input field
* @param {Object[]} rules rules for input validation
* @param {string} inputType type of the input element
* @return {function} input item of the form
*/

const LOGIN_INPUT_ITEM_GENERATOR = decorator => LOGIN_INPUTS.map(input => {
    const {
        className,
        id,
        iconType,
        placeholder,
        rules,
        inputType,
    } = input;

    return (
        <Form.Item key={id}>
            {
                decorator(id, {
                    rules,
                })(
                    <Input prefix={<Icon type={iconType} className={className} />} placeholder={placeholder} type={inputType} />
                )
            }
        </Form.Item>
    );
});

export default LOGIN_INPUT_ITEM_GENERATOR;

LOGIN_INPUT_ITEM_GENERATOR.propTypes = {
    className: PropTypes.string,
    field: PropTypes.string,
    iconType: PropTypes.string,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    rules: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string.isRequired,
        required: PropTypes.bool.isRequired,
    })).isRequired,
};
