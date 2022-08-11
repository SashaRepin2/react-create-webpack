import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

interface SideMenuProps {
    isOpen: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleDrawer }) => {
    const list = () => (
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
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text: string, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer
            anchor={"left"}
            open={isOpen}
            onClose={toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    );
};

export default SideMenu;
