import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/dashboard/actions";
import Typography from "../components/modules/components/Typography";
import { email } from "../components/modules/form/validation";

export default function ProfileCard() {
  const { profile } = useSelector((state) => state.dashboard);
  console.log("Store-Profile", profile);

  //Need to take this id based on login, loggedIn user should have an employee_id or id
  const _id = 1;

  //Will use this post designing
  //   const profileData = profile.find((p) => p.id == _id);
  //   console.log("user profile data", profileData ? profileData.username : null);
  const dispatch = useDispatch();

  const profileData = {
    id: 1,
    password:
      "pbkdf2_sha256$320000$wyISDxxIjaotLh6VHwGa2r$Dpswlnpg7/DkSuokzfBZQw0unET2wGI02LPh5qRNGZs=",
    last_login: "2022-05-24T16:19:58.227540Z",
    is_superuser: true,
    username: "admin",
    first_name: "Yasir",
    last_name: "Iqbal",
    employee_id: "1039642",
    email: "yasiiqbal@deloitte.com",
    phone_number: "7903533184",
    gender: "",
    current_address: "Bhagalpur Bihar",
    permanent_address: "",
    is_staff: true,
    is_active: true,
    date_joined: "2022-05-20T06:01:34.964755Z",
    groups: [],
    user_permissions: [],
    // ------------
    // First name
    // last name
    // employee id
    // phone number
    // email
    // gender
    // current address
    // permanent address
  };

  const isSubmitted =
    profileData.first_name &&
    profileData.last_name &&
    profileData.employee_id &&
    profileData.email &&
    profileData.phone_number &&
    profileData.current_address &&
    profileData.permanent_address
      ? "Submitted"
      : "Not Submitted";

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <Grid item xs={12} md={10} lg={9} onClick={() => dispatch(getProfile())}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Profile
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {"First Name: " +
            (profileData.first_name ? profileData.first_name : "")}
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {"Last Name: " + (profileData.last_name ? profileData.last_name : "")}
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {"Employee ID: " +
            (profileData.employee_id ? profileData.employee_id : "")}
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {"Email: " + (profileData.email ? profileData.email : "")}
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {"Phone Number: " +
            (profileData.phone_number ? profileData.phone_number : "")}
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {"Current Address: " +
            (profileData.current_address ? profileData.current_address : "")}
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {"Permanent Address: " +
            (profileData.permanent_address
              ? profileData.permanent_address
              : "")}
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {isSubmitted}
        </Typography>
      </Paper>
    </Grid>
  );
}
