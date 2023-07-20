import { List } from "@mui/material";
import { keys } from "lodash";
import { BlogData } from "../../interfaces/blog-data";
import { TagsList } from "../../interfaces/tags-list";
import { safePush } from "../../utils/safe-push";
import { BlogTagsListItem } from "./blog-tags-list-item";

interface TagsListProps {
    value: BlogData[];
}

export default function BlogTagsList(props: TagsListProps) {
    const tagsData = getTags(props.value);
    return (
        <List sx={styles.tagList}>
            {keys(tagsData).map(key => (
                <BlogTagsListItem tagName={key} key={key} value={tagsData[key]} />
            ))}
        </List>
    );
}

function getTags(data: BlogData[]) {
    const tagsList: TagsList = {};
    data.forEach(item => item.tags.forEach(tag => (tagsList[tag] = safePush(tagsList[tag], item))));
    return tagsList;
}

const styles = {
    tagList: { height: "calc(100vh - 240px)", overflowY: "scroll", padding: 0 },
};
