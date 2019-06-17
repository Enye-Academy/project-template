/* eslint-disable react/forbid-prop-types */
import {
    Divider, Button, Modal, Form, Input, Spin
} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

import {
    STRINGS, PROFILE_INPUTS
} from '../constants';

const {
    FOLLOWING, FOLLOWERS, USERS_BIO, AT, COMPLETE_YOUR_PROFILE,
} = STRINGS;

class TimeLineProfileForm extends React.Component {
state = {
    id: '',
    isProfilePresent: false,
}

componentDidUpdate(prevProps) {
    const { id } = this.state;
    const { profile } = prevProps;
    if ((JSON.stringify(profile) !== '{}' && JSON.stringify(profile) !== undefined)
    && (profile.id !== id)) {
        this.handleGetProfileData(profile);
    }
}

handleGetProfileData(profile) {
    this.setState(
        prevState => ({ ...prevState, ...profile, isProfilePresent: true })
    );
}

render() {
    const { isProfilePresent } = this.state;
    const {
        handleModal, isFormModalOpen,
        handleOk, handleTextChange,
    } = this.props;
    if (isProfilePresent) {
        const {
            picture,
            nickname,
            bio,
        } = this.state;
        return (
            <aside className="TimeLine_profile-info">
                <img
                    src={picture}
                    alt="name"
                    className="user-avatar"
                />
                {/* followers stat */}
                <h3 className="user-name">{nickname}</h3>
                <p>
                    {AT}
                    {nickname}
                </p>
                {/* if the user does not have a bio, ask to complete the profile */}
                {(!bio)
                    ? (
                        <Button
                            type="primary"
                            onClick={handleModal}
                        >
                            {COMPLETE_YOUR_PROFILE}
                        </Button>
                    ) : (
                        <>
                            <div className="user-followers-stat">
                                <div className="users-follow-number">
                                    <h3 className="count">{3}</h3>
                                    <p>{FOLLOWING}</p>
                                </div>
                                <Divider type="vertical" className="divider-height" />
                                <div className="users-follow-number">
                                    <h3 className="count">{4}</h3>
                                    <p>{FOLLOWERS}</p>
                                </div>
                            </div>
                            <div className="users-bio">
                                {USERS_BIO}
                            </div>
                        </>
                    )
                }
                <Modal
                    title="Basic Modal"
                    visible={isFormModalOpen}
                    onOk={handleOk}
                    onCancel={handleModal}
                >
                    <Form className="registration-form" onSubmit={this.handleSubmit}>
                        {
                            PROFILE_INPUTS.map(profile => {
                                const {
                                    id, label, placeholder,
                                } = profile;

                                return (
                                    <Form.Item label={label} key={id}>
                                        <Input
                                            placeholder={placeholder}
                                            name={id}
                                            onChange={e => handleTextChange(e)}
                                        />
                                    </Form.Item>

                                );
                            })
                        }
                    </Form>
                </Modal>
            </aside>
        );
    }
    return (
        <aside className="TimeLine_profile-info">
            <div className="loading_Div">
                <Spin />
            </div>
        </aside>
    );
}
}

const TimeLineProfileInfo = Form.create()(TimeLineProfileForm);

export default TimeLineProfileInfo;

TimeLineProfileForm.propTypes = {
    handleModal: PropTypes.func.isRequired,
    handleOk: PropTypes.func.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    isFormModalOpen: PropTypes.bool.isRequired,
    profile: PropTypes.object,
};

TimeLineProfileForm.defaultProps = {
    profile: {},
};
