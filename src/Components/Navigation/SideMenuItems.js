import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

// const useStyle = makeStyles(
//   (theme) => (
//     {
//       navmenu: {
//         "&.active": {
//           backgroundColor: theme.palette.primary.light,
//           "& .MuiListItemIcon-root": {
//             color: "white",
//           },
//           "& .MuiTypography-body1": {
//             color: "white",
//           },
//           "&:hover": {
//             backgroundColor: theme.palette.primary.dark,
//             color: 'white'
//           },
//         },
//       },
//     }
//   )
// );

const SideMenuItems = ({ menuState, menuItems }) => {
  // let css = useStyle();
  const populateMenu = () => (
    <List>
      {menuItems.map((text, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <Tooltip title={text.name} placement="right-end">
            <ListItemButton
              component={NavLink}
              to={text.link}
              sx={{
                minHeight: 48,
                justifyContent: menuState ? "initial" : "flex-start",
                px: 2.5,
              }}
              className="navmenu"
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
                  whiteSpace: 'break-spaces'
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
