import { Box } from "@mui/material";
import { ReactElement } from "react";
import { Colors } from "../../constants/colors";
import setOpacity from "../../utils/set-opacity";
import BlogAuthorInfo from "./blog-author-info";

interface BlogLeftBoxProps {
    list: ReactElement;
}

export default function BlogLeftBox(props: BlogLeftBoxProps) {
    return (
        <Box sx={styles.outBox}>
            <>
                <BlogAuthorInfo></BlogAuthorInfo>
                {props.list}
            </>
        </Box>
    );
}

const styles = {
    outBox: {
        width: "20vw",
        height: "calc(100vh - 40px)",
        position: "absolute",
        top: "40px",
        left: 0,
        backgroundColor: setOpacity(Colors.themeColor, 0.7),
        color: "#f5f5f5",
        overflowY: "hidden",
    },
};
