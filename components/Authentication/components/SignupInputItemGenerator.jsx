import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';

/**
* function that is used to also handle password validation, this compares the two password field;
* @function
* @param {function} actions actions attached to the input field for validation
* @param {Object} items the values passed on to the input field
* @param {function} decorator a Two-way binding for form
* @param {*} fieldChildren html element that complements the field
* @param {string} label label for the input field
* @param {string} id id of the input field
* @param {Object[]} rules rules for input validation
* @param {Boolean} hasOnBlur check if the input has an onChange function attached ot it
* @param {Boolean} hasOnChange check if the input has an onChange function attached ot it
* @param {function} valuePropName Props of checkbox
* @param {Boolean} isButton check if the form element is a button
* @param {Boolean} hasFieldChildren check if the input children
* @param {function} FieldType type of html form element
* @return {function} input item of the form
*/
const SIGNUP_INPUT_GENERATOR = (actions, items, decorator) => {
    const {
        fieldChildren, label, id, rules, hasOnBlur, hasOnChange, valuePropName, isButton, hasFieldChildren, FieldType,
    } = items;
    const { onBlur, onChange } = actions;
    const actionProps = {
        onBlur: hasOnBlur && onBlur,
        onChange: hasOnChange && onChange,
    };

    return (
        <Form.Item key={id} label={label}>
            {
                isButton ? (
                    <>
                        <FieldType type="primary" htmlType="submit">Register</FieldType>
                        <div>
                            {'already have an account, please '}
                            <a className="login-form-register" href="/login">login</a>
                        </div>
                    </>
                )
                    : decorator(id, { rules }, { valuePropName })(
                        <FieldType {...actionProps}>
                            {hasFieldChildren ? fieldChildren : null}
                        </FieldType>
                    )
            }
        </Form.Item>
    );
};

export default SIGNUP_INPUT_GENERATOR;

SIGNUP_INPUT_GENERATOR.propTypes = {
    fieldChildren: PropTypes.instanceOf('span'),
    FieldType: PropTypes.elementType,
    hasFieldChildren: PropTypes.bool,
    hasOnBlur: PropTypes.bool,
    hasOnChange: PropTypes.bool,
    id: PropTypes.string,
    rules: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string.isRequired,
        required: PropTypes.bool.isRequired,
        type: PropTypes.string.isRequired,
        whitespace: PropTypes.bool.isRequired,
    })).isRequired,
    isButton: PropTypes.bool,
    label: PropTypes.string,
    valuePropName: PropTypes.string,
};
