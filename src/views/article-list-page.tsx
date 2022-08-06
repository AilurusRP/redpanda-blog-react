import { BlogData } from "../interfaces/blog-data";
import BlogContentList from "../components/article-list-page/blog-content-list";

export default function ArticleListPage(props: { value: BlogData[] }) {
    return <BlogContentList value={props.value} />;
}
