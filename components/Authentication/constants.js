const LOGIN_USERNAME_INPUT_ERROR = 'Please input your username!';
const LOGIN_PASSWORD_INPUT_ERROR = 'Please input your Password!';

const SIGNUP_NAME_INPUT_ERROR = 'Please input your name!';
const SIGNUP_EMAIL_INPUT_ERROR = 'Please input your E-mail!';
const SIGNUP_VALID_EMAIL_ERROR = 'The input is not a valid E-mail!';
const SIGNUP_PASSWORD_INPUT_ERROR = 'Please input your password!';
const SIGNUP_CONFIRM_PASSWORD_INPUT_ERROR = 'Please confirm your password!';
const PASSWORD_COMPARE_ERROR_TEXT = 'The Two passwords that you enter is inconsistent!';

const LOGIN_INPUTS = [
    {
        className: 'form_icon',
        field: 'username',
        iconType: 'user',
        placeholder: 'Username',
        rules: [{
            message: LOGIN_USERNAME_INPUT_ERROR,
            required: true,
        }],
    }, {
        className: 'form_icon',
        field: 'password',
        iconType: 'lock',
        inputType: 'password',
        placeholder: 'Username',
        rules: [{
            message: LOGIN_PASSWORD_INPUT_ERROR,
            required: true,
        }],
    },
];

const SIGNUP_INPUTS = [
    {
        field: 'name',
        label: 'Name',
        rules: [{ message: SIGNUP_NAME_INPUT_ERROR, required: true, whitespace: true }],
    },
    {
        field: 'email',
        label: 'E-mail',
        rules: [{ message: SIGNUP_VALID_EMAIL_ERROR, type: 'email' },
            { message: SIGNUP_EMAIL_INPUT_ERROR, required: true }],
    },
];

export {
    LOGIN_INPUTS,
    SIGNUP_INPUTS,
    LOGIN_USERNAME_INPUT_ERROR,
    LOGIN_PASSWORD_INPUT_ERROR,
    SIGNUP_NAME_INPUT_ERROR,
    SIGNUP_EMAIL_INPUT_ERROR,
    SIGNUP_VALID_EMAIL_ERROR,
    SIGNUP_PASSWORD_INPUT_ERROR,
    SIGNUP_CONFIRM_PASSWORD_INPUT_ERROR, PASSWORD_COMPARE_ERROR_TEXT
};
