import { Box, Card, CardContent, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Colors } from "../constants/colors";
import { BlogData } from "../interfaces/blog-data";
import setOpacity from "../utils/set-opacity";

export default function ArticleContentPage() {
    const { state }: { state: { article: BlogData } } = useLocation();

    return (
        <Box sx={{ padding: "60px 60px" }}>
            <Card
                sx={{
                    background: "inherit",
                    backdropFilter: "blur(15px)",
                    borderRadius: 2
                }}
            >
                <CardContent
                    sx={{
                        backgroundColor: setOpacity(Colors.white, 0.7),
                        padding: "50px 60px 0 60px",
                    }}
                >
                    <Typography variant="h4">{state.article.title}</Typography>
                    <Typography
                        sx={{
                            height: "100%",
                            overflow: "hidden",
                            fontSize: 14,
                            lineHeight: "28px",
                            padding: "30px 0 50px 0"
                        }}
                    >
                        {state.article.content}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
