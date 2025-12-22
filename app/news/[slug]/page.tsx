// app/news/[slug]/page.tsx
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article/article";
import ButtonLink from "@/app/_components/ButtonLink/buttonlink";
import styles from '../[slug]/page.module.css';
import { notFound } from "next/navigation";

// Next.js 15用の型定義
type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function Page({ params }: Props) {
  // ⭐ ここが重要！ paramsをawaitする
  const { slug } = await params;
  
  console.log("取得するslug:", slug);
  
  // 念のためslugが空でないか確認
  if (!slug) {
    return <div>記事IDが指定されていません</div>;
  }
  const data = await getNewsDetail(slug).catch(notFound);
  console.log("取得したデータ", data);

 /*return <div>{data.title}</div>;*/

  return (
    <>
      <Article data={data} />
        <div className={styles.footer}>
            <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
        </div>
    </>
  );
}