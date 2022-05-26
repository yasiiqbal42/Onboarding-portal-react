import React from "react";
import Grid from "@mui/material/Grid";
import ProfileCard from "./HomeScreen/ProfileCard";
import DocumentCard from "./HomeScreen/DocumentCard";
import LapTopDeliveryCard from "./HomeScreen/AssetDeliveryCard";

export default function HomeScreen() {
  return (
    <Grid container spacing={3} item xs sx={{display:'flex', justifyContent:'center'}} >
      <ProfileCard />
      <DocumentCard />
      <LapTopDeliveryCard />
    </Grid>
  );
}
