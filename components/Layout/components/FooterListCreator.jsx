import React from 'react';
import Link from 'next/link';

const FooterListCreator = props => {
    const { list } = props;
    return (
        <ul>
            {
                list.map(link => (
                    <Link href={link.href} key={link.text}>
                        <li>
                            <a>{link.text}</a>
                        </li>
                    </Link>
                ))
            }
        </ul>
    );
};

export default FooterListCreator;
