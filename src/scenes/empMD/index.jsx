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
    const colors = tokens(theme.palette.mode)
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

/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {Box, Button} from "@mui/material";
import Header from '../../components/Header'
import { colors, useTheme } from '@mui/material'
import { tokens } from "../theme";
import { DataGrid } from "@mui/x-data-grid";



const Read = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  
  const navigate = useNavigate()
  const handleClick =(event,cellValues)=>{
    console.log(cellValues.row);


  }
  function getData() {
    axios
      .get("https://646296267a9eead6fad2c898.mockapi.io/api/V1/EmpMD-PerM")
      .then(res => setData(res.data)
        .catch(err=>console.log(err))
      );
  }
  function handleDelete(id) {
    axios
      .delete(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/EmpMD-PerM/${id}`)
      .then(() => {
        getData();
      });
  }
 
  const columns =[
    
    { field: "id", headerName:"id" },
    { field:"fname", headerName:"First Name", flex:1, cellClassName:"name--column-cell"},
    { field:"Date of Joining", headerName:"DOJ", flex:1},
    { field:"phone", headerName:"Contact#", flex:1},
    { field:"etype", headerName:"Employement Type", flex:1},
    { field:"depart", headerName:"Department", flex:1},
    { field:"desig", headerName:"Designation", flex:1},
    { field:"shift", headerName:"Shift", flex:1},
    { field:"salarymode", headerName:"Salary Mode", flex:1},
   
  ]

/*
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

  };*/

  /*
  useEffect(() => {
    getData();
  }, []);
  return (

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
            rows={data}
            columns={columns}
            />
            </Box>
            </Box>

/*
cc
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
      </div>/*
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
        </thead>cc
      { data.map((eachData) => {
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
            </>*/
       /*  );
        
      
  
};
export default Read;*/
import React, { useEffect, useState  } from 'react';
import { Table, checkbox } from 'semantic-ui-react'
import axios from 'axios';
import {Box, Button, IconButton} from "@mui/material";
import Header from '../../components/Header'
import { colors, useTheme } from '@mui/material'
import { tokens } from "../theme";
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Read=()=> {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/EmpMD-PerM`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
          })
  }, []);

  const setData = (data) => {
    let { id, empcode, fname, lname, offrdate, doj, departn,
        desigg,  salarymode, 
     } = data;
      localStorage.setItem('id', id);
      localStorage.setItem('empcode', empcode);
      localStorage.setItem('fname', fname);
      localStorage.setItem('lname', lname);
      localStorage.setItem('offrdate', offrdate);
      localStorage.setItem('doj', doj);
localStorage.setItem('departn',departn);
      localStorage.setItem('desigg', desigg);
      localStorage.setItem('salarymode', salarymode);

}

const getData = () => {
  axios.get(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/EmpMD-PerM`)
      .then((getData) => {
          setAPIData(getData.data);
      })
}
const onDelete = (id) => {
  axios.delete(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/EmpMD-PerM/${id}`)
  .then(() => {
      getData();
  })
}
    return (
<Box>    
         <Box display="flex" justifyContent="space-between" alignItems="center" >   
     <Header title="Employee MasterData" subtitle="Employee Master Data" />
     <Box>
          <Button 
            sx={{
              backgroundColor: colors.white[100],
              color: colors.blue[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px", borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
            }}href='/CreateMD'
          >
Create Employee          </Button> 
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between"  
      backgroundColor={colors.white[500]} color={colors.blue[900]}>
        <div style={{ height: '550px', overflow: 'auto', width:'1180px', backgroundColor: '#f4f5ff'}}>    

        <Table singleLine>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Employee Code</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Date of Joining</Table.HeaderCell>
                        <Table.HeaderCell>Offer Date</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.HeaderCell>Designation</Table.HeaderCell>
                        <Table.HeaderCell>Salary Mode</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
           <Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.id}</Table.Cell>
          <Table.Cell>{data.empcode}</Table.Cell>
           <Table.Cell>{data.fname}</Table.Cell>
           <Table.Cell>{data.lname}</Table.Cell>
           <Table.Cell>{data.doj}</Table.Cell>
           <Table.Cell>{data.offrdate}</Table.Cell>
           <Table.Cell>{data.departn}</Table.Cell>
           <Table.Cell>{data.desigg}</Table.Cell>
           <Table.Cell>{data.salarymode}</Table.Cell>
           <Link to='/Update'>
  <Table.Cell> 
  <IconButton  onClick={() => setData(data)}>
        <EditIcon sx={{ color: colors.blue[900] }} />
      </IconButton>{/*
  <Button sx={{
              backgroundColor: colors.white[100],
              color: colors.blue[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px", borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
            }}
          onClick={() => setData(data)}>Update</Button>*/}
   </Table.Cell>
</Link>
<Table.Cell>
<IconButton  onClick={() => onDelete(data.id)}>
        <DeleteIcon sx={{ color: colors.blue[900] }} />
      </IconButton>{/*
   <Button sx={{
              backgroundColor: colors.white[100],
              color: colors.blue[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px", borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
            }}
          onClick={() => onDelete(data.id)}>Delete</Button>*/}
   </Table.Cell>
        </Table.Row>
   )})}
</Table.Body></Table></div>
</Box>
        </Box>
    )
}
export default Read;
