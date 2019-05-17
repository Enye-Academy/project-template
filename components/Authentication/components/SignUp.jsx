import React from 'react';
import {
    Form,
    Input,
    Icon,
    Checkbox,
    Button,
    AutoComplete,
    Typography
} from 'antd';
import 'antd/dist/antd.css';
import './Authentication.css';
import Router from 'next/router';
import RegistrationImage from '../../../static/register.svg';
import { FormItemGenerator, FormPasswordFieldGenerator } from './SignupInputItemGenerator';
import {
    SIGNUP_PASSWORD_INPUT_ERROR, SIGNUP_CONFIRM_PASSWORD_INPUT_ERROR, PASSWORD_COMPARE_ERROR_TEXT
} from '../constants';

/**
 *  function that is used to display the registration Page
 * @function
 * @return {Object} the registration  page
 */
class RegistrationForm extends React.Component {
    state = {
        isConfirmedDirty: false,
        autoCompleteResult: [],
        isIconLoading: false,
        isLoading: false,
        isAgreementChecked: false,
    };

    /**
     *  function that is used to animate signup loading
     * @function
     * @return {Object} sets loading state to true
     */
    enterLoading = () => {
        this.setState({ isLoading: true });
    }

    /**
    *  function that is used to handle submit
    * @function
    * @return {Object}  returns the user values
    */
    handleSubmit = e => {
        e.preventDefault();
        const { validateFieldsAndScroll } = this.props.form;
        const { isAgreementChecked } = this.state;
        /**
    *  function that is used to handle submit, This function helps to Validate the specified fields and get theirs values and errors., if the target field is not in visible area of form, form will be automatically scrolled to the target field area.
    * @function
    * @return {Object}  returns the values of the form
    */
        validateFieldsAndScroll((err, values) => {
            if (!err && isAgreementChecked === true) {
                this.enterLoading();
                setTimeout(() => {
                    Router.push('/timeline');
                }, 1000);
            }
        });
    }

    /**
    *  function that is used to handle checkbox agreement
    * @function
    * @return {Boolean} controls the state of of the checkbox
    */
    handleCheckBox = e => {
        this.setState({
            isAgreementChecked: e.target.checked,
        });
    }

    /**
    *  function that is used to handle password validation, this fires when the first password field has been filled and has lost focus. this will help in comparing the password in that field to the next input field;
    * @function
    * @return {Object} sets the state of isConfirmedDirty
    */
    handleConfirmBlur = e => {
        const { value } = e.target;
        const { isConfirmedDirty } = this.state;
        this.setState({ isConfirmedDirty: isConfirmedDirty || !!value });
    }

    /**
      *  function that is used to also handle password validation, this compares the two password field;
      * @function
      * @param {Array} rule the validation rule for the input field
      * @param {String} value the value passed on the input field
      * @param {function} callback error message to display
      * @return {function} error message to display
      */
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback(PASSWORD_COMPARE_ERROR_TEXT);
        } else {
            callback();
        }
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
                            FormItemGenerator(getFieldDecorator)
                        }
                        {
                            FormPasswordFieldGenerator(getFieldDecorator, this.FormPasswordFieldGenerator,
                                'Password', 'password', SIGNUP_PASSWORD_INPUT_ERROR)
                        }

                        <Form.Item
                          label="Confirm Password"
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: SIGNUP_CONFIRM_PASSWORD_INPUT_ERROR,
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox onChange={this.handleCheckBox}>
                                    I have read the
                                    <a href="" className="login-form-register"> agreement</a>
                                </Checkbox>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={this.state.isLoading}>Register</Button>
                            {/* <br /> */}
                            <div>
                                already have an account, please
                                <a className="login-form-register" href="/login"> login</a>
                            </div>
                        </Form.Item>
                    </Form>
                </section>
            </section>
        );
    }
}

const Signup = Form.create({ name: 'register' })(RegistrationForm);

export default Signup;
