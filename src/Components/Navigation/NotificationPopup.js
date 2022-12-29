import React, { useState } from "react";
import {
  alpha,
  Avatar,
  Badge,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Tooltip,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
// import { Notifications } from "@mui/icons-material";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 16,
    border: `1px solid ${theme.palette.background.paper}`,
    background: `${theme.palette.error.light}`,
    // padding: "0 4px",
  },
}));

const StyledMenu = styled((props) => <Menu {...props} />)(({ theme }) => ({
  "& .MuiPaper-root": {
    maxWidth: 360,
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
      width: 32,
      height: 32,
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
    },
  },
}));

const NotificationPopup = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Tooltip title="Notifications">
        <IconButton
          sx={{
            mr: 3,
          }}
          onClick={handleClick}
          size="small"
          aria-controls={open ? "notification-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <StyledBadge badgeContent={"d"} variant="dot" color="secondary">
            <ReportProblemIcon color="action" sx={{ color: "white" }} />
          </StyledBadge>
        </IconButton>
      </Tooltip>
      <StyledMenu
        anchorEl={anchorEl}
        id="notification-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemIcon>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inherit" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  noWrap
                >
                  Ali Connors — I'll be in your neighborhood doing errands this
                </Typography>
              </React.Fragment>
            }
          />
        </MenuItem>
        <Divider variant="inset" component="li" />
        <MenuItem>
          <ListItemIcon>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemIcon>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inherit" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  noWrap
                >
                  to Scott, Alex, Jennifer — Wish I could come, but I'm out of
                  town this…
                </Typography>
              </React.Fragment>
            }
          />
        </MenuItem>
        <Divider variant="inset" component="li" />
        <MenuItem>
          <ListItemIcon>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemIcon>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inherit" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  noWrap
                >
                  Sandra Adams — Do you have Paris recommendations? Have you
                  ever…
                </Typography>
              </React.Fragment>
            }
          />
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default NotificationPopup;
