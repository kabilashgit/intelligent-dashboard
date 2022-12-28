import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {
  Box,
  // InputBase,
  // Paper,
  Stack,
  Tooltip,
} from "@mui/material";

import { drawerWidth } from "../../index";
import ProfilePopup from "./ProfilePopup";
import NotificationPopup from "./NotificationPopup";
import theme from "../../theme";
import { DisplaySettings } from "@mui/icons-material";
// import ThemeSwitch from "./ThemeSwitch";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const Topbar = ({ toggleDrawer, menuState }) => {
  const handleDrawerOpen = () => {
    toggleDrawer(!menuState);
  };

  return (
    <div>
      <AppBar position="fixed" open={menuState} sx={(theme) => ({
        bgcolor: theme.palette.primary.main
      })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 5,
              [theme.breakpoints.down('md')] : {
                mr: 2
              },
              ...(menuState && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flex: 1,
              alignItems: "center",
            }}
          >
            {/* <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 0,
                //   bgcolor: "transparent",
                [theme.breakpoints.down('md')] : {
                  display: 'none'
                }
              }}
              elevation={1}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "Search" }}
              />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Paper> */}
            <Typography variant="h6" noWrap component="div" sx={{
              fontSize: '1.5rem !important'
            }}>
            INTELLIGENT INVENTORY MANAGEMENT
            </Typography>
            <Stack direction="row" alignItems="center">
              {/* <ThemeSwitch /> */}

              <IconButton sx={{
                mr:2
              }}>
                <Tooltip title="Change Dashboard View">
                <DisplaySettings sx={{color: 'white'}} />
                </Tooltip>
              </IconButton>
              <NotificationPopup />
              <ProfilePopup />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topbar;
