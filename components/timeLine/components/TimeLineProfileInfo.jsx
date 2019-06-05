import { Divider } from 'antd';
import React from 'react';

import { STRINGS, USER_PROFILE } from '../constants';
import './TimeLine.css';

const { FOLLOWERS, FOLLOWING, USERS_BIO } = STRINGS;

const TimeLineProfileInfo = () => {
    const {
        followers, following, name, image,
    } = USER_PROFILE;

    return (
        <aside className="TimeLine_profile-info">
            <img
                src={image}
                alt="name"
                className="user-avatar"
            />
            {/* followers stat */}
            <h3 className="user-name">{name}</h3>
            <div className="user-followers-stat">
                <div className="users-follow-number">
                    <h3 className="count">{following}</h3>
                    <p>{FOLLOWING}</p>
                </div>
                <Divider type="vertical" className="divider-height" />
                <div className="users-follow-number">
                    <h3 className="count">{followers}</h3>
                    <p>{FOLLOWERS}</p>
                </div>
            </div>
            <div className="users-bio">
                {USERS_BIO}
            </div>
        </aside>
    );
};

export default TimeLineProfileInfo;
