import {
    Input, Checkbox, Button
} from 'antd';

const LOGIN_INPUTS = [
    {
        className: 'form_icon',
        iconType: 'user',
        id: 'username',
        placeholder: 'Username',
        rules: [{
            message: 'Please input your username!',
            required: true,
        }],
    }, {
        className: 'form_icon',
        iconType: 'lock',
        id: 'password',
        inputType: 'password',
        placeholder: 'Password',
        rules: [{
            message: 'Please input your Password!',
            required: true,
        }],
    },
];

const SIGNUP_INPUTS = [
    {
        items: {
            FieldType: Input,
            hasFieldChildren: false,
            id: 'name',
            label: 'Name',
            rules: [{ message: 'Please input your name!', required: true, whitespace: true }],
        },
    },

    {
        items: {
            FieldType: Input,
            hasFieldChildren: false,
            label: 'E-mail',
            id: 'email',
            rules: [{ type: 'email', message: 'The input is not a valid E-mail!' }, {
                required: true, message: 'Please input your E-mail!',
            }],
        },
    },

    {
        items: {
            FieldType: Input,
            hasFieldChildren: false,
            label: 'Password',
            id: 'password',
            rules: [{ required: true, message: 'The input is not a valid E-mail!' },
                // { validator: validateToNextPassword }
            ],
        },
    },

    {
        items: {
            FieldType: Input,
            hasFieldChildren: false,
            label: 'Confirm Password',
            id: 'confirm',
            rules: [{ required: true, message: 'Please confirm your password!' },
                // { validator: compareToFirstPassword },
            ],
        },
    },

    {
        items: {
            FieldType: Checkbox,
            hasFieldChildren: true,
            id: 'agreement',
            valuePropName: 'checked',
            fieldChildren: (<span>
				I have read and accepted the
                <a href="/agreement" className="login-form-register"> agreement</a>
            </span>),
            rules: [{ required: true, message: 'Please accept the agreement ' },
            ],

        },
    },

    {
        items: {
            isButton: true,
            FieldType: Button,
            hasFieldChildren: true,
            id: 'submit',
        },
    },

];

export {
    LOGIN_INPUTS,
    SIGNUP_INPUTS
};
