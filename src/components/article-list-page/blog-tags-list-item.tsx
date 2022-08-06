import { Divider, List, ListItem, ListItemButton, Stack, useTheme } from "@mui/material";
import { useState } from "react";
import { BlogData } from "../../interfaces/blog-data";
import setOpacity from "../../utils/set-opacity";

interface TagsListItemProps {
    tagName: string;
    value: BlogData[];
}

export function BlogTagsListItem(props: TagsListItemProps) {
    const [sublistShow, setSublistShow] = useState(false);
    const themeColor = useTheme().palette.primary.main;

    return (
        <>
            <Divider></Divider>
            <ListItem sx={styles.outterItem} key={props.tagName}>
                <Stack>
                    <ListItemButton sx={styles.button} onClick={() => setSublistShow(!sublistShow)}>
                        {props.tagName}
                    </ListItemButton>
                    {sublistShow ? (
                        <List sx={styles.innerList}>
                            {props.value.map(item => (
                                <ListItem sx={styles.innerListItem(themeColor)}>{item.title}</ListItem>
                            ))}
                        </List>
                    ) : null}
                </Stack>
            </ListItem>
        </>
    );
}

const styles = {
    outterItem: { padding: 0 },
    button: { width: "calc(20vw - 8px)", height: 35 },
    innerList: { backgroundColor: "white", padding: 0 },
    innerListItem: (themeColor: string) => ({
        backgroundColor: setOpacity(themeColor, 0.6),
        height: 25,
        fontSize: 14,
        padding: "0 0 0 25px",
    }),
};
