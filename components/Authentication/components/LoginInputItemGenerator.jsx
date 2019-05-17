import React from 'react';
import {
    Form, Icon, Input, message
} from 'antd';
import PropTypes from 'prop-types';

import {
    LOGIN_INPUTS
} from '../constants';

const LoginInputItemGenerator = decorator => LOGIN_INPUTS.map(input => {
    const {
        className,
        field,
        iconType,
        placeholder,
        rules,
        inputType,
    } = input;

    return (
        <Form.Item key={field}>
            {
                decorator(field, {
                    rules,
                })(
                    <Input prefix={<Icon type={iconType} className={className} />} placeholder={placeholder} type={inputType} />
                )
            }
        </Form.Item>
    );
});

export default LoginInputItemGenerator;

LoginInputItemGenerator.propTypes = {
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
