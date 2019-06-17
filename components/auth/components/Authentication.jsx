/* eslint-disable no-shadow */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import React, { PureComponent } from 'react';
import Router from 'next/router';
import {
    handleAuthentication,
    isAuthenticated,
    login
} from '../utils';

import {
    getUserProfile,
    loginFailure,
    loginSuccess
} from '../actions';
import { SIGNING_IN_TEXT } from '../constants';
import {
    getIsAuthenticated,
    getUsersProfile
} from '../selectors';

class Authentication extends PureComponent {
    componentDidMount() {
        const { loginSuccess, loginFailure } = this.props;
        try {
            handleAuthentication().then(() => {
                if (isAuthenticated()) {
                    loginSuccess();
                    Router.push('/timeline');
                }
            });
        } catch (err) {
            if (!isAuthenticated()) {
                loginFailure();
                login();
            }
        }
    }

    render() {
        return (

            <div className="loading_Div">
                <Spin tip={SIGNING_IN_TEXT} size="large" />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state),
    userProfile: getUsersProfile(state),
});

const authActions = {
    getUserProfile,
    loginFailure,
    loginSuccess,
};

const mapDispatchToProps = dispatch => bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

Authentication.propTypes = {
    loginFailure: PropTypes.func.isRequired,
    loginSuccess: PropTypes.func.isRequired,
};
