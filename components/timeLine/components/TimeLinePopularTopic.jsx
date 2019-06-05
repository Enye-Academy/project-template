import Link from 'next/link';
import React from 'react';

import { POPULAR_TOPIC, STRINGS } from '../constants';

const { POPULAR_TOPIC_TEXT } = STRINGS;

const TimeLinePopularTopic = () => (
    <aside className="TimeLine_popular-topic">
        <h3>{POPULAR_TOPIC_TEXT}</h3>
        <ul>
            {
                POPULAR_TOPIC.map(topic => {
                    const { link, text } = topic;
                    return (
                        <li key={text}>
                            <Link href={link}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>{text}</a>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    </aside>
);

export default TimeLinePopularTopic;
