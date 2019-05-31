import React from 'react';
import {
    Icon, Divider, Skeleton, List, Typography, Avatar
} from 'antd';

import { CreatePostComponent } from './CreatePostComponent';
import './TimeLine.css';
import {
    LOADING_SKELETON, COMMENT_PLACEHOLDER
} from '../constant';

const IconText = ({ type, text, action }) => (
    <span>
        <Icon type={type} className="icon_text" onClick={action} />
      {text}
    </span>
);

const TimeLinePosts = props => {
    const {
        profileData, like, activeComment, handleComment, handleOk, handleLikeButton,
    } = props;
    return (

        profileData.length !== 0 ? (
            <List
                itemLayout="vertical"
                dataSource={profileData}
                className="list_style"
                size="large"
                renderItem={user => {
                    const {
                        id,
                        first_name,
                        last_name,
                        email,
                        post,
                        avatar,
                        image,
                        likeCount,
                        textValue,
                        handleOnChange,
                    } = user;

                    return (
                        <List.Item
                            key={id}
                            actions={[
                                <IconText type="star-o" text="156" />,
                  <IconText type="like-o" text={likeCount} action={() => handleLikeButton(id)} />,
                  <IconText type="message" text={likeCount} action={() => handleComment(id)} />,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={avatar} className="user-avatar" />}
                                title={`${first_name} ${last_name}`}
                                description="3h ago"
                            />
                            {image ? (
                                <img
                                    className="post-image"
                                    alt={image ? `${first_name} image` : null}
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
            :
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
