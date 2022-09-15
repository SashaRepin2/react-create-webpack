import React, { FC, memo, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import HeaderSideMenu from "./components/SideMenu";

import { LINKS_SETTINGS_PAGE } from "@consts/links";

const Header: FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

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
            <Box
                sx={{
                    flexGrow: 1,
                }}
            >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            sx={{
                                mr: 2,
                            }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            Trello Clone
                        </Typography>
                        <Box>
                            <Link to={LINKS_SETTINGS_PAGE}>
                                <IconButton aria-label="back">
                                    <SettingsIcon
                                        sx={{
                                            fill: "#fff",
                                            height: "32px",
                                            width: "32px",
                                        }}
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

export default memo(Header);
