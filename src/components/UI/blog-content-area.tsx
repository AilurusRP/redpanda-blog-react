import { Box } from "@mui/material";
import { ReactElement } from "react";

interface ContentAreaProps {
    contentList: ReactElement;
}

export default function BlogContentArea(props: ContentAreaProps) {
    return <Box sx={styles.outterBox}>{props.contentList}</Box>;
}

const styles = {
    outterBox: {
        position: "absolute",
        top: 40,
        right: 0,
        width: "80vw",
        height: "calc(100vh - 40px)",
        // padding: "20px 50px 40px 50px",
        overflowY: "scroll",
    },
};
