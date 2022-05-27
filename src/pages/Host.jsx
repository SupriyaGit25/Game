import React,{useState,useEffect} from 'react'
import "../App.css"
import {
    makeStyles,
    InputBase,
    Toolbar,
    Paper,
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
    btnadd: {
      right: "5px",
      // height: "30px",
      backgroundColor: "#3598CB",
      fontSize: "14px",
      color: "white",
      "&:hover": {
        backgroundColor: "#3598CB",
      },
    },
    searchInput: {
      opacity: "0.9",
      right: "25px",
      paddingLeft: "10px",
      // width: "20%",
      // padding: "0px 8px",
      justifyContent: "end",
      fontSize: "1.1rem",
      height: "31px",
      // right:"-25px",
      borderRadius: "12px",
      backgroundColor: "white",
      "& .MuiSvgIcon-root": {
        marginRight: "8px",
      },
    },
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
      id: "contactnumber",
      label: "Contact Number",
      maxWidth: "20%",
      fontWeight: "bold",
      backgroundColor: "white",
      color: "#2d3667",
      textAlign: "center",
      zIndex: 0,
    },
    
    {
      id: "userid",
      label: "User ID",
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
      {
        id: "action",
        label: "Action",
        maxWidth: "20%",
        fontWeight: "bold",
        backgroundColor: "white",
        color: "#2d3667",
        textAlign: "center",
        zIndex: 0,
      },
  ];
const Host = () => {
  const [loading, setLoading] = useState(false);
    const [addHost, setAddHost] = useState(false);
    const [search, setSearch] = useState("");
    const classes = useStyle();

    const onAddHost = () => {
        setAddHost(!addHost);
      };
  return (
    <>
    <Paper elevation={3} className="paper" style={{ margin: "auto", padding:"5px" }}>
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
            <div><span>Overview</span>
            <Button onClick={onAddHost} size="small">
          Add Host
        </Button>
            </div>
            <div>
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
            </div>
          </TableHead>
          <TableBody>
            {/* {tech.results && tech.results.length > 0 ? (
              tech.results.map((element, index) => (
                <TableRow key={index}>
                  <td className={classes.fontcolor}>
                    <center>
                      {element.project_name.charAt(0).toUpperCase() +
                        element.project_name.slice(1).toLowerCase()}
                    </center>
                  </td>
                  <td className={classes.fontcolor}>
                    <center>
                      {element.project_manager_name}
                    </center>
                  </td>
                  <td className={classes.fontcolor}>
                    <center>{dateFormat(element.start_date,"d-mmm-yy")}</center>
                  </td>
                  <td className={classes.fontcolor}>
                    <center>{dateFormat(element.end_date,"d-mmm-yy")}</center>
                  </td>
                  <td className={`${classes.action} d-flex `}>
                    <center>
                      {user_permission_list.change_assignment === true ||
                      user_permission_list.delete_assignment === true ? (
                        <>
                          <Button
                            style={{ paddingLeft: "25px" }}
                            className={classes.btnedit}
                            onClick={() => {
                              setEditData({
                                id: element.id,
                                project_name: element.project_name,
                                start_date: element.start_date,
                                end_date: element.end_date,
                                project_manager_name:element.project_manager_name,
                              });
                              onEdit();
                            }}
                          >
                            Edit
                          </Button>
                          <span style={{ color: "#00a8ff" }}>|</span>
                          <Button
                            className={classes.btndelete}
                            onClick={() => {
                              setDeleteData({
                                id: element.id,
                                technology: element.project_name,
                              });
                              onDelete();
                            }}
                          >
                            Delete
                          </Button>
                        </>
                      ) : (
                        ""
                      )}
                    </center>
                  </td>
                </TableRow>
              ))
            ) : (
              <div className={classes.nodata}>
                {" "}
                <p>No Data Found</p>
              </div>
            )} */}
          </TableBody>
        </Table>
      )}
    </Paper>

    {/* <Paper
      elevation={3}
      style={{
        borderRadius: "18px",
        marginTop: "5px",
      }}
    >
      <Row
        className="d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Col sm={3}></Col>
        <Col sm={5}>
          <Pagination
            component="div"
            count={Math.ceil(tech.count / pageSize)}
            page={page}
            onChange={handlePaginations}
            siblingCount={0}
            boundaryCount={2}
          />
        </Col>

        <Col
          sm={4}
          style={{
            paddingTop: "15px",
            paddingRight: "40px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <p className="mr-1">Items per Page:</p>
          <select
            onChange={handlePageSizeChange}
            value={pageSize}
            style={{
              border: "none",
              heigth: "20px",
              alignSelf: "flex-start",
            }}
          >
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </Col>
      </Row>
    </Paper> */}

    {/* {addtask ? (
      <AddProjectMasterModal
        openAdd={addtask}
        addToggle={onAddTask}
        afterAdd={afterAdd}
        setaddreload={setaddreload}
      />
    ) : edittask ? (
      <EditProjectMasterModal
        openEdit={edittask}
        editToggle={onEdit}
        editData={editData}
      />
    ) : deleteTask ? (
      <DeleteProjectMasterModal
        openDelete={deleteTask}
        deletetoggle={onDelete}
        deleteData={deleteData}
      />
    ) : (
      ""
    )} */}
  </>
  )
}

export default Host