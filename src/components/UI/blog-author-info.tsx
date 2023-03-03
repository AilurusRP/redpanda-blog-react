import { Avatar, Box } from "@mui/material";
import { Colors } from "../../constants/colors";
import setOpacity from "../../utils/set-opacity";

export default function BlogAuthorInfo() {
    return (
        <Box sx={styles.box}>
            <Avatar alt="red panda" src="/imgs/avatar.jpg" sx={styles.avatar}></Avatar>
        </Box>
    );
}

const styles = {
    box: {
        height: 170,
        backgroundColor: setOpacity(Colors.themeColor, 0.3),
        padding: "30px calc(10vw - 60px) 0 calc(10vw - 60px)",
    },
    avatar: {
        height: 120,
        width: 120,
    },
};
