const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateLoginInput(data) {
    const errors = {};

    // Validate Email
    let checkEmail = data.email;
    checkEmail = !isEmpty(checkEmail) ? checkEmail : '';
    // Validate Password
    let checkPassword = data.password;

    checkPassword = !isEmpty(checkPassword) ? checkPassword : '';

    if (!Validator.isEmail(checkEmail)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(checkEmail)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(checkPassword)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
