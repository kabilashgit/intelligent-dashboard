import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";

const SideMenuItems = ({ menuState, menuItems }) => {
  const populateMenu = () => (
    <List>
      {menuItems.map((text, index) => (
        <ListItem key={text.name} disablePadding sx={{ display: "block" }}>
          <Tooltip title={text.name} placement="right-end">
            <ListItemButton
              href={text.link}
              sx={{
                minHeight: 48,
                justifyContent: menuState ? "initial" : "flex-start",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: menuState ? 3 : "auto",
                  justifyContent: "right",
                }}
              >
                {text.icon}
              </ListItemIcon>
              <Typography
                component={"span"}
                color={"secondary"}
                sx={{
                  fontWeight: "500 !important",
                  opacity: menuState ? 1 : 0,
                }}
              >
                {text.name}
              </Typography>
            </ListItemButton>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  );

  return <div>{populateMenu()}</div>;
};

export default SideMenuItems;
