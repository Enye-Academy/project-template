import React from 'react';
import { Divider } from 'antd';

import {
    USERS_BIO, USER_PROFILE, FOLLOWING, FOLLOWERS
} from '../constant';
import './TimeLine.css';

const TimeLineProfileInfo = () => {
    const { followers, following, name } = USER_PROFILE;

    return (
        <aside className="TimeLine_profile-info">
            <img
                src="https://robohash.org/temporeinventorererum.bmp?size=50x50&set=set1"
                alt="profile info of user"
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
