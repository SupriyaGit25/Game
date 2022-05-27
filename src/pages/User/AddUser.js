import React from 'react';
import { Paper } from "@material-ui/core";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../User/AddUser.css'

const AddUser = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(4),
        },
        '& .MuiInputBase-input': {
            borderRadius: 10,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            border: '1px solid #ced4da',
            fontSize: 15,
            width: '340px',
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
        },
    }));


    return (
        <>
            <div className='Add_User'>
            <Paper elevation={3} className="paper" style={{ margin: "20px 20px", border: "1px solid blue", borderRadius: "25px" }}>
                    <Grid container justify="center" style={{ gap: "20px", marginTop: "50px" }}>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "1.5rem", }}>
                                First Name
                            </InputLabel>
                            <BootstrapInput defaultValue="First Name" id="bootstrap-input" />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "1.5rem", }}>
                                Last Name
                            </InputLabel>
                            <BootstrapInput defaultValue="Last Name" id="bootstrap-input" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" style={{ gap: "20px", marginTop: "30px" }}>
                        {/* <FormControl variant="standard">
            <InputLabel shrink htmlFor="Nick Name" style={{ fontSize: "1.5rem", marginBottom: "10px", marginTop: "10px" }}>
              Nick Name
            </InputLabel>
            <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
          </FormControl> */}
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "1.5rem", }}>
                                Email
                            </InputLabel>
                            <BootstrapInput defaultValue="Email" id="bootstrap-input" />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "1.5rem", }}>
                                Nick Name
                            </InputLabel>
                            <BootstrapInput defaultValue="Nick Name" id="bootstrap-input" />
                        </FormControl>
                    </Grid>
                    <Grid container style={{ margin: "30px 164px", display: "grid" }}>
                        <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "1.5rem", }}>
                            Nick Name
                        </InputLabel>
                        <select className='dropDown'>
                            <option>Shivlal</option>
                            <option>Shivlal</option>
                            <option>Shivlal</option>
                            <option>Shivlal</option>
                        </select>
                    </Grid>
                    <Grid container justify="center" style={{ gap: "20px", marginTop: "30px" }}>
                        <Button variant="contained" style={{ padding: "5px 20px", width: "120px" }}>ADD</Button>
                        <Button variant="contained" style={{ padding: "5px 20px", width: "120px", backgroundColor: "#bdbdbd", color: "white" }}>Cancel</Button>
                    </Grid>
                </Paper>
            </div>



        </>
    )
}

export default AddUser;