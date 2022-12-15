// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import DotsVertical from "mdi-material-ui/DotsVertical";

const salesData = [
  {
    stats: "60",
    color: "success",
    title: "high",
  },
  {
    stats: "30",
    color: "warning",
    title: "medium",
  },
  {
    stats: "10",
    color: "error",
    title: "Low",
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={4} key={index}>
      <Box
        key={index}
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 30,
            height: 30,
            boxShadow: 3,
            color: "common.white",
            backgroundColor: `${item.color}.main`,
            fontSize: "1rem",
          }}
        >
          {item.stats}
        </Avatar>
        <Typography
          component="span"
          sx={{ fontWeight: 500, color: `${item.color}.main` }}
        >
          {item.title}
        </Typography>
      </Box>
    </Grid>
  ));
};

const StatisticsCard = ({ cardHeight = "214px" }) => {
  return (
    <Card sx={{ minHeight: cardHeight, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <CardHeader
        title="SUPPLIER PERFROMANCE"
        action={
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Total 48.5% growth 😎 this month
            </Box>
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 1,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent
        sx={{
          pt: (theme) => `${theme.spacing(0)} !important`,
          pb: "0 !important",
        }}
      >
        <Grid container spacing={2}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
