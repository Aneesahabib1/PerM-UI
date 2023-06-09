import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {Box} from "@mui/material";
import { colors, useTheme } from '@mui/material'
import { tokens } from "../theme";
import Header from "../../components/Header";
import { Button, Form, Checkbox } from 'semantic-ui-react'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";


export default function UpdateDepartment() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    let navigate = useNavigate();

    const [id, setId] = useState(0);
    const [departmentid, setDepartmentId] = useState('');
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isdeleted, setIsdeleted]= useState('');
    const [createdby, setCreatedby] = useState('');
    const [createdon, setCreatedOn] = useState('');

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setDepartmentId(localStorage.getItem("departmentid", departmentid));
        setName(localStorage.getItem("name", name));
        setCode(localStorage.getItem("code", code));
        setIsdeleted(localStorage.getItem("isdeleted", isdeleted));
        setCreatedby(localStorage.getItem("createdby", createdby));
        setCreatedOn(localStorage.getItem("createdon", createdon));
    }, []);



    const updateAPIData = () => {
      if (!departmentid) {
        alert('Please enter the department Code.');
        return;
      }
      
      if (!name) {
        alert('Please enter the name.');
        return;
      }
      if (!code) {
        alert('Please enter the name.');
        return;
      }
        axios.put(`https://647e18d4af984710854aee8c.mockapi.io/Deparments/${id}`, {
          id: id,
            departmentid: departmentid,
            name: name,
            code: code,
            isdeleted: isdeleted,
            createdby: createdby,
            createdon: createdon,
        }).then(() => {
            navigate('/ReadDepartment')
        })
    }
    return(
        <Box m="20px">
        <Header title="Departments" subtitle="Create Department" />
        <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
           <h4> <Box>
          <Button
            sx={{
              backgroundColor: colors.white[100],
              color: colors.blue[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
            }}
            href='/ReadDepartment'
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Show Departments
          </Button>
        </Box> <br></br> 
            </h4>
        </Box>
        <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[100]} color={colors.blue[900]}  >   
        <div style={{ height: '550px', overflow: 'auto', width:'1130px', backgroundColor: '#f4f5ff'}}>    

        <Form className="create-form">
        <div className="mb-3">
    <label for="text">Department Code</label>
      <input type="text"  value={departmentid}
            placeholder="Enter Department ID" name="departmentid" required
            onChange={(e)=>setDepartmentId(e.target.value)} />

    <label for="text">Name</label>
      <input type="text" 
            placeholder="Enter Department Name" name="name" required value={name}
            onChange={(e)=>setName(e.target.value)} />
            <label for="text">Code </label>
      <input type="number" min="0" step="1" value={code}
            placeholder="Enter Department Code" name="code" required
            onChange={(e)=>setCode(e.target.value)} />

<label for="text">Deleted</label>
      <input type="text" value={isdeleted}
            placeholder="" name="deleted" required
            onChange={(e)=>setIsdeleted(e.target.value)} />
             
             <label for="Type">Created by:</label>
  <select id="Type" name="Type" onChange={(e)=>setCreatedby(e.target.value)} value={createdby} >
  <option value="Male">Select</option>
    <option value="Morning"></option>
    <option value="Evening"></option>
  </select>

  <label for="pwd">Create on</label>
      <input type="date" id="txt1" value={createdon}
             name="fromdate" required
            onChange={(e)=>setCreatedOn(e.target.value)} />
</div>

<Button   
 type="submit"  onClick={updateAPIData} 
 >Update</Button>

  </Form></div>
  
  </Box>
  </Box>
  )

}