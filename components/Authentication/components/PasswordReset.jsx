
import React from 'react';
import {
    Form,
    Input,
    Button,
    Typography,
    notification
} from 'antd';
import 'antd/dist/antd.css';
import './Authentication.css';
import Router from 'next/router';
import ForgotPassword from '../../../static/forgot_password.svg';

import {
    forgetPasswordNotificationTitle,
    forgetPasswordNotificationDescription,
    forgetPasswordEmailInputError, forgetPasswordEmailInputInstruction
} from '../constants';

const { Title, Paragraph } = Typography;

/**
 *  function that is used to display the forget password Page
 *
 * @function
 * @return {Object} the forget password  page
 */
class PasswordResetForm extends React.Component {
    state = {
        loading: false,
        iconLoading: false,
    };

    enterLoading = () => {
        this.setState({ loading: true });
    }

    handleSubmit = e => {
        e.preventDefault();
        // This function  after validation, if the target field is not in visible area of form, form will be automatically scrolled to the target field area.
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                setTimeout(() => {
                    this.setState({ loading: false, values });
                    this.openNotificationWithIcon('success', values.email);
                }, 1000);
                console.log('Received values of form: ', values.email);
            }
        });
    }

    close = () => {
        Router.push('/login');
    };

    openNotificationWithIcon = (type, email) => {
        notification[type]({
            description: `${forgetPasswordNotificationDescription} ${email}`,
            duration: 0,
            message:
                forgetPasswordNotificationTitle,
            onClose: this.close,
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
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
                        <Form.Item
                          label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email',
                                    message: forgetPasswordEmailInputError,
                                }, {
                                    required: true,
                                    message: forgetPasswordEmailInputInstruction,
                                }],
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={this.state.loading} onClick={this.enterLoading}>Request for Password Change</Button>
                            <br />
                            remember your password?
                            {' '}
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
