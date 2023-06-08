import React, { useState } from 'react';
import { Button, checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { tokens } from "../theme";
import Header from '../../components/Header';
import { useNavigate } from "react-router";
import { Box, useTheme } from '@mui/material'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function CreateTask() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [empid, setEmpid] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [tpid, setTPid] = useState('');
    const [deadline, setDeadline] = useState('');
    const [completiondate, setCompletiondate] = useState('');
    const [assignedto, setAssignedto] = useState('');
    const [assignedby, setAssignedby] = useState('');
    const [typeid, setTypeid] = useState('');

    const history = useNavigate();


    console.log("checkbox")
    const postData = () => {
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
        axios.post(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/Task`, {
            empid,
            title,
            description,
            status,
            tpid,
            deadline,
            completiondate,
            assignedto,
            assignedby,
            typeid,
        }).then(() => {
            history('/ReadTask')
        })
    }
    return(
        <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center" > 
        <Header title="Employee Tasks" />
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
      <input type="number" min="0" step="1" 
            placeholder="Enter Employee ID" name="empid" required
            onChange={(e)=>setEmpid(e.target.value)} />
</div>
<div style={{ marginRight: '1rem', width: '20%'  }}>
 <label for="text">Title:</label>
      <input type="text" id="txct2" 
            placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
            onChange={(e)=>setTitle(e.target.value)}/>
</div>
<div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="text">Description:</label>
      <input type="text" id="txct2" 
            placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
            onChange={(e)=>setDescription(e.target.value)}/>
</div>       
   <div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="Type">Status</label>
<select id="Type" name="Type" onChange={(e)=>setStatus(e.target.value)} >
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
      <input type="number" min="0" step="1" 
            placeholder="Enter Employee ID" name="TPid" requiredc
            onChange={(e)=>setTPid(e.target.value)} />
</div>          <div style={{ marginRight: '1rem', width: '20%'  }}>
      <label for="pwd">Deadline:</label>
      <input type="date" id="txt1" 
             name="fromdate" required
            onChange={(e)=>setDeadline(e.target.value)} />
</div>          <div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="pwd">Completion Date:</label>
      <input type="date" id="txt1" 
             name="fromdate" 
            onChange={(e)=>setCompletiondate(e.target.value)} />
</div>          <div style={{ marginRight: '1rem', width: '20%'  }}>
<label for="text">Assigned to:</label>
      <input type="text" id="txct2" 
            placeholder="" name="reason" sx={{width:'20px', Height:'40px'}} required
            onChange={(e)=>setAssignedto(e.target.value)}/>
</div></div>
<div style={{ display: 'flex', marginBottom: '1rem' }}>
          <div style={{ marginRight: '1rem', width: '84%'  }}>
<label for="text">Assigned by:</label>
      <input type="text" id="txct2" 
            placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
            onChange={(e)=>setAssignedby(e.target.value)}/>
</div> </div>
<div style={{ display: 'flex', marginBottom: '1rem' }}>
 <div style={{ marginRight: '1rem', width: '84%'  }}>
<label for="text">Task Type Id</label>
      <input type="number" min="0" step="1" 
            placeholder="Enter Employee ID" name="TPid" required
            onChange={(e)=>setTypeid(e.target.value)} />
    </div></div></div>
    <br></br><br></br>
<Button   
 type="submit" color='#0a1f2e' className="btn-primary"  onClick={postData} 
 >Submit</Button>

  </Form>
  
  </Box>
  </Box>
  )

}