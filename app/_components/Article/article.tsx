import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Date from "../NewsList_date/newslist_date";
import Category from "../NewsList_category/newslist_category";
import styles from '../Article/article.module.css';

type Props = {
    data: News;
};

export default function Article({ data }: Props) {
    return (
        <main>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.meta}>
                <Category NewsCategory={data.category}/>
                <Date date={data.publishedAt ?? data.createdAt} />
            </div>
            {data.thumbnail && (
                <Image
                    src={data.thumbnail.url}
                    alt=""
                    className={styles.thumbnail}
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                />
            )}
            <div 
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: data.content, }}
            />
        </main>
    );
}