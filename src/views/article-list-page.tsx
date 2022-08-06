import { useEffect, useState } from "react";
import BlogTagsList from "../components/article-list-page/blog-tags-list";
import BlogLayout from "../components/UI/blog-layout";
import { BlogData } from "../interfaces/blog-data";
import { getAllBlogs } from "../services/apis";
import BlogContentList from "../components/article-list-page/blog-content-list";

export default function ArticleListPage() {
    const [blogDataList, setBlogDataList] = useState<BlogData[]>([]);
    useEffect(() => {
        getBlogDataList(setBlogDataList);
    }, []);
    return (
        <BlogLayout
            headerText={"小熊猫的博客"}
            leftBoxList={<BlogTagsList value={blogDataList} />}
            contentList={<BlogContentList value={blogDataList} />}
        />
    );
}

async function getBlogDataList(setBlogDataList: React.Dispatch<React.SetStateAction<BlogData[]>>) {
    const blogDataList = await getAllBlogs();
    console.log(blogDataList);
    if (blogDataList) setBlogDataList(blogDataList);
}
