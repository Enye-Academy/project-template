const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validatePostInput(data) {
    const errors = {};
    let checkText = data.text;
    checkText = !isEmpty(checkText) ? checkText : '';
    // Check if there is error as a result of not filling the form
    if (!Validator.isLength(checkText, { max: 500, min: 10 })) {
        errors.text = 'Post must be between 10 and 500 characters';
    }

    if (Validator.isEmpty(checkText)) {
        errors.text = 'Text field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
