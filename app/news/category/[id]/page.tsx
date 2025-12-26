import NewsList from "@/app/_components/NewsList/newslist";
import { getNewsList, getCategoryDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import Category from "@/app/_components/NewsList_category/newslist_category";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination/pagination";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  // ★ テキストとの差分はここだけ
  const { id } = await params;
  const category = await getCategoryDetail(id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category NewsCategory={category} /> の一覧
      </p>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} basePath={`/news/category/${category.id}`}/>
    </>
  );
}
