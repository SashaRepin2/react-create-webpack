import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";

interface SideMenuProps {
    isOpen: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleDrawer }) => {
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
                            primary={"Trello Clone"}
                            primaryTypographyProps={{
                                fontSize: "24px",
                                color: "purple",
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        />
                    </ListItem>
                    <ListItem
                        disablePadding
                        sx={{ bgcolor: "#8458b3" }}
                    >
                        <ListItemButton>
                            <ListItemIcon sx={{ color: "#fff" }}>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={"Settings"}
                                sx={{ color: "#fff", fontWeight: "bold" }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default SideMenu;
