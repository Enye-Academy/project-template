import Validator from 'validator';
import isEmpty from './is-empty';

const validateAidQueryText = data => {
    const errors = {};
    data.title = !isEmpty(data.title) ? data.title : '';
    data.intro = !isEmpty(data.intro) ? data.intro : '';
    data.description = !isEmpty(data.description) ? data.description : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'aid title is required';
    }
    if (Validator.isEmpty(data.intro)) {
        errors.intro = 'aid intro  is required';
    }
    if (Validator.isEmpty(data.description)) {
        errors.description = 'description is required';
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
};

module.exports = validateAidQueryText;
