export const STRINGS = {
    AGREEMENT: 'agreement',
    ALREADY_HAVE_ACCOUNT: 'already have an account, please ',
    FORGET_PASSWORD_EMAIL_INPUT_ERROR: 'The input is not a valid E-mail !',
    FORGET_PASSWORD_EMAIL_INPUT_INSTRUCTION: `Please input your E-mail so that we can send
your reset link!`,
    FORGET_PASSWORD_NOTIFICATION_DESCRIPTION: 'The resent link has been sent to',
    FORGET_PASSWORD_NOTIFICATION_TITLE: 'Link Sent',
    FORGOT_PASSWORD: 'Forgot password',
    LOGIN: 'login',
    LOGIN_LINK: '/api/users/login',
    LOGIN_TO_CONTINUE: 'Login to continue',
    NAME: 'signup',
    OR: 'or',
    PASSWORD_CHANGE_TEXT: 'Request for Password Change',
    READ_ACCEPTED_AGREEMENT: 'I have read and accepted the ',
    REGISTER: 'Register',
    REGISTER_NOW: ' register now!',
    REMEMBER_PASSWORD_TEXT: 'remember your password? ',
    WELCOME: 'Welcome',
};

export const LOGIN_INPUTS = [
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

export const SIGNUP_INPUTS = validator => [
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
            FieldType: 'password',
            hasFieldChildren: false,
            id: 'password',
            label: 'Password',
            rules: [{ message: 'The input is not a valid E-mail!', required: true },
            ],
        },
    },

    {
        items: {
            FieldType: 'password',
            hasFieldChildren: false,
            id: 'confirm',
            label: 'Confirm Password',
            rules: [{ message: 'Please confirm your password!', required: true },
                { validator },
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
