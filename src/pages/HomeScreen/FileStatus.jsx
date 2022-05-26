import React from "react";
import { Alert } from "@mui/material";
import Typography from "../../components/modules/components/Typography";

export default function FileStatus({ fileStatus, fileName }) {
  return (
    <Typography
      component="h2"
      variant="h6"
      color="inherit"
      noWrap
      display="flex"
      sx={{ flexGrow: 1, pt: 1, ml: 3 }}
      align="left"
    >
      <span className="currentAddress">{fileName}</span>
      <span>
        {fileStatus ? (
          <Alert
            sx={{
              width: 150,
              height: 50,
            //   ml: 4,
              mt: 0,
              mb: 1,
              color: "green",
              border: "none",
            }}
            variant="outlined"
            severity="success"
          >
            {/* Uploaded */}
          </Alert>
        ) : (
          <Alert
            sx={{
              width: 150,
              height: 50,
            //   ml: 4,
              mt: 0,
              mb: 1,
              color: "#ef5350",
              border: "none",
            }}
            variant="outlined"
            severity="error"
          >
            {/* Incomplete */}
          </Alert>
        )}
      </span>
    </Typography>
  );
}
