/*import {Box,Typography, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {mockData} from"../../data/mockData";
import  AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import  LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import  SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { tokens } from "../theme";


const EmpMD =()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns =[
        { field: "id", headerName:"ID" },
        { field:"Emp_name", headerName:"Employee Name", flex:1, cellClassName:"name--column-cell"},
        { field:"DOB", headerName:"DOB", flex:1},
        { field:"Gender", headerName:"Gender", flex:1},
        { field:"email", headerName:"Email", flex:1},
        { field:"phone", headerName:"Contact#", flex:1},
        { field:"Employement_Type", headerName:"Employement Type", flex:1},
        { field:"Department", headerName:"Department", flex:1},
        { field:"DOJ", headerName:"DOJ", flex:1},
        { field:"Salary", headerName:"Salary", flex:1},
        { field:"access", headerName:"Access Level", flex:1, renderCell: ({ row: { access } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  access === "admin" ? 
                  colors.greenAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {access}
                </Typography>
              </Box>);
    }   }    ];
    return(
        <Box m="20px">
            
        <Header title ="EMPLOYEE MASTERDATA" subtitle={"Manage Employee MasterData"}/>
        <Box m="40 px 0 0 0" height ="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >

        <DataGrid checkboxSelection 
        rows={mockData}
        columns={columns}
        />
        </Box>
        </Box>

    );
};
export default EmpMD;*/


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Box} from "@mui/material";
import Header from '../../components/Header'
import { colors, useTheme } from '@mui/material'
import { tokens } from "../theme";


const Read = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  function getData() {
    axios
      .get("https://646296267a9eead6fad2c898.mockapi.io/api/V1/EmpMD-PerM")
      .then((res) => {
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/EmpMD-PerM/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, fname, lname, doj, offrdate, 
    etype, depart, desig, shift, salarymode, 
    status, salarystructure) => {
    localStorage.setItem("id", id);
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("doj", doj);
    localStorage.setItem("offrdate", offrdate);
    localStorage.setItem("etype", etype);
    localStorage.setItem("depart", depart);
    localStorage.setItem("desig", desig);
    localStorage.setItem("shift", shift);
    localStorage.setItem("salarymode", salarymode);
    localStorage.setItem("status", status);
    localStorage.setItem("salarystructure", salarystructure);

  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box m='20pxc'>
      <Header title="Employee MasterData" subtitle="Employee Master Data" />
        <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}></Box>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <Link to="/CreateMD">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FName</th>
            <th scope="col">LName</th>
            <th scope="col">DOJ</th>
            <th scope="col">Offer Date</th>
            <th scope="col">Employeement Type</th>
            <th scope="col">Department</th>
            <th scope="col">Designation</th>
            <th scope="col">Shift</th>
            <th scope="col">Salary Mode</th>
            <th scope="col">Marital Status</th>
            <th scope="col">Salary Structure</th>


          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.fname}</td>
                  <td>{eachData.lname}</td>
                  <td>{eachData.doj}</td>
                  <td>{eachData.offrdate}</td>
                  <td>{eachData.etype}</td>
                  <td>{eachData.depart}</td>
                  <td>{eachData.desig}</td>
                  <td>{eachData.shift}</td>
                  <td>{eachData.salarymode}</td>
                  <td>{eachData.status}</td>
                  <td>{eachData.salarystructure}</td>

                  <td>
                    <Link to="/Update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.fname,
                            eachData.lname,
                            eachData.doj,
                            eachData.offrdate,
                            eachData.etype,
                            eachData.depart,
                            eachData.desig,
                            eachData.shift,
                            eachData.salarymode,
                            eachData.status,
                            eachData.salarystructure
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      
    </Box>
  );
};
export default Read;