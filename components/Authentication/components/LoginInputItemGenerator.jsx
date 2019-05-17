import React from 'react';
import { Form, Icon, Input } from 'antd';

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
