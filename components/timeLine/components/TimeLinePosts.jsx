/* eslint-disable react/jsx-no-literals */
import {
    Avatar, Empty, Icon, List, Skeleton, Timeline
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import { CreatePostComponent } from './CreatePostComponent';
import { LOADING_SKELETON, STRINGS } from '../constants';
import './TimeLine.css';

const {
    COMMENT_PLACEHOLDER, TIME, EMPTY_COMMENT, IMAGE_LINK,
} = STRINGS;
const { Item } = Timeline;
const IconText = ({
    type, text, action, className,
}) => (
    <span>
        <Icon
            type={type}
            className={className}
            onClick={action}
            theme="filled"
        />
        {text}
    </span>
);

class TimeLinePosts extends React.Component {
    render() {
        const {
            profileData,
            handleCommentButton,
            handleCommentOnPost,
            handleLikeButton,
            handleFavButton,
            handleOnChange,
            isFetching,
        } = this.props;
        if ((isFetching && profileData === '') || (!isFetching && profileData === '')) {
            return (
                // data loading simulation
                LOADING_SKELETON.map(items => {
                    const {
                        paragraph,
                        title,
                        loading,
                        active,
                        avatar,
                        id,
                    } = items;
                    return (
                        <Skeleton
                            key={id}
                            paragraph={paragraph}
                            title={title}
                            loading={loading}
                            active={active}
                            avatar={avatar}
                            className="skeleton-section"
                        />
                    );
                })
            );
        }

        if (profileData !== '' && profileData.length === 0) {
            return (
                <Empty
                    image={IMAGE_LINK}
                    className="empty_image"
                    description={(
                        <span>
                            {EMPTY_COMMENT}
                        </span>
                    )}
                />
            );
        }

        return (
            <List
                itemLayout="vertical"
                dataSource={profileData}
                className="mx-1"
                size="large"
                renderItem={user => {
                    const {
                        id,
                        firstName,
                        lastName,
                        post,
                        avatar,
                        image,
                        liked,
                        favourited,
                        likes,
                        comment,
                        favouriteCount,
                    } = user;
                    return (
                        <List.Item
                            key={id}
                            actions={[
                                <IconText
                                    type="star"
                                    className={favourited ? 'favourited' : 'mr-8'}
                                    text={favouriteCount}
                                    action={() => handleFavButton(id)}
                                    key={1}
                                />,
                                <IconText
                                    type="like"
                                    className={liked ? 'liked' : 'mr-8'}
                                    text={likes}
                                    action={() => handleLikeButton(id)}
                                    key={2}
                                />,
                                <IconText
                                    type="message"
                                    className="mr-8"
                                    text={comment}
                                    action={() => handleCommentButton(id)}
                                    key={3}
                                />,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={(<Avatar src={avatar} className="user-avatar" />)}
                                title={`${firstName} ${lastName}`}
                                description={TIME}
                            />

                            {
                                image ? (
                                    <img
                                        className="post-image"
                                        alt={image ? `${firstName} image` : null}
                                        src={image}
                                    />
                                ) : <div />
                            }

                            <p>
                                {post.substring(0, 150)}
                            </p>

                            {/* post comment component */}
                            <div className={profileData[id - 1].isCommentOpen ? 'show' : 'hide'}>

                                <CreatePostComponent
                                    handleOkFunction={() => handleCommentOnPost(id)}
                                    InputPlaceholder={COMMENT_PLACEHOLDER}
                                    rowHeight={2}
                                    handleOnChange={handleOnChange}
                                />
                                <Timeline>
                                    {/* comment post */}
                                    {profileData[id - 1].comments.map(commentPost => (
                                        <Item key={commentPost.id}>
                                            <section className="Timeline_comment">
                                                {/* avatar */}
                                                <Avatar
                                                    src={commentPost.avatar}
                                                    className="user-avatar avatar-pop"
                                                />
                                                <div>
                                                    {/* name */}
                                                    <h3>
                                                        {`${commentPost.firstName}
                                                    ${commentPost.lastName}`}
                                                    </h3>
                                                    {/* time */}
                                                    <p>{TIME}</p>
                                                    {/* comment */}
                                                    <p>{commentPost.post}</p>
                                                </div>
                                            </section>
                                        </Item>
                                    ))
                                    }
                                </Timeline>
                            </div>
                        </List.Item>
                    );
                }
                }
            />
        );
    }
}

export default TimeLinePosts;

IconText.propTypes = {
    action: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};

TimeLinePosts.propTypes = {
    handleCommentButton: PropTypes.func.isRequired,
    handleCommentOnPost: PropTypes.func.isRequired,
    handleFavButton: PropTypes.func.isRequired,
    handleLikeButton: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    isFetching: PropTypes.func.isRequired,
    profileData: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        comment: PropTypes.number.isRequired,
        favouriteCount: PropTypes.number.isRequired,
        favourited: PropTypes.bool.isRequired,
        firstName: PropTypes.string.isRequired,
        image: PropTypes.string,
        isCommentOpen: PropTypes.bool.isRequired,
        lastName: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
        likes: PropTypes.number.isRequired,
        post: PropTypes.string.isRequired,
    })).isRequired,
};
