import styles from '../ButtonLink/buttonlink.module.css';
import React from 'react';

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props ) {
    return (
        <a href={href} className={styles.button}>
            { children }
        </a>
    );
}