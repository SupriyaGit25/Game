import React, { useState, useEffect } from 'react';
import Header from "../../components/Sidebar/Header";

import "../../App.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';




import {
    makeStyles,
    InputBase,
    Toolbar,
    Paper,
    Grid,
    Button,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    CircularProgress,
    Table,
} from "@material-ui/core";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Col,
    Row,
} from "reactstrap";
import Pagination from "@material-ui/lab/Pagination";
import { appBarClasses } from '@mui/material';
const useStyle = makeStyles((theme) => ({
    iconstyle: {
        padding: "1px",
    },
    toolbarStyle: {
        marginBottom: "30px",
    },
    header1: {
        borderRadius: "18px",
        boxShadow: "none",
        overflow: "auto",
    },
    technologypaper: {
        marginTop: "-10px",
        boxShadow: "none",
        borderRadius: "18px",
        height: "570px",
    },
    header1: {
        width: "100%",
        borderRadius: "18px",
        boxShadow: "none",
        overflow: "hidden",
        height: "480px",
        overflow: "auto",
    },
    // btnadd: {
    //     right: "5px",
    //     height: "30px",
    //     backgroundColor: "#3598CB",
    //     fontSize: "14px",
    //     color: "white",
    //     "&:hover": {
    //         backgroundColor: "#3598CB",
    //     },
    // },
    // searchInput: {
    //     opacity: "0.9",
    //     right: "25px",
    //     paddingLeft: "10px",
    //     // width: "20%",
    //     // padding: "0px 8px",
    //     justifyContent: "end",
    //     fontSize: "1.1rem",
    //     height: "31px",
    //     // right:"-25px",
    //     borderRadius: "12px",
    //     backgroundColor: "white",
    //     "& .MuiSvgIcon-root": {
    //         marginRight: "8px",
    //     },
    // },
    head: {
        "&  .MuiTableCell-stickyHeader": {
            backgroundColor: "white",
        },
    },

    container: {
        overflow: "Scroll",
    },
    LinkStyle: {
        color: "black !important",
        "&:hover": {
            textDecoration: "none",
        },
    },
    tablename: {
        margin: "-8px",
    },
    fontcolor: {
        color: "#2d3667",
        padding: "5px",
        height: "30px",
        borderBottom: "1px solid rgb(224 224 224)",
    },

    loading: {
        position: "absolute",
        top: "50%",
        left: "50%",
    },
    nodata: {
        position: "absolute",
        marginTop: 165,
        marginLeft: 420,
    },
    action: {
        color: "#2d3667",
        // paddingTop: "20px",
        textAlign: "center",
        borderBottom: "1px solid rgb(224 224 224)",
    },
    btnedit: {
        color: "#00a8ff",
        // marginRight: "10px",
        // borderRight : "1px solid ",
        // borderRadiusRight: "0"
    },
    btndelete: {
        color: "#00a8ff",
        // borderLeft : "1px solid "
    },
}));
const columns = [
    {
        id: "name",
        label: "Name",
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "white",
        color: "#2d3667",
        zIndex: 0,
        maxWidth: "20%",
    },
    {
        id: "nickname",
        label: "Nick Name ",
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "white",
        color: "#2d3667",
        zIndex: 0,
        maxWidth: "20%",
    },
    {
        id: "email",
        label: "Email",
        maxWidth: "20%",
        fontWeight: "bold",
        backgroundColor: "white",
        color: "#2d3667",
        textAlign: "center",
        zIndex: 0,
    },
    {
        id: "status",
        label: "Status",
        maxWidth: "20%",
        fontWeight: "bold",
        backgroundColor: "white",
        color: "#2d3667",
        textAlign: "center",
        zIndex: 0,
    },
];
const User = () => {
    const [loading, setLoading] = useState(false);
    const classes = useStyle();

    //Switch
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    //Switch


    // Sample

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    // Sample


    return (
        <>
            <Header />
            <div className='User_Screen' >
                <Paper elevation={3} className="paper" style={{ marginTop: "10px", border: "1px solid blue", borderRadius: "25px" }}>
                    <div className="head1">
                        <div className="row" style={{ margin: "20px 30px" }}>
                            <h3 className="col">
                                <strong>Overview</strong>
                            </h3>
                            <Grid container justify="flex-end">
                                <Button style={{ borderRadius: "30px", backgroundColor: "#2979ff", color: "white" }} variant="contained"  >
                                    <Link to="/master/user/adduser">
                                    Add User
                                    </Link>
                                </Button>

                            </Grid>

                        </div>
                    </div>
                    {loading ? (
                        <div className={classes.loading}>
                            <CircularProgress />{" "}
                        </div>
                    ) : (
                        <Table
                            stickyHeader
                            aria-label="sticky table"
                            className={classes.head}
                            
                        >
                            <TableHead>
                                {columns.map((column) => (
                                    <TableCell
                                        className={classes.root}
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            maxWidth: column.maxWidth,
                                            fontWeight: column.fontWeight,
                                            backgroundColor: column.backgroundColor,
                                            color: column.color,
                                            zIndex: column.zIndex,
                                            textAlign: "center",
                                            width: "25%",
                                            
                                        }}
                                    >
                                        <center>{column.label}</center>
                                    </TableCell>
                                ))}
                                <TableCell
                                    style={{
                                        fontWeight: "bold",
                                        width: "25%",
                                        backgroundColor: "white",
                                        color: "#2d3667",
                                    }}
                                >
                                    <b style={{ paddingRight: "90px" }}>Action</b>
                                </TableCell>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        
                                    >
                                        <TableCell scope="row" style={{

                                            width: "25%",
                                            backgroundColor: "white",
                                            color: "#2d3667",

                                        }}>
                                            <center>{row.name}</center>
                                        </TableCell>
                                        <TableCell  scope="row" style={{
                                            width: "25%",
                                            backgroundColor: "white",
                                            color: "#2d3667",

                                        }}>
                                            <center>{row.calories}</center>
                                        </TableCell>
                                        <TableCell  scope="row" style={{
                                            width: "25%",
                                            
                                            backgroundColor: "white",
                                            color: "#2d3667",

                                        }}>
                                            <center>{row.fat}</center>
                                        </TableCell>
                                        <TableCell  scope="row" style={{
                                            width: "25%",
                                            backgroundColor: "white",
                                            color: "#2d3667",

                                        }}>
                                            <center>
                                                <Switch {...label} defaultChecked color="success" />
                                            </center>
                                        </TableCell>
                                        <TableCell  scope="row" style={{
                                            width: "30%",
                                            backgroundColor: "white",
                                            color: "#2d3667",

                                        }}>
                                            <center>
                                                {
                                                    <div className='Main_Icon' style={{ display: "flex", gap: "12px", cursor: "pointer" }}>
                                                        <div className='bnt1'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="23.031" height="23.062" viewBox="0 0 31.031 31.062">
                                                                <g id="Group_269" data-name="Group 269" transform="translate(-1177.471 -568)">
                                                                    <path id="Path_97" data-name="Path 97" d="M108.917,93.249a2.2,2.2,0,0,1-2.223,2.191H89.1a2.2,2.2,0,0,1-2.223-2.191V75.593A2.219,2.219,0,0,1,89.1,73.4h8.992l2.845-2.845H89.1A5.073,5.073,0,0,0,84,75.593V93.249a5.079,5.079,0,0,0,5.1,5.068h17.624a5.079,5.079,0,0,0,5.1-5.068V81.38l-2.845,2.845v9.024Z" transform="translate(1093.469 500.745)" fill="#431cc4" />
                                                                    <path id="Path_98" data-name="Path 98" d="M236.692,18.643,232.7,14.687A2.311,2.311,0,0,0,231.1,14a2.223,2.223,0,0,0-1.6.654L214.785,29.368a2.261,2.261,0,0,0-.654,1.471l-.262,4.218a2.337,2.337,0,0,0,.654,1.766,2.277,2.277,0,0,0,1.6.654h.131l4.251-.261a2.261,2.261,0,0,0,1.471-.654L236.659,21.88a2.277,2.277,0,0,0,.654-1.6,2.143,2.143,0,0,0-.621-1.635ZM227.308,20.9l3.172,3.172-7.357,7.324-3.172-3.172Zm-7.193,13.5-3.368.2.2-3.368.948-.948,3.172,3.172Zm12.359-12.392-3.139-3.139,1.766-1.766,3.172,3.172Z" transform="translate(971.187 554)" fill="#431cc4" />
                                                                </g>
                                                            </svg>
                                                        </div>

                                                        <div className='bnt2'>
                                                            <CancelIcon style={{ color: "red" }} />
                                                        </div>
                                                    </div>

                                                }
                                            </center>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                    {/* <div className='Pagination_Main' style={{ justifyContent: "space-between" }}>
                    <Stack spacing={2}>
                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </Stack>
                </div> */}
                </Paper>
            </div>

        </>
    )
}

export default User;