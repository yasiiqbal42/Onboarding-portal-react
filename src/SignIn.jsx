import React, { useEffect } from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "./components/modules/components/Typography";
import AppAppBar from "./components/modules/views/AppAppBar";
import AppForm from "./components/modules/views/AppForm";
import { email, required } from "./components/modules/form/validation";
import RFTextField from "./components/modules/form/RFTextField";
import FormButton from "./components/modules/form/FormButton";
import FormFeedback from "./components/modules/form/FormFeedback";
import withRoot from "./components/modules/withRoot";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/dashboard/actions";
import { useNavigate,Navigate } from "react-router-dom";
import { Password } from "@mui/icons-material";

function SignIn() {
  const [sent, setSent] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloggedIn, accessToken } = useSelector((state) => state.dashboard);
  console.log("Store ---", "Login Data - ", "isLoggedIn - ", isloggedIn);

  const validate = (values) => {
    const errors = required(["email", "password"], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };
  // useEffect(() => {
  //   if (accessToken) {
  //     navigate("/dashboard");
  //   }
  // }, []);


  const handleSubmit = (e) => {
    e.username = e.email;
    delete e.email;
    console.log('from Signin',e)
    dispatch(login(e));
    setSent(true);
  };

  return (
    accessToken?
    <Navigate to ="/dashboard"></Navigate>:
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          {/* <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              href="/onboarding/sign-up/" 
              align="center"
              underline="always"
            >
              Sign Up here
            </Link>
          </Typography> */}
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 6 }}
            >
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
                // onClick={()=>navigate("/about")}
              >
                {submitting || sent ? "Logging…" : "Sign In"}
              </FormButton>
            </Box>
          )}
        </Form>
        {/* <Typography align="center">
          <Link underline="always" href="/premium-themes/onepirate/forgot-password/">
            Forgot password?
          </Link>
        </Typography> */}
      </AppForm>
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default withRoot(SignIn);
