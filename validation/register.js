const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateRegInput(data) {
    const errors = {};
    /* Check if data.name is not empty and return the name or Check that it is not null,
    then validate it using the 'validator' which only validates string */

    /* Assign 'data' pty in a func to variable to avoid Assignment
    to property of function parameter 'data' no-param-reassign */
    let checkName = data.name;
    checkName = !isEmpty(checkName) ? checkName : '';
    // Validate Email
    let checkEmail = data.email;
    checkEmail = !isEmpty(checkEmail) ? checkEmail : '';
    // Validate Password
    let checkPassword = data.password;

    checkPassword = !isEmpty(checkPassword) ? checkPassword : '';
    // Validate Confirm password
    let checkPassword2 = data.confirmPassword;
    checkPassword2 = !isEmpty(checkPassword2) ? checkPassword2 : '';
    if (!Validator.isLength(checkName, { max: 50, min: 2 })) {
        errors.name = 'Name must be between 2 and 50 characters long!';
    }
    if (Validator.isEmpty(checkName)) {
        errors.name = 'Name field is required';
    }
    if (Validator.isEmpty(checkEmail)) {
        errors.email = 'Email field is required';
    }
    if (!Validator.isEmail(checkEmail)) {
        errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(checkPassword)) {
        errors.password = 'Password field is required';
    }
    if (!Validator.isLength(checkPassword, { max: 30, min: 6 })) {
        errors.password = 'Password must be at least 6 characters';
    }
    if (Validator.isEmpty(checkPassword2)) {
        errors.confirmPassword = 'Confirm Password field is required';
    }
    if (!Validator.equals(checkPassword, checkPassword2)) {
        errors.password = 'Passwords must match';
    }

    // If everything passes then it returns empty error, hence is valid
    // Else the error is populated and returned
    return {
        errors,
        // isValid checks if errors is empty,if so,it means user input is valid
        isValid: isEmpty(errors),
    };
};
