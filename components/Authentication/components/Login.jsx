/* eslint-disable react/jsx-no-literals */
import React from 'react';
import { Form, Button, Typography } from 'antd';
import Router from 'next/router';

import './Authentication.css';
import 'antd/dist/antd.css';
import LoginImage from '../../../static/login.svg';
import LoginInputItemGenerator from './LoginInputItemGenerator';
import {
    WELCOME,
    LOGIN_TO_CONTINUE,
    FORGOT_PASSWORD,
    LOGIN,
    OR,
    REGISTER_NOW
} from '../constants';

const { Title, Paragraph } = Typography;

/**
 * function that is used to display the Login Page
 * @function
 * @return {Object} the login page
 */
class NormalLoginForm extends React.Component {
    state = {
        iconLoading: false, // loading icon when code is accessing network
        loading: false,
    }

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
        const { validateFields } = this.props.form;
        e.preventDefault();

        /**
        * function that is used to handle submit, This function helps to Validate the
        * specified fields and get theirs values and errors., if the target field is not in
        * visible area of form, form will be automatically scrolled to the target field area.
        * @function
        * @return {Object}  returns the values of the form
        */
        validateFields((err, values) => {
            if (!err) {
                this.enterLoading();
                setTimeout(() => {
                    Router.push('/timeline');
                }, 1000);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { loading } = this.state;

        return (
            <section className="Login-Section">
                <section className="login-image-section">
                    <LoginImage className="login-image" />
                </section>

                <section className="Login-Form-section">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Title level={4}>{WELCOME}</Title>
                        <Paragraph>{LOGIN_TO_CONTINUE}</Paragraph>
                        {/* inputs for username and password */}
                        {LoginInputItemGenerator(getFieldDecorator)}
                        {/* buttons */}
                        <Form.Item>
                            <a className="login-form-forgot" href="/password_reset">{FORGOT_PASSWORD}</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                                {LOGIN}
                            </Button>
                            {OR}
                            <a className="login-form-register" href="/signup">
                                {REGISTER_NOW}
                            </a>
                        </Form.Item>
                    </Form>
                </section>
            </section>
        );
    }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default Login;
