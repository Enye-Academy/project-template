import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Icon, Skeleton } from 'antd';
import uuid from 'uuid';

import { STRINGS, TOP_USERS, LOADING_SKELETON } from '../constants';

const { SINCE, TOP_USERS_HEADING } = STRINGS;
const { Title, Text } = Typography;

const ForumTopUsers = props => {
    const { isForumDataLoading } = props;

    return (
        <section className="forum_topusers">
            <Title level={4}>{TOP_USERS_HEADING}</Title>
            {
                !isForumDataLoading ? TOP_USERS.map(user => {
                    const {
                        name, avatar, dateJoined, postCount, commentCount,
                    } = user;

                    return (
                        <div className="forum_user" key={uuid()}>
                            <img src={avatar} alt={name} className="user-avatar" />

                            <div className="forum_topusers-userdetails">
                                <p>{name}</p>
                                <Text type="secondary">
                                    {SINCE}
                                    {dateJoined}
                                </Text>
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
    isForumDataLoading: PropTypes.bool.isRequired,
};
