// app/news/[slug]/page.tsx
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article/article";
import ButtonLink from "@/app/_components/ButtonLink/buttonlink";
import styles from '../[slug]/page.module.css';
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Next.js 15用の型定義
type Props = {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{ 
      dk?: string;
     }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { dk }= await searchParams;

  const data = await getNewsDetail(slug, {
    draftKey: dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ""],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  // ⭐ ここが重要！ paramsをawaitする
  const { slug } = await params;
  const { dk }= await searchParams;
  
  console.log("取得するslug:", slug);
  console.log("取得するdk:", dk);
  
  // 念のためslugが空でないか確認
  if (!slug) {
    return <div>記事IDが指定されていません</div>;
  }
  const data = await getNewsDetail(slug, {draftKey: dk, }).catch(notFound);
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