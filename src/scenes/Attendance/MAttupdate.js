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

const MAttupdate = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    let navigate = useNavigate();
  
  const [id, setId] = useState(0);
    const  [empid, setEmpid]= useState("");
     const  [date,setDate]= useState("");
     const  [shift,setShift]= useState("");
     const  [checkbox, setCheckbox]= useState("");
     const  [lateentry, setLateentry]= useState("");
     const  [earlyexit, setEarlyExit]= useState("");

  
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setEmpid(localStorage.getItem("empid", empid));
    setDate(localStorage.getItem("date", date));
    setCheckbox(localStorage.getItem("checkbox", checkbox));
    setShift(localStorage.getItem("shift", shift));
    setLateentry(localStorage.getItem("lateentry", lateentry));
    setEarlyExit(localStorage.getItem("earlyexit", earlyexit));

  }, []);
  
  const updateAPIData = () => {
    axios.put(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/AttendanceMark/${id}`, {
      id:id,
      empid: empid,
      date: date,
      checkbox: checkbox,
      shift: shift,
      lateentry: lateentry,
      earlyexit: earlyexit,

  }).then(() => {
    navigate("/MAttread");
  })
  }

  return(
    <Box m="20px">
    <Header title="Employee Attendance" subtitle="Update Marked Attendance" />
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
<select id="Type" name="Type" onChange={(e)=>setEarlyExit(e.target.value)} >
<option value="">Select</option>
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
<Button type='submit' onClick={updateAPIData}>Update</Button>


</Form>

</Box>
</Box>
)}
export default MAttupdate;
