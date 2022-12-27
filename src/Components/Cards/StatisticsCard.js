import * as React from "react";
// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import {
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";


const ITEM_HEIGHT = 48;

const options = ["Notification 1", "Notification 2", "Notification 3"];

const StatisticsCard = ({ title, barData }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 3,
      top: 16,
      border: `1px solid ${theme.palette.background.paper}`,
      background: `${theme.palette.error.light}`,
      // padding: "0 4px",
    },
  }));

  const salesData = [
    {
      stats: barData[0],
      color: "success",
      title: "high",
    },
    {
      stats: barData[1],
      color: "warning",
      title: "medium",
    },
    {
      stats: barData[2],
      color: "error",
      title: "Low",
    },
  ];

  const renderStats = () => {
    return salesData.map((item, index) => (
      <Box
        key={index}
        sx={{
          mr: index === salesData.length - 1 ? 0 : 2,
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 20,
            height: 20,
            boxShadow: 3,
            color: "common.white",
            backgroundColor: `${item.color}.main`,
            fontSize: ".7rem",
            mx: "auto",
          }}
        >
          {item.stats}
        </Avatar>
        <Typography
          component="span"
          sx={{
            fontWeight: 500,
            color: `${item.color}.main`,
            fontSize: ".9rem",
          }}
        >
          {item.title}
        </Typography>
      </Box>
    ));
  };

  return (
    <Card sx={{ height: "100px" }}>
      <CardContent sx={{ height: "100%" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box
              sx={{
                marginTop: 1,
                flexWrap: "wrap",
                alignItems: "flex-start",
                flexDirection: "column",
                mt: 0,
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  fontSize: ".8rem !important",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
                title={title}
              >
                {title}
              </Typography>              
            </Box>
            <Box>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ m: 0, p: 0 }}
              >
                <StyledBadge
                  // badgeContent={Math.floor(Math.random() * (10 - 1 + 1)) + 1}
                  variant="dot"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  color="error"
                >
                  <NotificationImportantIcon fontSize={"20px"} />
                </StyledBadge>
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
          <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  mt: 1,
                }}
              >
                {renderStats()}
              </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
