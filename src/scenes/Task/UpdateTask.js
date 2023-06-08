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
    if (!empid) {
      alert('Please enter the employee ID.');
      return;
    }
    if (!title) {
      alert('Please enter task title.');
      return;
    }
    if (status === '') {
      alert('Please enter status.');
      return;
    }
if (!assignedby) {
      alert('Please enter who assigned the task.');
      return;
    }
if (!assignedto) {
      alert('Please enter the employee assigned to the task.');
      return;
    }
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
    <Box display="flex" justifyContent="space-between" alignItems="center" > 
<Header title="Employee Tasks" subtitle="Create & Assign Tasks" />
<Box>
<Button 
sx={{
backgroundColor: colors.white[100],
color: colors.blue[900],
fontSize: "14px",
fontWeight: "bold",
padding: "10px 20px", borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
}}href='/ReadTask'
>
Show Tasks          </Button> 
</Box>
</Box>
    <Box display="flex" justifyContent="space-between"  
    backgroundColor={colors.white[500]} color={colors.blue[900]}  >   
    <Form className="create-form">
    <div className="mb-3">
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="text">Employee Id</label>
  <input type="number" min="0" step="1"  value={empid}
        placeholder="Enter Employee ID" name="empid" required
        onChange={(e)=>setEmpid(e.target.value)} />
</div>
<div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="text">Title:</label>
  <input type="text" id="txct2"  value={title}
        placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
        onChange={(e)=>setTitle(e.target.value)}/>
</div>
<div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="text">Description:</label>
  <input type="text" id="txct2" value={description}
        placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
        onChange={(e)=>setDescription(e.target.value)}/>
</div>       
   <div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="Type">Status</label>
<select id="Type" name="Type" onChange={(e)=>setStatus(e.target.value)} value={status}>
<option value="">Select</option>
<option value="Completed">Completed</option>
<option value="In-progress">In-progress</option>
<option value="On-hold">On-hold</option>
<option value="Over-due">Over-due</option>
<option value="Awaited Review">Awaited Review</option>

</select>
</div></div>
<div style={{ display: 'flex', marginBottom: '1rem' }}>
          <div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="text">Task Priority Id</label>
  <input type="number" min="0" step="1" value={tpid}
        placeholder="Enter Employee ID" name="TPid" requiredc
        onChange={(e)=>setTPid(e.target.value)} />
</div>          <div style={{ marginRight: '1rem', width: '20%'  }}>
  <label for="pwd">Deadline:</label>
  <input type="date" id="txt1" value={deadline}
         name="fromdate" required
        onChange={(e)=>setDeadline(e.target.value)} />
</div>          <div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="pwd">Completion Date:</label>
  <input type="date" id="txt1" value={completiondate}
         name="fromdate" 
        onChange={(e)=>setCompletiondate(e.target.value)} />
</div>          <div style={{ marginRight: '1rem', width: '20%'  }}>

<label for="text">Assigned to:</label>
  <input type="text" id="txct2" value={assignedto}
        placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
        onChange={(e)=>setAssignedto(e.target.value)}/>
</div></div>
<div style={{ display: 'flex', marginBottom: '1rem' }}>
<div style={{ marginRight: '1rem', width: '84%'  }}>
<label for="text">Assigned by:</label>
  <input type="text" id="txct2" value={assignedby}
        placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
        onChange={(e)=>setAssignedby(e.target.value)}/>
</div> </div>
<div style={{ display: 'flex', marginBottom: '1rem' }}>
 <div style={{ marginRight: '1rem', width: '84%'  }}>
<label for="text">Task Type Id</label>
  <input type="number" min="0" step="1" value={typeid}
        placeholder="Enter Employee ID" name="TPid" required
        onChange={(e)=>setTypeid(e.target.value)} />
</div></div></div>
    <br></br><br></br><Button   
type="submit" color='#0a1f2e' className="btn-primary"  onClick={updateAPIData} 
>Submit</Button>

</Form>

</Box>
</Box>
)

}
export default UpdateTask;