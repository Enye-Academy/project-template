import Validator from 'validator';
import isEmpty from './is-empty';

const validateReportQueryText = data => {
    const errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.number = !isEmpty(data.number) ? data.number : '';
    data.audio = !isEmpty(data.audio) ? data.audio : '';
    data.coords = !isEmpty(data.coords) ? data.coords : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'name is required';
    } if (Validator.isEmpty(data.number)) {
        errors.number = 'number is required';
    }
    if (Validator.isEmpty(data.audio)) {
        errors.audio = 'audio  is required';
    }
    if (Validator.isEmpty(data.coords)) {
        errors.coords = 'coords is required';
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
};

module.exports = validateReportQueryText;
