import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const FormPage = () => {
  return (
    <div>
      <Grid item>
        <h2>Register</h2>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item>
          <Link to="SignUpChild" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              I'm a child
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/SignUpParent" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              I'm a parent
            </Button>
          </Link>
        </Grid>
      </Grid>
      <br />
      <Grid>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          Already have an account? Sign in
        </Link>
      </Grid>
    </div>
  );
};

export default FormPage;
