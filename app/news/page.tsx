import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList/newslist";
import { NEWS_LIST_LIMIT } from "../_constants";
import Pagination from "../_components/Pagination/pagination";
import SearchField from "../_components/Searchfield/searchfield";

export const revalidate = 0;

export default async function page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}