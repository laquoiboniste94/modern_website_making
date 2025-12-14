import Image from "next/image";
import styles from '../Header/header.module.css';

const logo = "/logo.svg";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="www.google.com" className={styles.logoLink}>
                <Image src={logo} alt="SIMPLE"
                    className={styles.logo}
                    width={348} height={133}
                    priority
                />
            </a>
        </header>
    );
}