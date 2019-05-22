const FORGET_PASSWORD_NOTIFICATION_TITLE = 'Link Sent';
const FORGET_PASSWORD_NOTIFICATION_DESCRIPTION = 'The resent link has been sent to';
const FORGET_PASSWORD_EMAIL_INPUT_ERROR = 'The input is not a valid E-mail !';
const FORGET_PASSWORD_EMAIL_INPUT_INSTRUCTION = 'Please input your E-mail so that we can send your reset link!';

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
            FieldType: 'input',
            hasFieldChildren: false,
            id: 'name',
            label: 'Name',
            rules: [{ message: 'Please input your name!', required: true, whitespace: true }],
        },
    },

    {
        items: {
            FieldType: 'input',
            hasFieldChildren: false,
            id: 'email',
            label: 'E-mail',
            rules: [{ message: 'The input is not a valid E-mail!', type: 'email' }, {
                message: 'Please input your E-mail!', required: true,
            }],
        },
    },

    {
        items: {
            FieldType: 'input',
            hasFieldChildren: false,
            id: 'password',
            label: 'Password',
            rules: [{ message: 'The input is not a valid E-mail!', required: true },
                // { validator: validateToNextPassword }
            ],
        },
    },

    {
        items: {
            FieldType: 'input',
            hasFieldChildren: false,
            id: 'confirm',
            label: 'Confirm Password',
            rules: [{ message: 'Please confirm your password!', required: true },
                // { validator: compareToFirstPassword },
            ],
        },
    },

    {
        items: {
            FieldType: 'checkbox',
            hasFieldChildren: true,
            id: 'agreement',
            rules: [{ message: 'Please accept the agreement ', required: true },
            ],
            valuePropName: 'checked',

        },
    },

    {
        items: {
            FieldType: 'button',
            hasFieldChildren: true,
            id: 'submit',
            isButton: true,
        },
    },

];

export {
    LOGIN_INPUTS,
    SIGNUP_INPUTS,
    FORGET_PASSWORD_NOTIFICATION_TITLE,
    FORGET_PASSWORD_NOTIFICATION_DESCRIPTION,
    FORGET_PASSWORD_EMAIL_INPUT_ERROR,
    FORGET_PASSWORD_EMAIL_INPUT_INSTRUCTION
};
