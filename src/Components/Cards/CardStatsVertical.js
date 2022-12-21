// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
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
    cardHeight = "15vh",
  } = props;

  return (
    <Card sx={{ height: cardHeight }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            marginBottom: 3,
            alignItems: "flex-start",
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
          
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              flexDirection: "column",
              mt: 0
            }}
          >
            <Typography
            component="span"
            sx={{ fontWeight: 600, color: "text.primary", fontSize: '.8rem !important' }}
          >
            {title}
          </Typography>
            
              
            <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
              
              
                <Typography
                variant="h4"
                sx={{ fontWeight: 600, fontSize: ".9rem !important" }}
              >
                {stats}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color:
                    trend && trend === "positive"
                      ? "success.main"
                      : "error.main",
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardStatsVertical;

CardStatsVertical.defaultProps = {
  color: "primary",
};
