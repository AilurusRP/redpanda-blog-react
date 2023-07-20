import { Card, CardContent, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Colors } from "../../constants/colors";
import { BlogData } from "../../interfaces/blog-data";
import setOpacity from "../../utils/set-opacity";

interface ContentListProps {
    value: BlogData[];
}

export default function BlogContentList(props: ContentListProps) {
    return (
        <List sx={{ padding: "15px 60px 10px 60px" }}>
            {props.value.map(item => (
                <Link to="/article"  key={item._id} state={{ article: item }} style={{ textDecoration: "none" }}>
                    <ListItem sx={{ margin: "40px 0" }}>
                        <Card
                            sx={{
                                background: "inherit",
                                backdropFilter: "blur(15px)",
                            }}
                        >
                            <CardContent
                                sx={{
                                    backgroundColor: setOpacity(Colors.white, 0.7),
                                }}
                            >
                                <Typography variant="h4">{item.title}</Typography>
                                <Typography
                                    sx={{
                                        height: 100,
                                        overflow: "hidden",
                                        fontSize: 14,
                                        lineHeight: "20px",
                                    }}
                                >
                                    {item.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                </Link>
            ))}
        </List>
    );
}
