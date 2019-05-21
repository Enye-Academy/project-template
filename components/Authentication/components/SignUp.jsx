import React from 'react';
import {
    Form
} from 'antd';
import 'antd/dist/antd.css';
import './Authentication.css';
import Router from 'next/router';
import RegistrationImage from '../../../static/register.svg';
import {
    SIGNUP_INPUTS
} from '../constants';
import SIGNUP_INPUT_GENERATOR from './SignupInputItemGenerator';

/**
 *  function that is used to display the registration Page
 * @function
 * @return {Object} the registration  page
 */
class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        iconLoading: false,
        loading: false,
        isAgreementChecked: false,
    };

    /**
     *  function that is used to animate signup loading
     * @function
     * @return {Object} sets loading state to true
     */
    enterLoading = () => {
        this.setState({ loading: true });
    }

    /**
        * function that is used to handle submit
        * @function
        * @return {Object}  returns the user values
        */
    handleSubmit = e => {
        e.preventDefault();
        const { validateFieldsAndScroll } = this.props.form;
        /**
            * function that is used to handle submit, This function helps to Validate the specified
            * fields and get theirs values and errors., if the target field is not in visible area of form, form will be automatically scrolled to the target field area.
            * @function
            * @return {Object}  returns the values of the form
            */
        validateFieldsAndScroll((err, values) => {
            if (!err && values.agreement) {
                console.log('Received values of form: ', values);
                this.enterLoading();
                setTimeout(() => {
                    Router.push('/timeline');
                }, 1000);
            }
        });
    }

    /**
        * function that is used to handle password validation, this fires when the first password field has been filled and has lost focus. this will help in comparing the password in that field to the next input field;
        * @function
        * @return {Object} sets the state of isConfirmedDirty
        */
    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
        console.log('dirty state', this.state.confirmDirty);
        console.log('value', !!value);
    }

    /**
* function that is used to also handle password validation, this compares the two password field;
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

    /**
* function that is used to handle checkbox agreement
* @function
* @return {Boolean} controls the state of of the checkbox
*/
    handleCheckBox = e => {
        this.setState({
            isAgreementChecked: e.target.checked,
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <section className="Registration-Section">
                <section className="registration-image-section">
                    <RegistrationImage className="registration-image" />
                </section>

                <section className="Login-Form-section">
                    <Form className="registration-form" onSubmit={this.handleSubmit}>
                        {
                            SIGNUP_INPUTS.map(input => {
                                const { actions = {}, items } = input;
                                return SIGNUP_INPUT_GENERATOR(actions, items, getFieldDecorator);
                            })
                        }
                    </Form>
                </section>
            </section>
        );
    }
}

const Signup = Form.create({ name: 'register' })(RegistrationForm);
export default Signup;
