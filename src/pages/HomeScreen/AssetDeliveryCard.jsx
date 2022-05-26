import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "../../components/modules/components/Typography";
import AssetTracker from "../AssetTracker/AssetTracker";
import { Alert } from "@mui/material";
import { green } from "@mui/material/colors";

export default function AssetDeliveryCard() {
  // Need to send the status code to assetTracker as
  // 1: Packed, 2: Shipped, 3: In Out for Delivery, 4: Delivered/Received
  const laptopDeliveryStatusCode = 4;
  const kitDeliveryStatusCode = 1;
  // Need Tracking Id from API
  const laptopTrackingId = "109861D";
  const kitTrackingId = "906783C";
  //Need Courier Name from API
  const laptopCourierName = "Blue Dart";
  const kitCourierName = "DHL";
  //Will take current address of the user from store
  const currentAddress = "Mojahidpur West, Bhagalpur, Bihar, 812002";
  // const currentAddress = "";
  return (
    <Grid
      item
      xs="auto"
      display="flex"
      justifyContent="space-between"
      md={10}
      lg={12}
      // onClick={() => dispatch(getDocument(userId))}
    >
      <Paper
        style={{ cursor: "pointer" }}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 280,
          width: "48%",
          boxShadow: "none",
        }}
      >
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, pt: 1 }}
          align="center"
        >
          <span className="customFontHeading">LAPTOP DELIVERY STATUS</span>
        </Typography>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          noWrap
          display="flex"
          sx={{ flexGrow: 1, pt: 1, ml: 3 }}
          align="left"
        >
          <span className="currentAddress">Current Address</span>
          <span>
            {currentAddress ? (
              <Alert
                sx={{
                  width: 150,
                  height: 50,
                  ml: 4,
                  mt: 0,
                  mb: 1,
                  color: "green",
                  border: "none",
                }}
                variant="outlined"
                severity="success"
              >
                Updated
              </Alert>
            ) : (
              <Alert
                sx={{
                  width: 150,
                  height: 50,
                  ml: 4,
                  mt: 0,
                  mb: 1,
                  color: "#ef5350",
                  border: "none",
                }}
                variant="outlined"
                severity="error"
              >
                Incomplete
              </Alert>
            )}
          </span>
        </Typography>

        <AssetTracker
          statusCode={laptopDeliveryStatusCode}
          trackingId={laptopTrackingId}
          courierName={laptopCourierName}
          currentAddressStatus={currentAddress}
        />
      </Paper>
      <Paper
        style={{ cursor: "pointer" }}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 280,
          width: "48%",
          boxShadow: "none",
        }}
      >
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, pt: 1 }}
          align="center"
        >
          <span className="customFontHeading">KIT DELIVERY STATUS</span>
        </Typography>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          noWrap
          display="flex"
          sx={{ flexGrow: 1, pt: 1, ml: 3 }}
          align="left"
        >
          <span className="currentAddress">Current Address</span>
          <span>
            {currentAddress ? (
              <Alert
                sx={{
                  width: 150,
                  height: 50,
                  ml: 4,
                  mt: 0,
                  mb: 1,
                  color: "green",
                  border: "none",
                }}
                variant="outlined"
                severity="success"
              >
                Updated
              </Alert>
            ) : (
              <Alert
                sx={{
                  width: 150,
                  height: 50,
                  ml: 4,
                  mt: 0,
                  mb: 1,
                  color: "#ef5350",
                  border: "none",
                }}
                variant="outlined"
                severity="error"
              >
                Incomplete
              </Alert>
            )}
          </span>
        </Typography>
        <AssetTracker
          statusCode={kitDeliveryStatusCode}
          trackingId={kitTrackingId}
          courierName={kitCourierName}
          currentAddressStatus={currentAddress}
        />
      </Paper>
    </Grid>
  );
}
