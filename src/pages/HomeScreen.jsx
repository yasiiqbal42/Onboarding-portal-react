import React from "react";
import Grid from "@mui/material/Grid";
import ProfileCard from "./ProfileCard";
import DocumentCard from "./DocumentCard";

export default function HomeScreen() {
  return (
    <Grid container spacing={3}>
      <ProfileCard />
      <DocumentCard />
    </Grid>
  );
}
