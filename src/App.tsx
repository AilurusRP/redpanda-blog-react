import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import ArticleListPage from "./views/article-list-page";
import { redpandaTheme } from "./themes/redpanda-theme";
import { Route, Routes } from "react-router-dom";
import BlogLayout from "./components/UI/blog-layout";
import BlogTagsList from "./components/article-list-page/blog-tags-list";
import { useEffect, useState } from "react";
import { BlogData } from "./interfaces/blog-data";
import { getAllBlogs } from "./services/apis";
import ArticleContentPage from "./views/article-content-page";

export default function App() {
    const [blogDataList, setBlogDataList] = useState<BlogData[]>([]);
    useEffect(() => {
        getBlogDataList(setBlogDataList);
    }, []);
    return (
        <div className="App">
            <ThemeProvider theme={redpandaTheme}>
                <BlogLayout
                    headerText={"小熊猫的博客"}
                    leftBoxList={<BlogTagsList value={blogDataList} />}
                    contentList={
                        <Routes>
                            <Route path="/" element={<ArticleListPage value={blogDataList} />} />
                            <Route path="/article" element={<ArticleContentPage />} />
                        </Routes>
                    }
                />
            </ThemeProvider>
        </div>
    );
}

async function getBlogDataList(setBlogDataList: React.Dispatch<React.SetStateAction<BlogData[]>>) {
    const blogDataList = await getAllBlogs();
    console.log(blogDataList);
    if (blogDataList) setBlogDataList(blogDataList);
}
