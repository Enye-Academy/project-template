import React from 'react';
import {
    Form, Input, Checkbox, Button
} from 'antd';
import PropTypes from 'prop-types';

import {
    READ_ACCEPTED_AGREEMENT,
    AGREEMENT,
    REGISTER, LOGIN, ALREADY_HAVE_ACCOUNT
} from '../constants';

/**
* function that is used to also handle password validation, this compares the two password field;
* @function
* @param {function} actions actions attached to the input field for validation
* @param {Object} items the values passed on to the input field
* @param {function} decorator a Two-way binding for form
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
const SignupInputGenerator = (actions, items, decorator) => {
    const {
        label, id, rules, hasOnBlur, hasOnChange, valuePropName, isButton, hasFieldChildren, FieldType,
    } = items;
    const { onBlur, onChange } = actions;
    const actionProps = {
        onBlur: hasOnBlur && onBlur,
        onChange: hasOnChange && onChange,
    };

    let Field;
    let fieldChildren;

    switch (FieldType) {
        case 'input':
            Field = Input;
            break;
        case 'checkbox':
            Field = Checkbox;
            break;
        case 'button':
            Field = Button;
            break;
        default:
            Field = null;
            break;
    }

    if (isButton && hasFieldChildren) {
        fieldChildren = (
            <div>
                {ALREADY_HAVE_ACCOUNT}
                <a className="login-form-register" href="/login">{LOGIN}</a>
            </div>
        );
    } else if (FieldType === 'checkbox' && hasFieldChildren) {
        fieldChildren = (
            <span>
                {READ_ACCEPTED_AGREEMENT}
                <a href="/agreement" className="login-form-register">
                    {AGREEMENT}
                </a>
            </span>
        );
    }

    return (
        <Form.Item key={id} label={label}>
            {
                isButton ? (
                    <>
                        <Field type="primary" htmlType="submit">{REGISTER}</Field>
                        {fieldChildren}
                    </>
                )
                    : decorator(id, { rules }, { valuePropName })(
                        <Field {...actionProps}>
                            {hasFieldChildren ? fieldChildren : null}
                        </Field>
                    )
            }
        </Form.Item>
    );
};

export default SignupInputGenerator;

SignupInputGenerator.propTypes = {
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
