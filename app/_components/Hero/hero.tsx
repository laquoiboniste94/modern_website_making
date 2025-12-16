import Image from "next/image";
import styles from '../Hero/hero.module.css';

type Props = {
    title: string;
    sub: string;
};
const heroPic = "/img-mv.jpg";

export default function Hero({ title, sub }: Props) {
    return (
        <section className={styles.container}>
            <div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.sub}>{sub}</p>
            </div>
            <Image 
                className={styles.bgimg}
                src={heroPic}
                alt=""
                width={4000}
                height={1200}
            />
        </section>
    );
}