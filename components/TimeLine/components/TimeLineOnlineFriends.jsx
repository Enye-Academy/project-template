import React from 'react';

// dummy data to be replaced with api data, commented so that test can
// pass, will be removed when api is ready
import profile from '../../../data/profiles.json';
import './TimeLine.css';
import { ONLINE_FRIENDS } from '../constant';

const TimeLineOnlineFriends = () => (
    <aside className="TimeLine_online-friends">
        <h3>
            {ONLINE_FRIENDS}
        </h3>
        <ul>
            {profile.map(user => {
                const { email, photo, name } = user;
                return (
                    <li key={email}>
                        <img
                            src={photo}
                            alt="user's face"
                            className="user-avatar avartar-online"
                        />
                        {name}
                    </li>
                );
            })}
        </ul>
    </aside>
);

export default TimeLineOnlineFriends;
