/* eslint-disable react/jsx-no-literals */
import React from 'react';
import {
    Form,
    Input,
    Button,
    notification, Icon
} from 'antd';
import 'antd/dist/antd.css';
import './Authentication.css';
import Router from 'next/router';
import ForgotPassword from '../../../static/forgot_password.svg';

import {
    FORGET_PASSWORD_NOTIFICATION_TITLE,
    FORGET_PASSWORD_NOTIFICATION_DESCRIPTION,
    FORGET_PASSWORD_EMAIL_INPUT_ERROR,
    FORGET_PASSWORD_EMAIL_INPUT_INSTRUCTION,
    PASSWORD_CHANGE_TEXT,
    REMEMBER_PASSWORD_TEXT
} from '../constants';

/**
 *  function that is used to display the forget password Page
 * @function
 * @return {Object} the forget password  page
 */
class PasswordResetForm extends React.Component {
    state = {
        loading: false,
    };

    /**
    * function that is used to animate signup loading
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
        const { validateFieldsAndScroll, resetFields } = this.props.form;
        e.preventDefault();

        /**
        * function that is used to handle submit, This function helps to Validate the
        * specified fields and get theirs values and errors., if the target field is not in
        * visible area of form, form will be automatically scrolled to the target field area.
        * @function
        * @return {Object}  returns the values of the form
        */
        validateFieldsAndScroll((err, values) => {
            if (!err && values !== '') {
                this.setState({ loading: true });
                setTimeout(() => {
                    this.openNotificationWithIcon('success', values.email);
                    this.setState({ loading: false, values });
                    // resets the value on the input field
                    resetFields();
                }, 1000);
            }
        });
    }

    /**
    * function that is used to close the message and redirect to the login page
    * @function
    * @return {Object}  returns the values of the form
    */
    close = () => {
        Router.push('/login');
    };

    /**
    * function that is used to show info on successful password change
    * @function
    * @param {String} type this is the type of message (success, warning or failure)
    * @param {String} email the email to whose password is been rest
    * @return {Object}  returns a messeage toast which prompt users
    */
    openNotificationWithIcon = (type, email) => {
        notification[type]({
            description: `${FORGET_PASSWORD_NOTIFICATION_DESCRIPTION} ${email}`,
            duration: 0,
            message: FORGET_PASSWORD_NOTIFICATION_TITLE,
            onClose: this.close,
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { loading } = this.state;
        return (
            <section className="password-Section">
                <section className="password-image-section">
                    <ForgotPassword className="password-image" />
                </section>

                <section className="password-Form-section">
                    <Form
                      className="password-form"
                      onSubmit={this.handleSubmit}
                    >
                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [{
                                    message: FORGET_PASSWORD_EMAIL_INPUT_ERROR,
                                    type: 'email',
                                }, {
                                    message: FORGET_PASSWORD_EMAIL_INPUT_INSTRUCTION,
                                    required: true,
                                }],
                            })(
                                <Input prefix={<Icon type="user" className="input-icon" />} />
                            )}
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading}>{PASSWORD_CHANGE_TEXT}</Button>
                            <br />
                            {REMEMBER_PASSWORD_TEXT}
                            <a className="password-form-register" href="/login">login</a>
                        </Form.Item>
                    </Form>
                </section>
            </section>
        );
    }
}

const PasswordReset = Form.create({ name: 'register' })(PasswordResetForm);

export default PasswordReset;
