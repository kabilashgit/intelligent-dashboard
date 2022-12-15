// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import DotsVertical from "mdi-material-ui/DotsVertical";
import { MenuUp } from "mdi-material-ui";

const CardStatsVertical = (props) => {
  // ** Props
  const {
    title,
    subtitle,
    color,
    icon,
    stats,
    trend,
    trendNumber,
    cardHeight = "214px",
  } = props;

  return (
    <Card sx={{ height: cardHeight }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            marginBottom: 5.5,
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            sx={{
              boxShadow: 3,
              marginRight: 4,
              color: "common.white",
              backgroundColor: `${color}.main`,
            }}
          >
            {icon}
          </Avatar>
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical />
          </IconButton>
        </Box>
        <Typography
          component="span"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            marginTop: 1.5,
            display: "flex",
            flexWrap: "wrap",
            marginBottom: 1.5,
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, fontSize: "2.125rem !important" }}
          >
            {stats}
          </Typography>

          <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, fontSize: "2.125rem !important" }}
            >
              {subtitle}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: trend && trend === "positive" ? "success.main" : "error.main",
              }}
            >
              {trend ? <MenuUp sx={{ fontSize: "1.875rem", verticalAlign: "middle" }} /> : null}
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
