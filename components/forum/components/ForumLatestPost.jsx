import PropTypes from 'prop-types';
import React from 'react';
import {
    Icon, Divider, Tag, Typography, Skeleton
} from 'antd';
import Link from 'next/link';
import uuid from 'uuid';

import { LOADING_SKELETON, STRINGS } from '../constants';

const { Text } = Typography;
const {
    ANSWERS, ASKED, BLOG_TOPIC_LINK, VIEWS, VOTES,
} = STRINGS;

const ForumLatestPost = props => {
    const { blogData } = props;
    return (
        <section className="forum">
            {
                blogData.length > 0 ? blogData.map(data => {
                    const {
                        image, title, answers, votes, views, tag, time,
                    } = data;
                    return (
                        <section key={uuid()}>
                            <section className="forum-item">
                                <img src={image} alt="user" className="user-avatar" />

                                <section className="forum-text">
                                    <Link href={BLOG_TOPIC_LINK + title}>
                                        <a className="forum-topic">{title}</a>
                                    </Link>

                                    <div className="forum-reaction">
                                        <span>
                                            <Text type="secondary">
                                                <Icon type="message" />
                                                {answers + ANSWERS}
                                            </Text>
                                        </span>
                                        <span>
                                            <Text type="secondary">
                                                <Icon type="arrow-up" />
                                                {votes + VOTES}
                                            </Text>
                                        </span>
                                        <span>
                                            <Text type="secondary">
                                                <Icon type="eye" />
                                                {views + VIEWS}
                                            </Text>
                                        </span>
                                    </div>

                                    <div className="forum-time-tag">
                                        <div className="forum-tag">
                                            {(tag.split(' ')
                                                .map(singleTag => (
                                                    <Tag
                                                        color="gold"
                                                        className="tag_style"
                                                        key={uuid()}
                                                    >
                                                        {singleTag}

                                                    </Tag>
                                                ))
                                            )}
                                        </div>
                                        <Text className="forum-time" type="secondary">
                                            {ASKED + time}
                                        </Text>
                                    </div>
                                </section>
                            </section>
                            <Divider />
                        </section>
                    );
                })
                // data loading simulation
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

export default ForumLatestPost;

ForumLatestPost.propTypes = {
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
