import React, { memo } from "react";

import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import { LINKS_HOME_PAGE, LINKS_SETTINGS_PAGE } from "@consts/links";

interface IHeaderSideMenuProps {
    isOpen: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const HeaderSideMenu: React.FC<IHeaderSideMenuProps> = ({ isOpen, toggleDrawer }) => {
    return (
        <Drawer
            anchor={"left"}
            open={isOpen}
            onClose={toggleDrawer(false)}
            sx={{ paper: { bgcolor: "red" } }}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItem>
                        <ListItemText
                            primaryTypographyProps={{
                                fontSize: "24px",
                                color: "purple",
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            Trello Clone
                        </ListItemText>
                    </ListItem>

                    <Link
                        style={{ textDecoration: "none" }}
                        to={LINKS_HOME_PAGE}
                    >
                        <ListItem
                            disablePadding
                            sx={{ bgcolor: "#8458b3" }}
                        >
                            <ListItemButton>
                                <ListItemIcon sx={{ color: "#fff" }}>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ color: "#fff", fontWeight: "bold" }}>
                                    Главная
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link
                        style={{ textDecoration: "none" }}
                        to={LINKS_SETTINGS_PAGE}
                    >
                        <ListItem
                            disablePadding
                            sx={{ bgcolor: "#8458b3" }}
                        >
                            <ListItemButton>
                                <ListItemIcon sx={{ color: "#fff" }}>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ color: "#fff", fontWeight: "bold" }}>
                                    Настройки
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Drawer>
    );
};

export default memo(HeaderSideMenu);
