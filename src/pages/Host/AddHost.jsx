import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function AddUser() {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(4),
    },
    "& .MuiInputBase-input": {
      borderRadius: 10,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      border: "1px solid #ced4da",
      fontSize: 15,
      width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  return (
    <div>
      <div className="Add_User">
        <Button
          style={{ borderRadius: "30px" }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Add Host
        </Button>
        <Dialog open={open} onClose={handleClose}>
          {/* <DialogTitle>Add Users</DialogTitle> */}
          <DialogContent style={{ padding: "80px", overflowY: "hidden" }}>
            <DialogContentText></DialogContentText>
            <Grid container style={{ gap: "20px" }}>
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{ fontSize: "1.5rem" }}
                >
                  First Name
                </InputLabel>
                <BootstrapInput placeholder="First Name" id="bootstrap-input" />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{ fontSize: "1.5rem" }}
                >
                  Last Name
                </InputLabel>
                <BootstrapInput placeholder="Last Name" id="bootstrap-input" />
              </FormControl>
            </Grid>
            <Grid container style={{ gap: "20px", marginTop: "50px" }}>
              {/* <FormControl variant="standard">
            <InputLabel shrink htmlFor="Nick Name" style={{ fontSize: "1.5rem", marginBottom: "10px", marginTop: "10px" }}>
              Nick Name
            </InputLabel>
            <BootstrapInput trap" id="bootstrap-input" />
          </FormControl> */}
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{ fontSize: "1.5rem" }}
                >
                  User ID
                </InputLabel>
                <BootstrapInput placeholder="User ID" id="bootstrap-input" />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{ fontSize: "1.5rem" }}
                >
                  Contact Number
                </InputLabel>
                <BootstrapInput
                  placeholder="Contact Number"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
            <Grid container style={{ gap: "20px", marginTop: "50px" }}>
              <FormControl variant="standard">
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{ fontSize: "1.5rem" }}
                >
                  Email ID
                </InputLabel>
                <BootstrapInput id="bootstrap-input" />
              </FormControl>

              <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{ fontSize: "1.5rem" }}
                >
                  Host
                </InputLabel>
                <Select
                
                  autoWidth="true"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Host"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </DialogContent>
          <DialogActions style={{ marginBottom: "180px" }}>
            <Grid container justify="center" style={{ gap: "20px" }}>
              <Button
                variant="contained"
                style={{ padding: "5px 20px" }}
                onClick={handleClose}
              >
                ADD
              </Button>
              <Button
                variant="outlined"
                style={{ padding: "5px 20px" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default AddUser;
