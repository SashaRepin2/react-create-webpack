import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderSideMenu from "./HeaderSideMenu/HeaderSideMenu";
import SettingsIcon from "@mui/icons-material/Settings";

import { LINKS_SETTINGS_PAGE } from "../../consts/links";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setIsOpenMenu(open);
    };

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Trello Clone
                        </Typography>
                        <Box>
                            <Link to={LINKS_SETTINGS_PAGE}>
                                <IconButton aria-label="back">
                                    <SettingsIcon
                                        sx={{ fill: "#fff", height: "32px", width: "32px" }}
                                    />
                                </IconButton>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <HeaderSideMenu
                isOpen={isOpenMenu}
                toggleDrawer={toggleDrawer}
            />
        </React.Fragment>
    );
};

export default React.memo(Header);
