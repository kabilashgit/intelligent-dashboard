import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import CardStatsVertical from "../Components/Cards/CardStatsVertical";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import FilterGroups from "../Components/FilterGroups";
import CustomWorldMap from "../Components/CustomWorldMap";
import CustomTable from "../Components/CustomTable";
import Typography from "@mui/material/Typography";
import { SimplePieChart } from "../Components/SimplePieChart";
import { randomGen } from "../HelperUtils";
import { dropDownData, tableData } from "./assetMgmtData";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   color: theme.palette.text.secondary,
// }));

const AssetManagement = () => {
  const [val, setVal] = React.useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} sx={{ mb: 1 }}>
          <FilterGroups dropDownData={dropDownData} />
        </Grid>
        <Divider sx={{ mb: 1 }} />
        <Grid container rowSpacing={1} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              color="success"
              title="ASSETS"
              stats="40.56K"
              // trendNumber="4.1%"
              // trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              color="success"
              title="HEALTH (%) AVERAGE"
              stats="0.72%"
              // trendNumber="4.1%"
              // trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="primary"
              title="HEALTH MAX(%)"
              stats="45.23 %"
              // trendNumber="10%"
              // trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="warning"
              title="CRITICALITY (AUD)"
              stats="1546.87"
              // trendNumber="10%"
              // trend="positive"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ width: "100%", p: 1 }}>
              <CustomWorldMap />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTable tableData={tableData} />
          </Grid>
        </Grid>
        <Divider sx={{ mb: 1 }} />
        <Grid
          container
          rowSpacing={1}
          spacing={2}
          sx={{ minHeight: "20vh", mb: "0 !important" }}
        >
          <Grid item xs={12} sx={{ mb: "0 !important" }}>
            <Paper sx={{ p: 1 }}>
              <Grid
                container
                rowSpacing={1}
                spacing={[0, 4]}
                sx={{ mb: 0 }}
                alignItems={"center"}
              >
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1rem !important",
                      textAlign: "left",
                      color: "primary.main",
                      ml: 1,
                    }}
                  >
                    ASSET AT RISK
                  </Typography>
                  <FormControl
                    sx={{ m: 1, width: "100%", maxWidth: 300, mt: 3 }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small">Assets by</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={val}
                      label="Inventery Type"
                      onChange={handleChange}
                      selected={"HEALTH"}
                    >
                      <MenuItem value={"HEALTH"}>HEALTH</MenuItem>
                      <MenuItem value={"CRITICALITY"}>CRITICALITY</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      p: 1,
                      fontSize: ".9rem !important",
                    }}
                  >
                    NUMBER OF ASSETS BY -{" "}
                    <Typography
                      component={"span"}
                      sx={(theme) => ({
                        fontWeight: 600,
                        color: theme.palette.primary.dark,
                      })}
                    >
                      {randomGen(1000, 2000)}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <SimplePieChart />
                  <Typography
                    component={"div"}
                    sx={{
                      fontWeight: 600,
                      textAlign: "center",
                      pt: "5px",
                      fontSize: ".8rem",
                    }}
                  >
                    {val === "" ? "HEALTH" : val.toUpperCase()}
                  </Typography>
                </Grid>
                {/* <Grid item xs={12} md={3}>
                  <SimplePieChart />
                  <Typography
                    component={"div"}
                    sx={{
                      fontWeight: 600,
                      textAlign: "center",
                      pt: "5px",
                      fontSize: ".8rem",
                    }}
                  >
                    CYCLE TIME
                  </Typography>
                </Grid> */}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AssetManagement;
