import styles from '../Footer/footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="./news">ニュース一覧</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="./members">メンバーページ</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="./contact">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>SIMPLE. All Rights Reserved 2024</p>
        </footer>
    );
}