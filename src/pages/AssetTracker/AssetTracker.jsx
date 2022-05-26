import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import "./AssetTracker.css";
import orderFlow from "../../helpers/generateOrderFlow";

export default function AssetTracker({
  statusCode,
  trackingId,
  courierName,
  currentAddressStatus = 0,
}) {
  return currentAddressStatus ? (
    <Box className="card">
      <Box className="tracking" display="flex" sx={{ height: "50%" }}>
        <Typography
          display="inline"
          className="title customFontField"
        >{`Tracking Number-  ${trackingId}`}</Typography>
        <Typography
          display="inline"
          className="title"
        >{`Courier-  ${courierName}`}</Typography>
      </Box>
      <Typography className="progress-track">
        {orderFlow(statusCode)}
      </Typography>
    </Box>
  ) : (
    <Box className="card">
      <Box display="flex" className="tracking">
        <Typography sx={{ ml: 3 }} color="#ef5350" align="center">
          Kindly update the current address!
        </Typography>
        <Button
          sx={{
            color: "white",
            background: "#ef5350",
            borderColor: "#ef5350",
            p: 0,
            pr: 1,
            pl: 1,
            ml: 3,
            fontSize: 12,
          }}
          variant="contained"
          href="/profile"
        >
          Click Here
        </Button>
      </Box>
    </Box>
  );
}
