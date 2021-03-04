import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { SearchForm, ListingContainer } from "../containers";

const HomePage = () => {
  const [state, setState] = useState(null);
  const [status, setStatus] = useState("");

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchForm setState={setState} setStatus={setStatus} />
        </Grid>
        {status === "" ? (
          state ? (
            state.length > 0 ? (
              <Grid item xs={12}>
                <ListingContainer state={state} />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Typography variant="h3">No results</Typography>
              </Grid>
            )
          ) : null
        ) : (
          <Grid item xs={12}>
            <Typography variant="h3">{status}</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default HomePage;
