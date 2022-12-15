import React, { useState } from "react";
import {
  alpha,
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Tooltip,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import profilePic from "../../assets/images/avatar.png";

const ProfilePopup = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled((props) => <Menu {...props} />)(({ theme }) => ({
    "& .MuiPaper-root": {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      marginTop: theme.spacing(1.5),
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${
        theme.palette.mode === "dark" ? theme.palette.grey[600] : "inherit"
      }`,
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
      "& .MuiAvatar-root": {
        width: 25,
        height: 25,
        marginLeft: theme.spacing(-0.5),
        marginRight: theme.spacing(1),
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: theme.palette.mode === "dark" ? -1 : 0,
        right: 14,
        width: 10,
        height: 10,
        backgroundColor: theme.palette.background.paper,
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))",
        borderTop: `1px solid ${
          theme.palette.mode === "dark" ? theme.palette.grey[600] : "inherit"
        }`,
        borderLeft: `1px solid ${
          theme.palette.mode === "dark" ? theme.palette.grey[600] : "inherit"
        }`,
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  }));
  return (
    <div>
      <Tooltip title="Account Settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "profile-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 25, height: 25 }} alt="Remy Sharp" src={profilePic} />
        </IconButton>
      </Tooltip>
      <StyledMenu
        anchorEl={anchorEl}
        id="profile-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar />
          My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default ProfilePopup;
