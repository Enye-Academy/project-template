import React from 'react';
import { Form, Input } from 'antd';
import {
    SIGNUP_INPUTS, SIGNUP_PASSWORD_INPUT_ERROR
} from '../constants';

const FormItemGenerator = decorator => SIGNUP_INPUTS.map(input => {
    const {
        label, field, rules, type,
    } = input;
    return (
        <Form.Item key={field} label={label}>
            {
                decorator(field, {
                    rules,
                })(
                    <Input type={type} />
                )
            }
        </Form.Item>
    );
});

const FormPasswordFieldGenerator = (decorator, validator, label, ruleType, message) => (
    <Form.Item key={ruleType} label={label}>
        {
            decorator(ruleType, {
                rules: [{
                    required: true, message: { message },
                }, {
                    validator: { validator },
                }],
            })(
                <Input type="password" />
            )}

    </Form.Item>
);

export { FormItemGenerator, FormPasswordFieldGenerator };
