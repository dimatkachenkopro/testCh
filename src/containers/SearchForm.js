import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const SearchForm = ({ setState, setStatus }) => {
  const [search, setSearch] = useState("");
  const [inst, setInst] = useState("");

  const handleChangeSearch = event => {
    setSearch(event.target.value);
  };

  const handleChange = event => {
    setInst(event.target.value);
  };

  const filterResult = result => {
    inst === ""
      ? setState(result)
      : setState(
          result.filter(item => {
            return item.tabTypes.indexOf(inst) >= 0;
          })
        );
  };

  const searchItems = () => {
    setStatus("Loading...");
    axios
      .get(`http://www.songsterr.com/a/ra/songs.json?pattern=${search}`)
      .then(response => {
        setStatus("");
        filterResult(response.data);
      })
      .catch(() => {
        setStatus("Error!");
      });
  };

  return (
    <Grid
      container
      style={{ marginTop: "100px", marginBottom: "10px" }}
      alignItems="flex-end"
      justify="center"
      spacing={2}
    >
      <Grid item xs={12} sm={8} lg={4}>
        <TextField
          style={{ width: "100%" }}
          id="standard-basic"
          label="Search"
          value={search}
          onChange={handleChangeSearch}
        />
      </Grid>
      <Grid item xs={12} sm={2} lg={1}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inst}
            onChange={handleChange}
            style={{ width: "100px" }}
          >
            <MenuItem value={""}>All types</MenuItem>
            <MenuItem value={"PLAYER"}>Player</MenuItem>
            <MenuItem value={"TEXT_GUITAR_TAB"}>Guitar</MenuItem>
            <MenuItem value={"CHORDS"}>Chords</MenuItem>
            <MenuItem value={"TEXT_BASS_TAB"}>Bass</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => searchItems()}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
