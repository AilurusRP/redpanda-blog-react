import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface HeaderProps {
    text: string;
}

export default function BlogHeader(props: HeaderProps) {
    return (
        <AppBar color="primary" sx={{ position: "fixed", textAlign: "center" }}>
            <Toolbar sx={{ height: 40, minHeight: 40 }} variant="dense">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <IconButton edge="start" color="inherit" aria-label="arrow-back">
                        <ArrowBack />
                    </IconButton>
                </Link>
                <Typography variant="subtitle1" sx={{ width: "calc(100vw - 72px)" }}>
                    {props.text}
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
