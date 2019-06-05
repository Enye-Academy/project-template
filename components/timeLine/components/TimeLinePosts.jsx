/* eslint-disable react/jsx-no-literals */
import React from 'react';
import {
    Icon, Skeleton, List, Avatar
} from 'antd';
import PropTypes from 'prop-types';

import { CreatePostComponent } from './CreatePostComponent';
import './TimeLine.css';
import {
    LOADING_SKELETON, COMMENT_PLACEHOLDER
} from '../constants';

const IconText = ({ type, text, action }) => (
    <span>
        <Icon type={type} className="icon_text" onClick={action} />
        {text}
    </span>
);

const TimeLinePosts = props => {
    const {
        timelineData, activeComment, handleComment, handleOk, handleLikeButton,
    } = props;
    return (

        timelineData.length !== 0 ? (
            <List
                itemLayout="vertical"
                dataSource={timelineData}
                className="list_style"
                size="large"
                renderItem={user => {
                    const {
                        id,
                        firstName,
                        lastName,
                        post,
                        avatar,
                        image,
                        textValue,
                        handleOnChange,
                        comment,
                        likes,
                        favs,
                    } = user;

                    return (
                        <List.Item
                            key={id}
                            actions={[
                                <IconText
                                    type="star-o"
                                    text={favs}
                                    key="star-o"
                                />,
                                <IconText
                                    type="like-o"
                                    text={likes}
                                    key="like-o"
                                    action={() => handleLikeButton(id)}
                                />,
                                <IconText
                                    type="message"
                                    text={comment}
                                    key="message"
                                    action={() => handleComment(id)}
                                />,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={avatar} className="user-avatar" />}
                                title={`${firstName} ${lastName}`}
                                description="3h ago"
                            />
                            {image ? (
                                <img
                                    className="post-image"
                                    alt={image ? `${firstName} image` : null}
                                    src={image}
                                />
                            ) : null
                            }
                            {post}
                            {/* post comment component */}
                            <div className={activeComment === id ? 'show' : 'hide'}>
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
                }}
            />
        )
            : LOADING_SKELETON.map(items => {
                // data loading simulation
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
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

TimeLinePosts.propTypes = {
    activeComment: PropTypes.string.isRequired,
    handleComment: PropTypes.func.isRequired,
    handleLikeButton: PropTypes.func.isRequired,
    handleOk: PropTypes.func.isRequired,
    timelineData: PropTypes.arrayOf(PropTypes.shape({
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
