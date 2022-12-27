import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BrandLogo from "../../assets/images/JCB-Logo.jpg";
// import BritishDesktopLogo from "../../assets/images/ba_masterbrand_positive.svg";

import { drawerWidth } from "../../index";
import SideMenuItems from "./SideMenuItems";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ toggleDrawer, menuState, menuItems }) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    toggleDrawer(!menuState);
  };
  return (
    <div>
      <Drawer variant="permanent" open={menuState}>
        <DrawerHeader
          sx={(theme) => ({
            bgcolor: `${theme.palette.primary.main}`,
          })}
        >
          {menuState && (
            <img
              src={BrandLogo}
              alt={"British Airways"}
              width={167}
              sx={{ backgroundColor: "yellow" }}
            />
          )}
          <IconButton
            onClick={handleDrawerClose}
            aria-label={"Close Button"}
            title={"Close Button"}
            sx={(theme) => ({
              color: theme.palette.grey.A700,
            })}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <SideMenuItems menuItems={menuItems} menuState={menuState} />
      </Drawer>
    </div>
  );
};

export default Sidebar;
