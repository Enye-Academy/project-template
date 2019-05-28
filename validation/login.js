const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateLoginInput(data) {
    const errors = {};

    // Validate Email
    let checkemail = data.email;
    checkemail = !isEmpty(checkemail) ? checkemail : '';
    // Validate Password
    let checkpassword = data.password;

    checkpassword = !isEmpty(checkpassword) ? checkpassword : '';

    if (!Validator.isEmail(checkemail)) {
        errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(checkemail)) {
        errors.email = 'Email field is required';
    }
    if (Validator.isEmpty(checkpassword)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
