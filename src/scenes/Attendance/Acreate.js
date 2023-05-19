import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { tokens } from "../theme";
import Header from '../../components/Header';
import { useNavigate } from "react-router";
import { Box, useTheme } from '@mui/material'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function Acreate() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [empid, setEmpid] = useState('');
    const [fromdate, setFromdate] = useState('');
    const [todate, setTodate] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [reason, setReason] = useState('');

    const history = useNavigate();


    console.log(checkbox)
    const postData = () => {
        axios.post(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/Attendance`, {
            empid,
            fromdate,
            todate,
            checkbox,
            reason
        }).then(() => {
            history.push('/Aread')
        })
    }
    return(
        <Box m="20px">
        <Header title="Employee Attendance" subtitle="Create Attendance Request" />
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
            href='/Aread'
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Show Data
          </Button>
        </Box> <br></br>
              Request Attendance 
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
      <label for="pwd">From Date:</label>
      <input type="date" id="txt1" 
             name="fromdate" required
            onChange={(e)=>setFromdate(e.target.value)} />

<label for="">To Date:</label>
<input type="date" id="txt1" 
             name="todate" required
            onChange={(e)=>setTodate(e.target.value)} />
             <Form.Field>
                    <Checkbox label='Half day'
                    onChange={(e)=>setCheckbox(e.target.value)} />
                </Form.Field>

  {/*
    <div className="mb-3 form-check">
      <input type="checkbox" classNameName="form-check-input" id="exampleCheck1"/>
      <label classNameName="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
        <button type="submit" className="btn btn-primary" >Submit</button>*/}

    <label for="text">Reason:</label>
      <input type="text" id="txct2" 
            placeholder="" name="reason" sx={{width:'20px', Height:'40px'}}
            onChange={(e)=>setReason(e.target.value)}/>
    </div>
<Button   
 type="submit" color='#0a1f2e' className="btn-primary"  onClick={postData} 
 >Submit</Button>

  </Form>
  
  </Box>
  </Box>
  )

}