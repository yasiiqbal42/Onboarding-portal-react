import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Document() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={10} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          DOCUMENTS
        </Paper>
      </Grid>
    </Grid>
  );
}
