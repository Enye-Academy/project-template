/* eslint-disable no-shadow */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, notification } from 'antd';
import Router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import {
    getError, getIsRegistering, getPayload, getSuccess
} from '../selectors';
import {
    registrationRequestError,
    registrationRequestSuccess,
    sendRegistrationRequest
} from '../actions';
import RegistrationImage from '../../../static/register.svg';
import { SIGNUP_INPUTS } from '../constants';
import SignupInputGenerator from './SignupInputItemGenerator';

/**
 *  function that is used to display the registration Page
 * @function
 * @return {Object} the registration  page
 */
class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
    };

    componentDidUpdate(prevProps) {
        const { error, success } = this.props;

        // get error values and display in notification
        const errorValue = error !== null ? Object.keys(error).map(key => error[key]) : null;

        if (prevProps.error !== error) {
            this.openNotificationWithIcon('error', errorValue.toLocaleString());
        } else if (prevProps.success !== success) {
            this.openNotificationWithIcon('success',
                `Successfully created account for ${success.name}`);
            Router.push('/api/users/login');
        }
    }

    // notification function
     openNotificationWithIcon = (type, text) => {
         notification[type]({
             description:
             text,
             message: type,
         });
     };

    /**
    * function that is used to handle submit
    * @function
    * @return {Object}  returns the user values
    */
    handleSubmit = e => {
        e.preventDefault();
        const { form } = this.props;
        const { validateFieldsAndScroll } = form;
        /**
        * function that is used to handle submit, This function helps to Validate the specified
        * fields and get theirs values and errors., if the target field is not in visible
        * area of form, form will be automatically scrolled to the target field area.
        * @function
        * @return {Object}  returns the values of the form
        */
        validateFieldsAndScroll((err, values) => {
            const {
                name, password, email, agreement,
            } = values;
            const { sendRegistrationRequest } = this.props;
            if (!err && agreement) {
                const body = {
                    confirmPassword: password,
                    email,
                    name,
                    password,
                };
                // make a call to the api with the values
                sendRegistrationRequest(body);
            }
        });
    }

    /**
     * function that is used to handle password validation, this fires when the first password
     * field has been filled and has lost focus. this will help in comparing the password in
     * that field to the next input field;
    * @function
    * @return {Object} sets the state of isConfirmedDirty
    */
    handleConfirmBlur = e => {
        const { value } = e.target;
        const { confirmDirty } = this.state;
        this.setState({ confirmDirty: confirmDirty || !!value });
    }

    /**
    * function that is used to also handle password validation, this compares the two password
    * field;
    * @function
    * @param {Array} rule the validation rule for the input field
    * @param {String} value the value passed on the input field
    * @param {function} callback error message to display
    * @return {function} error message to display
    */
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('The Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        const { confirmDirty } = this.state;
        if (value && confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    checkPasswordLength = (rule, value, callback) => {
        if (value && value.length <= 5) {
            callback('Password must be at least 6 characters');
        } else {
            callback();
        }
    }

    render() {
        const { form } = this.props;
        const {
            getFieldDecorator,
        } = form;

        return (
            <section className="Registration-Section">
                <section className="registration-image-section">
                    <RegistrationImage className="registration-image" />
                </section>

                <section className="Login-Form-section">
                    <Form className="registration-form" onSubmit={this.handleSubmit}>
                        {

                            SIGNUP_INPUTS().map(input => {
                                const { actions = {}, items } = input;

                                if (items.label === 'Password') {
                                    items.rules = [...items.rules,
                                        { validator: this.validateToNextPassword },
                                        { validator: this.checkPasswordLength }];
                                } if (items.label === 'Confirm Password') {
                                    items.rules = [...items.rules,
                                        { validator: this.compareToFirstPassword },
                                    ];
                                }
                                return SignupInputGenerator(actions, items, getFieldDecorator);
                            })
                        }
                    </Form>
                </section>
            </section>
        );
    }
}

const Signup = Form.create({ name: 'register' })(RegistrationForm);

const mapStateToProps = state => ({
    error: getError(state),
    isRegistering: getIsRegistering(state),
    payload: getPayload(state),
    success: getSuccess(state),
});

const signupActions = {
    registrationRequestError,
    registrationRequestSuccess,
    sendRegistrationRequest,
};

const mapDispatchToProps = dispatch => bindActionCreators(signupActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

RegistrationForm.propTypes = {
    error: PropTypes.node,
    form: PropTypes.shape({
        getFieldDecorator: PropTypes.func,
        getFieldError: PropTypes.func,
        getFieldInstance: PropTypes.func,
        getFieldProps: PropTypes.func,
        getFieldValue: PropTypes.func,
        getFieldsError: PropTypes.func,
        getFieldsValue: PropTypes.func,
        isFieldTouched: PropTypes.func,
        isFieldValidating: PropTypes.func,
        isFieldsTouched: PropTypes.func,
        isFieldsValidating: PropTypes.func,
        isSubmitting: PropTypes.func,
        resetFields: PropTypes.func,
        setFields: PropTypes.func,
        setFieldsInitialValue: PropTypes.func,
        setFieldsValue: PropTypes.func,
        submit: PropTypes.func,
        validateFields: PropTypes.func,
        validateFieldsAndScroll: PropTypes.func,
    }).isRequired,
    sendRegistrationRequest: PropTypes.func,
    success: PropTypes.node,
};

RegistrationForm.defaultProps = {
    error: null,
    sendRegistrationRequest: null,
    success: null,
};
