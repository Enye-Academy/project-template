import React, { Component } from 'react';
import { Tabs } from 'antd';

import { components } from '../../layout';
import forumData from '../../../static/data/forumData.json';
import ForumLatestPost from './ForumLatestPost';
import { ForumTopUsers } from './ForumAsides';
import { STRINGS, TabPanes } from '../constants';

const { PageLayout } = components;
const {
    PAGE_TITLE,
} = STRINGS;
const { TabPane } = Tabs;

export default class Forum extends Component {
    state = {
        data: [],
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
                        {
                            TabPanes().map(tabpane => {
                                const { key, tab } = tabpane;
                                let children;
                                if (key === '1') {
                                    children = (
                                        <section className="forum_latest_tab">
                                            <ForumTopUsers blogData={data} />
                                            <ForumLatestPost blogData={data} />
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
