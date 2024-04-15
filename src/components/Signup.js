import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const Signup = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "cyan",
        height: "600px",
      }}
    >
      <Container>
        <Typography variant="h4" color="primary" style={{ padding: "10px" }}>
          Sign up
        </Typography>

        <div style={{ padding: "20px 0 20px 0" }}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <TextField
                id="filled-basic"
                label="Email"
                variant="outlined"
                size="small"
                style={{ width: "500px" }}
              />
            </Grid>

            <Grid item>
              <TextField
                id="filled-basic"
                label="Password"
                variant="outlined"
                size="small"
                style={{ width: "500px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-basic"
                label="Confirm Password"
                variant="outlined"
                size="small"
                style={{ width: "500px" }}
              />
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                style={{ width: "500px" }}
              >
                SignUp
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="secondary">
                Already have an account ? Log In
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
