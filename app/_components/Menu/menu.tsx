"use client";

import Link from "next/link";
import styles from '../Menu/menu.module.css';
import Image from "next/image";
import { useState } from "react";
import cn  from "classnames";

const hamburgerMenu = "./menu.svg";
const closeButton = "./close.svg";

export default function Menu() {
    /*const open = () => {
        document.querySelector("nav")?.classList.add(styles.open);
    };*/
    const [isOpen, setOpen] = useState<boolean>(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    return (
        <div>
            <nav className={cn(styles.nav, { [styles.open]: isOpen })}>
                <ul className={styles.items}>
                    <li>
                        <Link href="/news">ニュース一覧</Link>
                    </li>
                    <li>
                        <Link href="/members">当社メンバー紹介</Link>
                    </li>
                    <li>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
                <button className={cn(styles.button, { [styles.close]: !isOpen })} onClick={close}>
                    <Image 
                        src={closeButton}
                        alt="閉じる"
                        width={24}
                        height={24}
                        priority
                    />
                </button>
            </nav>
            <button className={styles.button} onClick={open}>
                <Image 
                    src={hamburgerMenu}
                    alt=""
                    width={24}
                    height={24}
                />
            </button>
        </div>
    );
}