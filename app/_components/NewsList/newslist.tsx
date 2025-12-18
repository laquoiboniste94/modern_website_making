import Image from "next/image";
import styles from '../NewsList/newslist.module.css';
import { News } from '../../_libs/microcms';
import Category from "../NewsList_category/newslist_category";
import Date from "../NewsList_date/newslist_date";
import Link from "next/link";

type Props = {
    news: News[];
};

const noImage = "/no-image.png";

export default function NewsList( { news }: Props) {
    if( news.length === 0) {
        return <p>記事がありません</p>;
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link href={'./news/${article.id}'} className={styles.link}>
                        {article.thumbnail ? (
                            <Image 
                                src={article.thumbnail.url}
                                alt=""
                                className={styles.image}
                                width={article.thumbnail.width}
                                height={article.thumbnail.height}
                            />
                        ) : (
                            <Image 
                                className={styles.image}
                                src={noImage}
                                alt="No Image"
                                width={1200}
                                height={630}
                            />
                        )}

                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <Category NewsCategory={article.category} />
                            </dd>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>
    );
}