import { Divider, List, ListItem, ListItemButton, Stack, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../constants/colors";
import { BlogData } from "../../interfaces/blog-data";
import setOpacity from "../../utils/set-opacity";

interface TagsListItemProps {
    tagName: string;
    value: BlogData[];
}

export function BlogTagsListItem(props: TagsListItemProps) {
    const [sublistShow, setSublistShow] = useState(false);

    return (
        <>
            <Divider></Divider>
            <ListItem sx={styles.outterItem} key={props.tagName}>
                <Stack>
                    <ListItemButton sx={styles.button} onClick={() => setSublistShow(!sublistShow)}>
                        {props.tagName}
                    </ListItemButton>
                    <Box sx={styles.innerListBox}>
                        {sublistShow ? (
                            <List sx={styles.innerList}>
                                {props.value.map(item => (
                                    <Link to="/article" state={{ article: item }} style={styles.innerListItemLink}>
                                        <ListItemButton sx={styles.innerListItem}>{item.title}</ListItemButton>
                                    </Link>
                                ))}
                            </List>
                        ) : null}
                    </Box>
                </Stack>
            </ListItem>
        </>
    );
}

const styles = {
    outterItem: { padding: 0 },
    button: { width: "calc(20vw - 8px)", height: 35 },
    innerListBox: { padding: "0 10px 0 18px" },
    innerList: { padding: 0 },
    innerListItem: {
        color: setOpacity(Colors.white, 0.8),
        height: 25,
        fontSize: 14,
        padding: "0 0 0 25px",
    },
    innerListItemLink: { textDecoration: "none", color: "white" },
};
