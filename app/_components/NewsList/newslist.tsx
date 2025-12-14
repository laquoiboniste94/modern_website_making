import Image from "next/image";
import styles from '../NewsList/newslist.module.css';
import { News } from '../../_libs/microcms';
import Category from "../NewsList_category/newslist_category";
import Date from "../NewsList_date/newslist_date";

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
                    <div className={styles.link}>
                        <Image 
                            className={styles.image}
                            src={noImage} alt="No Image"
                            width={1200} height={630} />
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <Category NewsCategory={{name: article.category.name}} />
                                <Date NewsDate={{date: article.publishedAt}} />
                            </dd>
                        </dl>
                    </div>
                </li>
            ))}
        </ul>
    );
}