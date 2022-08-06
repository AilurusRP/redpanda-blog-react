import { Avatar, Box, useTheme } from "@mui/material";
import setOpacity from "../../utils/set-opacity";

export default function BlogAuthorInfo() {
    const themeColor = useTheme().palette.primary.main;
    return (
        <Box sx={styles.box(themeColor)}>
            <Avatar alt="red panda" src="/imgs/avatar.jpg" sx={styles.avatar}></Avatar>
        </Box>
    );
}

const styles = {
    box: (themeColor: string) => ({
        height: 170,
        backgroundColor: setOpacity(themeColor, 0.3),
        padding: "30px calc(10vw - 60px) 0 calc(10vw - 60px)",
    }),
    avatar: {
        height: 120,
        width: 120,
    },
};
