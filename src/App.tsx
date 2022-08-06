import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import ArticleListPage from "./views/article-list-page";
import { redpandaTheme } from "./themes/redpanda-theme";

export default function App() {
    return (
        <div className="App">
            <ThemeProvider theme={redpandaTheme}>
                <ArticleListPage></ArticleListPage>
            </ThemeProvider>
        </div>
    );
}
