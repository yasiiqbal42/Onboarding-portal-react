import React, { useEffect } from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/dashboard/actions";
// import Typography from "../components/modules/components/Typography";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import CheckIcon from "@mui/icons-material/Check";
import { yellow } from "@mui/material/colors";

export default function ProfileCard() {
  const { profile, address } = useSelector((state) => state.dashboard);
  console.log("Store-Profile", profile);

  //Need to take this id based on login, loggedIn user should have an employee_id or id
  const _id = 1;

  //Will use this post designing
  //   const profileData = profile.find((p) => p.id == _id);
  //   console.log("user profile data", profileData ? profileData.username : null);
  const dispatch = useDispatch();

  const profileData = {
    first_name: "Yasir",
    last_name: "",
    employee_id: "1039642",
    email: "yasiiqbal@deloitte.com",
    phone_number: "8998",
    gender: "dsd",
    current_address:
      "Mojahidpur Lane, Mojahidpur West, Bhagalpur, Bihar, 812002",
    permanent_address:
      "Mojahidpur Lane, Mojahidpur West, Bhagalpur, Bihar, 812002",
  };

  const isSubmitted = () => {
    return profileData.first_name &&
      profileData.last_name &&
      profileData.employee_id &&
      profileData.email &&
      profileData.phone_number &&
      profileData.current_address &&
      profileData.permanent_address ? (
      <CheckIcon style={{ color: "green", fontSize: "30px" }} />
    ) : (
      <ErrorIcon style={{ color: "red", fontSize: "30px" }} />
    );
  };

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const handleClick = () => {
    () => dispatch(getProfile());
    // () => dispatch(getProfileAddress());
  };

  return (
    <Grid
      style={{ cursor: "pointer" }}
      item
      xs="auto"
      md={10}
      lg={12}
      onClick={handleClick}
    >
      <Paper sx={{ boxShadow: "none" }}>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          display="flex"
          justifyContent="space-between"
          noWrap
          sx={{ flexGrow: 1, pt: 1 }}
          align="center "
        >
          <span style={{ marginLeft: 525 }} className="customFontHeading">
            PROFILE
          </span>
          <Typography sx={{ mr: 2 }} align="center">
            {isSubmitted()}
          </Typography>
        </Typography>

        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            height: 150,
            boxShadow: "none",
          }}
        >
          <Box
            sx={{
              paddingLeft: "2%",
              height: "100%",
              width: "40%",
              borderRight: 2,
              borderColor: "#4f678c",
            }}
          >
            <Typography
              variant="body1"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <span className="customFontField">First Name:&nbsp;&nbsp;</span>
              <span className="customFontFieldValue">
                {profileData.first_name ? (
                  profileData.first_name
                ) : (
                  <WarningIcon
                    align="center"
                    sx={{ color: yellow[600], fontSize: 20 }}
                  />
                )}
              </span>
            </Typography>
            <Typography
              display="block"
              variant="body1"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {" "}
              <span className="customFontField">Last Name:&nbsp;&nbsp;</span>
              <span className="customFontFieldValue">
                {profileData.last_name ? (
                  profileData.last_name
                ) : (
                  <WarningIcon
                    align="center"
                    sx={{ color: yellow[600], fontSize: 20 }}
                  />
                )}
              </span>
            </Typography>
            <Typography
              display="block"
              variant="body1"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <span className="customFontField">Employee Id:&nbsp;&nbsp;</span>
              <span className="customFontFieldValue">
                {profileData.employee_id ? (
                  profileData.employee_id
                ) : (
                  <WarningIcon
                    align="center"
                    sx={{ color: yellow[600], fontSize: 20 }}
                  />
                )}
              </span>
            </Typography>
            <Typography
              display="block"
              variant="body1"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <span className="customFontField">Email:&nbsp;&nbsp;</span>
              <span className="customFontFieldValue">
                {profileData.email ? (
                  profileData.email
                ) : (
                  <WarningIcon
                    align="center"
                    sx={{ color: yellow[600], fontSize: 20 }}
                  />
                )}
              </span>
            </Typography>
            <Typography
              display="block"
              variant="body1"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <span className="customFontField">Phone Number:&nbsp;&nbsp;</span>
              <span className="customFontFieldValue">
                {profileData.phone_number ? (
                  profileData.phone_number
                ) : (
                  <WarningIcon
                    align="center"
                    sx={{ color: yellow[600], fontSize: 20 }}
                  />
                )}
              </span>
            </Typography>
          </Box>
          <Box
            noWrap
            sx={{
              paddingLeft: "2%",
              height: "100%",
              width: "50%",

              //   borderLeft: 1,
            }}
          >
            <Typography
              display="block"
              variant="body1"
              color="inherit"
              style={{ wordWrap: "break-word" }}
              sx={{ flexGrow: 1 }}
            >
              <span className="customFontField">
                Correspondence Address:&nbsp;&nbsp;
              </span>
              <span className="customFontFieldValue">
                {profileData.current_address ? (
                  profileData.current_address
                ) : (
                  <WarningIcon
                    align="center"
                    sx={{ color: yellow[600], fontSize: 20 }}
                  />
                )}
              </span>
            </Typography>
            <Typography
              display="block"
              variant="body1"
              color="inherit"
              style={{ wordWrap: "break-word" }}
              sx={{ flexGrow: 1 }}
            >
              <span className="customFontField">
                Permanent Address: &nbsp;&nbsp;
              </span>
              <span className="customFontFieldValue">
                {profileData.permanent_address ? (
                  profileData.permanent_address
                ) : (
                  <WarningIcon
                    align="center"
                    sx={{ color: yellow[600], fontSize: 20 }}
                  />
                )}
              </span>
            </Typography>
          </Box>
          {/* <Box
            sx={{
              paddingLeft: "2%",
              height: "100%",
              width: "20%",
              //   borderLeft: 1,
            }}
          >
            <Typography
              display="block"
              variant="body1"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {isSubmitted()}
            </Typography>
          </Box> */}
        </Paper>
      </Paper>
    </Grid>
  );
}
