import React from "react";

import { ListingRowContainer } from "../containers";
import { Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

const ListingContainer = ({ state }) => {
  const renderSwitchTabTypes = param => {
    switch (param) {
      case "PLAYER":
        return "player";
      case "TEXT_GUITAR_TAB":
        return "guitar";
      case "CHORDS":
        return "chords";
      case "TEXT_BASS_TAB":
        return "bass";
      default:
        return "";
    }
  };

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <Typography>Wykonawca</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Tytuł utworu</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Rodzaj tabulatury</Typography>
          </Grid>
        </Grid>
      </Grid>
      {state.map((item, index) => {
        return (
          <Grid item xs={12} key={index}>
            <ListingRowContainer>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Grid
                    container
                    alignItems={"center"}
                    style={{ height: "100%" }}
                  >
                    <Typography style={{ width: "100%" }}>
                      {item.artist.name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid
                    container
                    alignItems={"center"}
                    style={{ height: "100%" }}
                  >
                    <Typography style={{ width: "100%" }}>
                      {item.title}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid
                    container
                    alignItems={"center"}
                    style={{ height: "100%" }}
                  >
                    <Typography style={{ width: "100%" }}>
                      {item.tabTypes.map(
                        (tabItem, tabIndex) =>
                          renderSwitchTabTypes(tabItem) +
                          (tabIndex !== item.tabTypes.length - 1 ? " | " : "")
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </ListingRowContainer>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListingContainer;
