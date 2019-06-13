import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Icon, Skeleton } from 'antd';
import uuid from 'uuid';

import { STRINGS, TOP_USERS, LOADING_SKELETON } from '../constants';

const { Title } = Typography;
const { SINCE, TOP_USERS_HEADING } = STRINGS;

const ForumTopUsers = props => {
    const { blogData } = props;

    return (
        <section className="forum_topusers">
            <Title level={4}>{TOP_USERS_HEADING}</Title>
            {
                blogData.length > 0 ? TOP_USERS.map(user => {
                    const {
                        name, avatar, dateJoined, postCount, commentCount,
                    } = user;

                    return (
                        <div className="forum_user" key={uuid()}>
                            <img src={avatar} alt={name} className="user-avatar" />

                            <div className="forum_topusers-userdetails">
                                <p>{name}</p>
                                <p>
                                    {SINCE}
                                    {dateJoined}
                                </p>
                            </div>

                            <p className="forum_topusers-interaction">
                                {postCount + commentCount}
                                <Icon type="star" theme="filled" className="user_interaction" />
                            </p>
                        </div>
                    );
                }) // data loading simulation
                    : LOADING_SKELETON.map(items => {
                        const {
                            paragraph,
                            title,
                            loading,
                            active,
                            avatar,
                        } = items;
                        return (
                            <Skeleton
                                key={uuid()}
                                paragraph={paragraph}
                                title={title}
                                loading={loading}
                                active={active}
                                avatar={avatar}
                                className="skeleton-section"
                            />
                        );
                    })
            }
        </section>
    );
};

export { ForumTopUsers };

ForumTopUsers.propTypes = {
    blogData: PropTypes.arrayOf(PropTypes.shape({
        answers: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        votes: PropTypes.number.isRequired,
    })).isRequired,
};
