/* eslint-disable no-shadow */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Divider, Icon } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import {
    commentButtonClicked,
    favButtonClicked,
    fetchProfileData,
    handlePostUpdate,
    handlePostComment,
    likeButtonClicked,
    setPostUpdateField
} from '../actions';
import { components } from '../../layout';
import { CreatePostComponent } from './CreatePostComponent';
import CreatePostModal from './CreatePostModal';
import { getStatusValue, getTimelineData } from '../selectors';
import TimeLinePosts from './TimeLinePosts';
import { STRINGS } from '../constants';

const { CREATE_POST_PLACEHOLDER, TIMELINE_TITLE } = STRINGS;
const { PageLayout } = components;
const data = (id, post) => ({
    comment: 0,
    comments: [],
    email: 'jotuya2@gmail.com',
    favouriteCount: 0,
    favourited: false,
    firstName: 'Justice',
    id,
    lastName: 'Otuya',
    liked: false,
    likes: 0,
    post,
});

const commentData = (id, post) => ({
    firstName: 'Justice',
    id,
    lastName: 'Otuya',
    post,
});

/** Helper function that is used to render the TimeLine Component
 * @class TimeLine
 * @extends {React.Component}
 * @return {Object} returns the TimeLine component
 */
class TimeLine extends React.Component {
state ={
    isModalOpen: false,
}

componentDidMount() {
    const { fetchProfileData } = this.props;
    fetchProfileData();
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
            handlePostUpdate, setPostUpdateField, statusValue, timelineData,
        } = this.props;

        const { isModalOpen } = this.state;

        // get post
        handlePostUpdate(data(timelineData.length + 1, statusValue));

        // close modal
        if (isModalOpen) {
            this.modalHandler();
        }

        // clear post component
        setPostUpdateField('');
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

    /**
    * Helper function that is used to handle status value
    * @function
    * @return {Object} changes the state of the status value
    */
    handleStatusValue = e => {
        const { setPostUpdateField } = this.props;
        setPostUpdateField(e.target.value);
    }

    clearStatusValue = e => {
        const { setPostUpdateField } = this.props;
        setPostUpdateField(e.target.value = '');
    }

    handleCommentOnPost = id => {
        const { handlePostComment, statusValue } = this.props;
        // console.log(timeLineData);
        handlePostComment(commentData(id, statusValue));
    }

    render() {
        const {
            timelineData,
        } = this.props;
        const { isModalOpen } = this.state;

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
                            handleOnChange={this.handleStatusValue}
                        />
                    </section>

                    {/* main timeline */}
                    <section className="TimeLine_post">
                        {/* create post component */}
                        <section className="TimeLine-post-component">
                            <CreatePostComponent
                                InputPlaceholder={CREATE_POST_PLACEHOLDER}
                                rowHeight={5}
                                handleOkFunction={this.handleCreateStatus}
                                handleOnChange={this.handleStatusValue}
                            />
                        </section>

                        <Divider />

                        <section className="TimeLine_posts">
                            {/* timeline posts */}
                            <TimeLinePosts
                                profileData={timelineData}
                                handleLikeButton={this.handleLikeButton}
                                handleFavButton={this.handleFavButton}
                                handleCommentButton={this.handleCommentButton}
                                handleCommentOnPost={this.handleCommentOnPost}
                                handleOnChange={this.handleStatusValue}
                            />
                        </section>
                    </section>
                </main>
            </PageLayout>
        );
    }
}

const mapStateToProps = state => ({
    statusValue: getStatusValue(state),
    timelineData: getTimelineData(state),
});

const timeLineActions = {
    commentButtonClicked,
    favButtonClicked,
    fetchProfileData,
    handlePostComment,
    handlePostUpdate,
    likeButtonClicked,
    setPostUpdateField,
};

const mapDispatchToProps = dispatch => bindActionCreators(timeLineActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);

TimeLine.propTypes = {
    commentButtonClicked: PropTypes.func.isRequired,
    favButtonClicked: PropTypes.func.isRequired,
    fetchProfileData: PropTypes.func.isRequired,
    handlePostComment: PropTypes.func.isRequired,
    handlePostUpdate: PropTypes.func.isRequired,
    likeButtonClicked: PropTypes.func.isRequired,
    setPostUpdateField: PropTypes.func.isRequired,
    statusValue: PropTypes.string.isRequired,
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
