import React, { Component } from 'react';
import { Tabs } from 'antd';

import { components } from '../../layout';
import forumData from '../../../static/data/forumData.json';
import ForumLatestPost from './ForumLatestPost';
import { ForumTopUsers } from './ForumAsides';
import { STRINGS } from '../constants';

const { PageLayout } = components;
const {
    PAGE_TITLE, ANSWERED_CONTENT, FAVORITE_CONTENT, TRENDING_CONTENT,
} = STRINGS;
const { TabPane } = Tabs;

export default class Forum extends Component {
    state = {
        data: '',
    }

    componentDidMount() {
        this.handleDataFetch();
    }

    handleDataFetch = () => {
        this.setState({
            data: forumData,
        });
    }

    render() {
        const { data } = this.state;
        return (
            <PageLayout
                isSiderPresent={data.length > 0}
                isFooterPresent={false}
                isAuthenticated
                title={PAGE_TITLE}
                selectedKey="2"
            >
                <main className="forum_content">
                    <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
                        <TabPane tab="Latest" key="1">
                            <section className="forum_latest_tab">
                                <ForumTopUsers blogData={data} />
                                <ForumLatestPost blogData={data} />
                            </section>
                        </TabPane>
                        <TabPane tab="Trending" key="2">{ANSWERED_CONTENT}</TabPane>
                        <TabPane tab="Favourite" key="3">{FAVORITE_CONTENT}</TabPane>
                        <TabPane tab="Answered" key="4">{TRENDING_CONTENT}</TabPane>
                    </Tabs>
                </main>
            </PageLayout>
        );
    }
}
