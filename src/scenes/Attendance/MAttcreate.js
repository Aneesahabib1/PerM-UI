import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { tokens } from "../theme";
import Header from '../../components/Header';
import { useNavigate } from "react-router";
import { Box, useTheme } from '@mui/material'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function MAttcreate() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [empid, setEmpid] = useState('');
    const [date, setDate] = useState('');
    const [checkbox, setCheckbox] = useState('');
    const [shift, setShift] = useState('');
    const [lateentry, setLateentry] = useState('');
    const [earlyexit, setEarlyExit] = useState('');

    const history = useNavigate();


    console.log(checkbox)
    const postData = () => {
        axios.post(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/AttendanceMark`, {
            empid,
            date,
            checkbox,
            shift,
            lateentry,
            earlyexit,
        }).then(() => {
            history.push('/MAttread')
        })
    }
    return(
        <Box m="20px">
        <Header title="Employee Attendance" subtitle="Mark Attendance" />
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
            href='/MAttread'
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Show Data
          </Button>
        </Box> <br></br>
              Mark Attendance 
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

      <label for="pwd">Date:</label>
      <input type="date" id="txt1" 
             name="fromdate" required
            onChange={(e)=>setDate(e.target.value)} />

<Form.Field>
                    <Checkbox label='Staus'
                    onChange={(e)=>setCheckbox(e.target.value)} />
                </Form.Field>
             
             <label for="Type">Shift:</label>
  <select id="Type" name="Type" onChange={(e)=>setShift(e.target.value)} >
  <option value="Male">Select</option>
    <option value="Morning">Morning</option>
    <option value="Evening">Evening</option>
  </select>

 
 
 <label for="Type">Late Entry:</label>
  <select id="Type" name="Type" onChange={(e)=>setLateentry(e.target.value)} >
  <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>

  <label for="Type">Early Exit:</label>
  <select id="Type" name="Type" onChange={(e)=>setEarlyExit(e.target.value)} >
  <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<Button   
 type="submit" color='#0a1f2e' className="btn-primary"  onClick={postData} 
 >Submit</Button>

  </Form>
  
  </Box>
  </Box>
  )

}