/* eslint-disable no-shadow */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Divider, Icon } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import {
    commentButtonClicked,
    favButtonClicked,
    handlePostUpdate,
    handlePostComment,
    loadTimeLineData,
    likeButtonClicked,
    setTimeLineData,
    setOnlineFriendsData,
    setOnlineFriendsError,
    loadOnlineFriendsData,
    setTimeLineError
} from '../actions';
import { components } from '../../layout';
import { CreatePostComponent } from './CreatePostComponent';
import CreatePostModal from './CreatePostModal';
import { generateCommentData, generateData } from '../utils';
import {
    getError,
    getIsOnlineFriendsFetching,
    getIsTimelineFetching,
    getOnlineFriendsData,
    getTimelineData
} from '../selectors';
import TimeLinePosts from './TimeLinePosts';
import TimeLinePopularTopic from './TimeLinePopularTopic';
import TimeLineProfileInfo from './TimeLineProfileInfo';
import TimeLineOnlineFriends from './TimeLineOnlineFriends';
import { STRINGS } from '../constants';

const { CREATE_POST_PLACEHOLDER, TIMELINE_TITLE } = STRINGS;
const { PageLayout } = components;

/** Helper function that is used to render the TimeLine Component
 * @class TimeLine
 * @extends {React.Component}
 * @return {Object} returns the TimeLine component
 */
class TimeLine extends React.Component {
state ={
    isModalOpen: false,
    value: '',
}

componentDidMount() {
    const { loadTimeLineData, loadOnlineFriendsData } = this.props;
    loadTimeLineData();
    loadOnlineFriendsData();
}

    /**
     * Helper function that handles the visibility of a modal
     * @function
     * @return {Object} returns 'true' to show the modal
     */
    modalHandler = () => {
        const { isModalOpen } = this.state;
        this.setState({
            isModalOpen: !isModalOpen,
        });
    };

    /**
     * Helper function that is used to handle the data from post component,
     * it also closes the post modal
     * @function
     * @return {Object} returns 'false' to close the modal post component
     */
    handleCreateStatus = () => {
        const {
            handlePostUpdate, timelineData,
        } = this.props;

        const { isModalOpen, value } = this.state;

        // // get post
        handlePostUpdate(generateData(timelineData.length + 1, value));

        // close modal
        if (isModalOpen) {
            this.modalHandler();
        }

        // clear post component
        this.setState({
            value: '',
        });
        // close the modal and make make an api call
    };

    /**
    * Helper function that is used to handle clicking on the like button
    * @function
    * @param {Number} id the id of the liked post
    * @return {Object} changes the state of the like component
    */
    handleLikeButton = id => {
        const { likeButtonClicked } = this.props;
        likeButtonClicked(id);
    };

    /**
    * Helper function that is used to handle favourite button
    * @function
    * @param {Number} id the id of the commented post
    * @return {Object} changes the state of the like component
    */
   handleFavButton = id => {
       const { favButtonClicked } = this.props;
       favButtonClicked(id);
   };

    /**
    * Helper function that is used to handle clicking on the comment button
    * @function
    * @param {Number} id the id of the commented post
    * @return {Object} changes the state of the like component
    */
    handleCommentButton = id => {
        const { commentButtonClicked } = this.props;
        commentButtonClicked(id);
    };

    handleCommentOnPost = id => {
        const { handlePostComment } = this.props;
        const { value } = this.state;

        handlePostComment(generateCommentData(id, value));
        this.setState({
            value: '',
        });
    }

    handleValueChange = e => {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const {
            timelineData, isTimelineFetching, onlineFriendsData, isOnlineFriendsFetching,
        } = this.props;
        const { isModalOpen, value } = this.state;

        return (
            <PageLayout
                isSiderPresent={timelineData.length > 0}
                isFooterPresent={false}
                isAuthenticated
                title={TIMELINE_TITLE}
            >
                <main className="TimeLine_content">

                    <section>
                        {/* edit component for mobile */}
                        <div className="create-icon-container">
                            <Icon type="form" className="create-icon" onClick={this.modalHandler} />
                        </div>

                        <CreatePostModal
                            visible={isModalOpen}
                            handleOkFunction={this.handleCreateStatus}
                            closeModal={this.modalHandler}
                            handleValueChange={this.handleValueChange}
                            value={value}
                        />
                    </section>

                    {/* profile info desktop */}
                    <TimeLineProfileInfo />
                    {/* popular topics aside */}
                    <TimeLinePopularTopic />
                    {/* online friends aside tab */}
                    <TimeLineOnlineFriends
                        onlineFriendsData={onlineFriendsData}
                        isOnlineFriendsFetching={isOnlineFriendsFetching}
                    />
                    {/* main timeline */}
                    <section className="TimeLine_post">
                        {/* create post component */}
                        <section className="TimeLine-post-component">
                            <CreatePostComponent
                                InputPlaceholder={CREATE_POST_PLACEHOLDER}
                                rowHeight={5}
                                handleOkFunction={this.handleCreateStatus}
                                handleValueChange={this.handleValueChange}
                                value={value}
                            />
                        </section>

                        <Divider />

                        <section className="TimeLine_posts">
                            {/* timeline posts */}
                            <TimeLinePosts
                                isTimelineFetching={isTimelineFetching}
                                profileData={timelineData}
                                handleLikeButton={this.handleLikeButton}
                                handleFavButton={this.handleFavButton}
                                handleCommentButton={this.handleCommentButton}
                                handleCommentOnPost={this.handleCommentOnPost}
                                handleValueChange={this.handleValueChange}
                                value={value}
                            />
                        </section>
                    </section>
                </main>
            </PageLayout>
        );
    }
}

const mapStateToProps = state => ({
    error: getError(state),
    isTimelineFetching: getIsTimelineFetching(state),
    onlineFriendsData: getOnlineFriendsData(state),
    onlineFriendsFetching: getIsOnlineFriendsFetching(state),
    timelineData: getTimelineData(state),
});

const timeLineActions = {
    commentButtonClicked,
    favButtonClicked,
    handlePostComment,
    handlePostUpdate,
    likeButtonClicked,
    loadOnlineFriendsData,
    loadTimeLineData,
    setOnlineFriendsData,
    setOnlineFriendsError,
    setTimeLineData,
    setTimeLineError,
};

const mapDispatchToProps = dispatch => bindActionCreators(timeLineActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);

TimeLine.propTypes = {
    commentButtonClicked: PropTypes.func.isRequired,
    favButtonClicked: PropTypes.func.isRequired,
    handlePostComment: PropTypes.func.isRequired,
    handlePostUpdate: PropTypes.func.isRequired,
    isOnlineFriendsFetching: PropTypes.bool.isRequired,
    isTimelineFetching: PropTypes.bool.isRequired,
    likeButtonClicked: PropTypes.func.isRequired,
    loadOnlineFriendsData: PropTypes.func.isRequired,
    loadTimeLineData: PropTypes.func.isRequired,
    onlineFriendsData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
    })).isRequired,
    timelineData: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        comment: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        image: PropTypes.string,
        lastName: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        post: PropTypes.string.isRequired,
    })).isRequired,
};
