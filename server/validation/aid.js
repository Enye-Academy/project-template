import Validator from 'validator'
import isEmpty from './is-empty'

const validateAidQueryText = data => {
	const errors = {};
	data.aidTitle = !isEmpty(data.aidTitle) ? data.aidTitle : '';
	data.aidIntro = !isEmpty(data.aidIntro) ? data.aidIntro : '';
	data.aidDescription = !isEmpty(data.aidDescription) ? data.aidDescription : '';

	if (Validator.isEmpty(data.aidTitle)) {
		errors.aidTitle = 'aid title is required';
	}
	if (Validator.isEmpty(data.aidIntro)) {
		errors.aidIntro = 'aid intro  is required';
	}
	if (Validator.isEmpty(data.aidDescription)) {
		errors.aidDescription = 'aidDescription is required';
	}
	return {
		errors,
		isValid: isEmpty(errors),
	};
};

module.exports = validateAidQueryText;
