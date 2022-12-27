import * as React from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import { MenuUp } from "mdi-material-ui";
import { Badge, IconButton, Menu, MenuItem, styled } from "@mui/material";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";

const CardStatsVertical = (props) => {
  // ** Props
  const {
    title,
    subtitle,
    stats,
    trend,
    trendNumber,
  } = props;

  const ITEM_HEIGHT = 48;

  const options = ["Notification 1", "Notification 2", "Notification 3"];

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

  return (
    <Card sx={{ height: '100px' }}>
      <CardContent sx={{ height: "100%" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
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
                justifyContent: "space-between",
                mt: 0,
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

          <Box sx={{ mt: 1.5, display: "flex", alignItems: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '1.5rem !important' }}>
              {stats}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color:
                  trend && trend === "positive" ? "success.main" : "error.main",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, fontSize: ".7rem !important" }}
              >
                {subtitle}
              </Typography>
              {trend ? (
                <MenuUp
                  sx={{ fontSize: "1.875rem", verticalAlign: "middle" }}
                />
              ) : null}
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: trend === "positive" ? "success.main" : "error.main",
                }}
              >
                {trendNumber}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardStatsVertical;

CardStatsVertical.defaultProps = {
  color: "primary",
};
