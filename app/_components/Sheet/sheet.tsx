import React from 'react';
import styles from '../Sheet/sheet.module.css';

/*このモジュールでくくった要素をSheetコンポのレイアウトの適用にするためのコンポ*/

type Props = {
    children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
    return <div className={styles.container}>{children}</div>;
}