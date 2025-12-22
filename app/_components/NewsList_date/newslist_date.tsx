  import { NewsDate } from "@/app/_libs/microcms";
  import styles from '../NewsList_date/newslist_date.module.css';
  import Image from "next/image";
  import { formatDate } from "@/app/_libs/utils";


  type Props = {
    date: string;
  };

  const clock = "/clock.svg";

  export default function Date( { date }: Props ) {


    return (
        <span className={styles.date}>
            <Image 
                src={clock} alt="" 
                width={16} height={16}
                loading="eager" />
              <p>{formatDate(date)}</p>
        </span>
    );
}
