/* eslint-disable react/jsx-no-literals */
import {
    Avatar, Icon, List, Skeleton
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import { CreatePostComponent } from './CreatePostComponent';
import { LOADING_SKELETON, STRINGS } from '../constants';
import './TimeLine.css';

const { COMMENT_PLACEHOLDER } = STRINGS;

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

const TimeLinePosts = props => {
    const {
        profileData,
        handleComment,
        handleOk,
        handleLikeButton,
        handleFavButton,
    } = props;
    return profileData.length !== 0 ? (
        <List
            itemLayout="vertical"
            dataSource={profileData}
            style={{ margin: '0 1em' }}
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
                    textValue,
                    handleOnChange,
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
                                action={() => handleComment(id)}
                                key={3}
                            />,
                        ]}
                    >
                        <List.Item.Meta
                            avatar={(<Avatar src={avatar} className="user-avatar" />)}
                            title={`${firstName} ${lastName}`}
                            description="3h ago"
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
                        {post.substring(0, 150)}
                        {/* post comment component */}

                        <div className={profileData[id - 1].isCommentOpen ? 'show' : 'hide'}>
                            <CreatePostComponent
                                handleOkFunction={handleOk}
                                InputPlaceholder={COMMENT_PLACEHOLDER}
                                rowHeight={2}
                                textValue={textValue}
                                handleOnChange={handleOnChange}
                            />
                        </div>
                    </List.Item>
                );
            }
            }
        />
    ) : (
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
};

export default TimeLinePosts;

IconText.propTypes = {
    action: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

TimeLinePosts.propTypes = {
    handleComment: PropTypes.func.isRequired,
    handleFavButton: PropTypes.func.isRequired,
    handleLikeButton: PropTypes.func.isRequired,
    handleOk: PropTypes.func.isRequired,
    profileData: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        favs: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        post: PropTypes.string.isRequired,
    })).isRequired,
};
