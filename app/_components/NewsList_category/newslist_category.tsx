import { NewsCategory } from "@/app/_libs/microcms";
import styles from '../NewsList_category/newslist_category.module.css';

type Props = {
    NewsCategory: NewsCategory;
};

export default function Category( {NewsCategory}: Props) {
    return <span className={styles.tag}>{NewsCategory.name}</span>;
}