  import { NewsDate } from "@/app/_libs/microcms";
  import styles from '../NewsList_date/newslist_date.module.css';
  import Image from "next/image";

  type Props = {
    NewsDate: NewsDate;
  };

  const clock = "/clock.svg";

  export default function Date( {NewsDate}: Props ) {
    return (
        <span className={styles.date}>
            <Image 
                src={clock} alt="" 
                width={16} height={16}
                loading="eager" />
            {NewsDate.date}
        </span>
    );
}
 
 
