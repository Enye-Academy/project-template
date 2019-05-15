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
import {
    signupNameInputError,
    signupEmailInputError,
    signupValidEmailError,
    signupPasswordInputError,
    signupConfirmPasswordInputError
} from '../constants';

/**
 *  function that is used to display the registration Page
 * @function
 * @return {Object} the registtration  page
 */
class RegistrationForm extends React.Component {
    state = {
        // confirmDirty: false,
        autoCompleteResult: [],
        iconLoading: false,
        loading: false,
    };

    enterLoading = () => {
        this.setState({ loading: true });
    }

    handleSubmit = e => {
        e.preventDefault();
        // This function  after validation, if the target field is not in visible area of form, form will be automatically scrolled to the target field area.
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                setTimeout(() => {
                    Router.push('/timeline');
                }, 1000);
            }
        });
    }

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
        console.log('dirty state', this.state.confirmDirty);
        console.log('value', !!value);
    }

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
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true }); // Validate the specified fields and get theirs values and errors. If you don't specify the parameter of fieldNames, you will validate all fields.
        }
        callback();
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
                        <Form.Item
                          label={(
                                <span>
                                    Name&nbsp;
                                </span>
                            )}
                        >
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: signupNameInputError, whitespace: true }],
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item
                          label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: signupValidEmailError,
                                }, {
                                    required: true, message: signupEmailInputError,
                                }],
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item
                          label="Password"
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: signupPasswordInputError,
                                }, {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" />
                            )}
                        </Form.Item>

                        <Form.Item
                          label="Confirm Password"
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: signupConfirmPasswordInputError,
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
                                <Checkbox>
                                    I have read the
                                    <a href="" className="login-form-register">agreement</a>
                                </Checkbox>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={this.state.loading} onClick={this.enterLoading}>Register</Button>
                            <br />
                            already have an account, please
                            <a className="login-form-register" href="/login">login</a>
                        </Form.Item>
                    </Form>
                </section>
            </section>
        );
    }
}

const Signup = Form.create({ name: 'register' })(RegistrationForm);

export default Signup;
