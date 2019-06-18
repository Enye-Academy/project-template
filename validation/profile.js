const Validator = require('validator');

const isEmpty = require('./is_empty');

module.exports = function validateInput(data) {
    const errors = {};

    const {
        bio = '',
        city = '',
        country = '',
        firstName = '',
        lastName = '',
    } = data;

    if (Validator.isEmpty(bio)) {
        errors.country = 'Bio field is required';
    }

    if (Validator.isEmpty(country)) {
        errors.country = 'Country field is required';
    }

    if (Validator.isEmpty(city)) {
        errors.city = 'City field is required';
    }

    if (Validator.isEmpty(lastName)) {
        errors.password = 'Last Name field is required';
    }

    if (Validator.isEmpty(firstName)) {
        errors.password = 'First Name field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
