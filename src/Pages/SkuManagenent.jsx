import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import CardStatsVertical from "../Components/Cards/CardStatsVertical";
import StatisticsCard from "../Components/Cards/StatisticsCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import FilterGroups from "../Components/FilterGroups";
import CustomTable from "../Components/CustomTable";
import Typography from "@mui/material/Typography";
import { SimplePieChart } from "../Components/SimplePieChart";
import { randomGen } from "../HelperUtils";
import SimpleMixedBarChart from "../Components/Charts/SimpleMixedBarChart";
import { dropDownData, tableData } from "./skuMgmtData";

const SkuManagenent = () => {
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
              title="Total SKU's"
              stats="$1214K"
              trendNumber="2%"
              trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <StatisticsCard
              title={"SKU's SCRAPPED (%)"}
              barData={[60, 30, 10]}
              notification={[
                "<strong>3 Seater Auto is unprofitable: </strong><br>Less margin due to cost of imported Glass used. Contact local vendor for similar quality Glass tops.",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="primary"
              title="UNPROFITABLE SKU's"
              stats="250"
              // trendNumber="10%"
              // trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="warning"
              title="OVERFORCASTED SKU's"
              stats="243"
              notification={[
                "<strong>Sheet Higly Scrapped: </strong><br>The entire sheet is used every single time , the cut parts are not utilised, optimse the design.",
              ]}
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
              <SimpleMixedBarChart chartTitle={""} />
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
                    INVENTORY AT RISK
                  </Typography>
                  <FormControl
                    sx={{ m: 1, width: "100%", maxWidth: 300, mt: 3 }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small">
                      Inventory Type
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={val}
                      label="Inventory Type"
                      onChange={handleChange}
                      selected={"Product category"}
                    >
                      <MenuItem value={'Product category'}>Product category</MenuItem>
                      <MenuItem value={'Inventory category'}>Inventory category</MenuItem>
                      <MenuItem value={'Wasteful'}>Wasteful</MenuItem>
                      <MenuItem value={'SKU Performance'}>SKU Performance</MenuItem>
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
                    NUMBER OF INVENTORY -{" "}
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
                    {val === '' ? "PRODUCT CATEGORY" : val.toUpperCase()}
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
                    INVENTORY TYPE WISE
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

export default SkuManagenent;
