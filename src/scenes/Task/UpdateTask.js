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

const UpdateTask = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    let navigate = useNavigate();
  
  const [id, setId] = useState(0);
    const  [empid, setEmpid]= useState("");
     const  [title,setTitle]= useState("");
     const [description, setDescription] = useState('');
     const [status, setStatus] = useState('');
     const [tpid, setTPid] = useState('');
     const [deadline, setDeadline] = useState('');
     const [completiondate, setCompletiondate] = useState('');
     const [assignedto, setAssignedto] = useState('');
     const [assignedby, setAssignedby] = useState('');
     const [typeid, setTypeid] = useState('');

  
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setEmpid(localStorage.getItem("empid", empid));
    setTitle(localStorage.getItem("title", title));
    setDescription(localStorage.getItem("description", description));
    setStatus(localStorage.getItem("status", status));
    setTPid(localStorage.getItem("tpid", tpid));
    setDeadline(localStorage.getItem("deadline", deadline));
    setCompletiondate(localStorage.getItem("completiondate", completiondate));
    setAssignedto(localStorage.getItem("assignedto", assignedto));
    setAssignedby(localStorage.getItem("assignedby", assignedby));
    setTypeid(localStorage.getItem("typeid", typeid));
    
  }, []);
  
  const updateAPIData = () => {
    axios.put(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/Task/${id}`, {
      id:id,
      empid: empid,
      title: title,
      description: description,
      status: status,
      tpid: tpid,
      deadline: deadline,
      completiondate: completiondate,
      assignedto: assignedto,
      assignedby: assignedby,
      typeid: typeid,

  }).then(() => {
    navigate("/ReadTask");
  })
  }
  return(
    <Box m="20px">
    <Header title="Employee Tasks" subtitle="Update Tasks" />
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
        href='/ReadTask'
      >
        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
        Show Data
      </Button>
    </Box> <br></br>
          Employee Tasks 
        </h4>
    </Box>
    <Box display="flex" justifyContent="space-between"  
    backgroundColor={colors.white[100]} color={colors.blue[900]}  >   
    <Form className="create-form">
    <div className="mb-3">
<label for="text">Employee Id</label>
  <input type="number" min="0" step="1" 
        placeholder="Enter Employee ID" name="empid" required
        onChange={(e)=>setEmpid(e.target.value)} />

<label for="text">Title:</label>
  <input type="text" id="txct2" 
        placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
        onChange={(e)=>setTitle(e.target.value)}/>

<label for="text">Description:</label>
  <input type="text" id="txct2" 
        placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
        onChange={(e)=>setDescription(e.target.value)}/>

<label for="Type">Status</label>
<select id="Type" name="Type" onChange={(e)=>setStatus(e.target.value)} >
<option value="">Select</option>
<option value="Completed">Completed</option>
<option value="In-progress">In-progress</option>
<option value="On-hold">On-hold</option>
<option value="Over-due">Over-due</option>
<option value="Awaited Review">Awaited Review</option>

</select>

<label for="text">Task Priority Id</label>
  <input type="number" min="0" step="1" 
        placeholder="Enter Employee ID" name="TPid" requiredc
        onChange={(e)=>setTPid(e.target.value)} />

  <label for="pwd">Deadline:</label>
  <input type="date" id="txt1" 
         name="fromdate" required
        onChange={(e)=>setDeadline(e.target.value)} />

<label for="pwd">Completion Date:</label>
  <input type="date" id="txt1" 
         name="fromdate" 
        onChange={(e)=>setCompletiondate(e.target.value)} />

<label for="text">Assigned to:</label>
  <input type="text" id="txct2" 
        placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
        onChange={(e)=>setAssignedto(e.target.value)}/>

<label for="text">Assigned by:</label>
  <input type="text" id="txct2" 
        placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
        onChange={(e)=>setAssignedby(e.target.value)}/>

<label for="text">Task Type Id</label>
  <input type="number" min="0" step="1" 
        placeholder="Enter Employee ID" name="TPid" required
        onChange={(e)=>setTypeid(e.target.value)} />
</div>
<Button   
type="submit" color='#0a1f2e' className="btn-primary"  onClick={updateAPIData} 
>Submit</Button>

</Form>

</Box>
</Box>
)

}
export default UpdateTask;