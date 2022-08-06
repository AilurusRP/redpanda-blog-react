import { Box, Stack } from "@mui/material";
import { ReactElement } from "react";
import BlogContentArea from "./blog-content-area";
import BlogHeader from "./blog-header";
import BlogLeftBox from "./blog-left-box";

interface LayoutProps {
    headerText: string;
    leftBoxList: ReactElement;
    contentList: ReactElement;
}

export default function BlogLayout(props: LayoutProps) {
    return (
        <Box sx={{ overflowY: "hidden", height: "100vh" }}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    height: "100vh",
                    width: "100vw",
                    backgroundImage: "url('/imgs/top-background.jpeg')",
                    backgroundSize: "cover",
                }}
            ></Box>
            <BlogHeader text={props.headerText}></BlogHeader>
            <Stack direction="row">
                <BlogLeftBox list={props.leftBoxList}></BlogLeftBox>
                <BlogContentArea contentList={props.contentList}></BlogContentArea>
            </Stack>
        </Box>
    );
}
