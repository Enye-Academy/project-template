const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateRegInput(data) {
    const errors = {};
    /* Check if data.name is not empty and return the name or Check that it is not null,
    then validate it using the 'validator' which only validates string */

    /* Assign 'data' pty in a func to variable to avoid Assignment
    to property of function parameter 'data' no-param-reassign */
    let checkname = data.name;
    checkname = !isEmpty(checkname) ? checkname : '';
    // Validate Email
    let checkemail = data.email;
    checkemail = !isEmpty(checkemail) ? checkemail : '';
    // Validate Password
    let checkpassword = data.password;

    checkpassword = !isEmpty(checkpassword) ? checkpassword : '';
    // Validate Confirm password
    let checkpassword2 = data.confirmPassword;
    checkpassword2 = !isEmpty(checkpassword2) ? checkpassword2 : '';
    if (!Validator.isLength(checkname, { max: 50, min: 2 })) {
        errors.name = 'Name must be between 2 and 50 characters long!';
    }
    if (Validator.isEmpty(checkname)) {
        errors.name = 'Name field is required';
    }
    if (Validator.isEmpty(checkemail)) {
        errors.email = 'Email field is required';
    }
    if (!Validator.isEmail(checkemail)) {
        errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(checkpassword)) {
        errors.password = 'Password field is required';
    }
    if (!Validator.isLength(checkpassword, { max: 30, min: 6 })) {
        errors.password = 'Password must be at least 6 characters';
    }
    if (Validator.isEmpty(checkpassword2)) {
        errors.confirmPassword = 'Confirm Password field is required';
    }
    if (!Validator.equals(checkpassword, checkpassword2)) {
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
