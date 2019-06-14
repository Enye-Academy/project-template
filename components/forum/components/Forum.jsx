/* eslint-disable no-shadow */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Tabs } from 'antd';

import { loadForumData, setForumDataError, setForumDataSuccess } from '../actions';
import { components } from '../../layout';
import ForumLatestPost from './ForumLatestPost';
import { ForumTopUsers } from './ForumTopUsers';
import { getError, getIsForumDataLoading, getForumData } from '../selectors';
import { STRINGS, TabPanes } from '../constants';

const { PageLayout } = components;
const {
    PAGE_TITLE,
} = STRINGS;
const { TabPane } = Tabs;

class Forum extends Component {
    componentDidMount() {
        const { loadForumData } = this.props;
        loadForumData();
    }

    render() {
        const { forumData, isForumDataLoading } = this.props;
        return (
            <PageLayout
                isSiderPresent={!isForumDataLoading}
                isFooterPresent={false}
                isAuthenticated
                title={PAGE_TITLE}
                selectedKey="2"
            >
                <main className="forum_content">
                    <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
                        {
                            TabPanes().map(tabpane => {
                                const { key, tab } = tabpane;
                                let children;
                                if (key === '1') {
                                    children = (
                                        <section className="forum_latest_tab">
                                            <ForumTopUsers
                                                isForumDataLoading={isForumDataLoading}
                                            />
                                            <ForumLatestPost blogData={forumData} />
                                        </section>
                                    );
                                }
                                return (
                                    <TabPane tab={tab} key={key}>{children}</TabPane>
                                );
                            })

                        }
                    </Tabs>
                </main>
            </PageLayout>
        );
    }
}

const mapStateToProps = state => ({
    error: getError(state),
    forumData: getForumData(state),
    isForumDataLoading: getIsForumDataLoading(state),
});

const forumActions = {
    loadForumData,
    setForumDataError,
    setForumDataSuccess,
};

const mapDispatchToProps = dispatch => bindActionCreators(forumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Forum);

Forum.propTypes = {
    forumData: PropTypes.arrayOf(PropTypes.shape({
        answers: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        votes: PropTypes.number.isRequired,
    })).isRequired,
    isForumDataLoading: PropTypes.bool.isRequired,
    loadForumData: PropTypes.func.isRequired,
};
