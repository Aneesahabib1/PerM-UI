import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {Box} from "@mui/material";
import { colors, useTheme } from '@mui/material'
import { tokens } from "../scenes/theme";
import Header from "../components/Header";

const Update = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  const [id, setId] = useState(0);
  const  [fname, setFname]= useState("");
   const  [lname,setLname]= useState("");
   const  [doj, setDoj]= useState("");
   const  [offrdate, setOffrdate]= useState("");
   const  [etype, setEtype]= useState("");
   const  [depart, setDepart]= useState("");
   const  [desig, setDesig]= useState("");
   const  [shift, setShift]= useState("");
   const  [salarymode, setSalarymode]= useState("");
   const  [status, setStatus]= useState("");
   const  [salarystructure, setSalarystructure]= useState("");

   const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFname(localStorage.getItem("fname", fname));
    setLname(localStorage.getItem("lname", lname));
    setDoj(localStorage.getItem("doj", doj));
    setOffrdate(localStorage.getItem("offrdate", offrdate));
    setEtype(localStorage.getItem("etype", etype));
    setDepart(localStorage.getItem("depart", depart));
    setDesig(localStorage.getItem("desig", desig));
    setShift(localStorage.getItem("shift", shift));
    setSalarymode(localStorage.getItem("salarymode", salarymode));
    setStatus(localStorage.getItem("status", status));
    setSalarystructure(localStorage.getItem("salarystructure", salarystructure));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/EmpMD-PerM${id}`, {
        fname: fname,
        lname: lname,
        doj: doj,
        offrdate: offrdate,
        etype: etype,
        depart: depart,
        desig: desig,
        shift: shift,
        salarymode: salarymode,
        status: status,
        salarystructure: salarystructure,
      })
      .then(() => {
        navigate("/CreateMD");
      });
  };
  return (
    <Box m="20px">
        <Header title="Employee MasterData" subtitle="Update Employee Master Data" />
       
        <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[100]} color={colors.blue[900]}  >
      <form>

      <div className="mb-3" >
    <label for="text">First Name:</label>
      <input type="text" id="txct2" 
            placeholder="Enter First Name" name="fname" required
            onChange={(e)=>setFname(e.target.value)} />
      <label for="pwd">Last Name:</label>
      <input type="text" id="txt1" 
            placeholder="Enter Last Name" name="lname" required
            onChange={(e)=>setLname(e.target.value)} />

<label for="gender">Gender:</label>
  <select id="gender" name="gender">
  <option value="Male">Select</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
  <label for="DOB">Date of Birth:</label>
  <input type="date" id="DOB" name="DOB"></input>

  <label for="DOj">Date of Joining:</label>
  <input type="date" id="DOJ" name="DOJ" required
              onChange={(e)=>setDoj(e.target.value)}></input>
</div>
<div className='mb-2'>
  <label for="Type">Employeement Type :</label>
  <select id="Type" name="Type" onChange={(e)=>setEtype(e.target.value)} >
  <option value="Male">Select</option>
    <option value="Male">Full-Time</option>
    <option value="Female">Part-Time</option>
  </select>
    </div>{/*
    <div className="mb-3 form-check">
      <input type="checkbox" classNameName="form-check-input" id="exampleCheck1"/>
      <label classNameName="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary" >Submit</button>*/}
<Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Emergency Contacts</h4>
        </Box>

        <div className='mb-1'>
    <label for="text">Name:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" sx={{width:'20px', Height:'40px'}}/>
      <label for="pwd">Relation:</label>
      <input type="text" id="txt1" 
            placeholder="" name="lname"/>
            </div>

            <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Joining Details</h4>
        </Box>
        <div className='mb-3' >
    <label for="text">Job Applicant:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" required />

            <label for="DOB">Contract End Date:</label>
  <input type="date" id="DOB" name="DOB" required></input>

  <label for="DOB">Offer Date:</label>
  <input type="date" id="DOB" name="DOB" required></input>

  <label for="Type">Notice Days:</label>
  <select id="Type" name="Type">
  <option value="">Select</option>
    <option value="">7</option>
    <option value="">15</option>
    <option value="">30</option>

  </select></div>
            <div className='mb-2'>
<label for="DOB">Confirmation Date:</label>
  <input type="date" id="DOB" name="DOB"></input>

  <label for="DOB">Date of Retirement:</label>
  <input type="date" id="DOB" name="DOB"></input>
            </div>

            <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Department & Grade</h4></Box>
            <div className='mb-3' > 
            <label for="Type">Department:</label>
  <select id="Type" name="Type" required onChange={(e)=>setDepart(e.target.value)} >
  <option value="">Select</option >
    <option value="">Sales</option>
    <option value="">Finance</option>
    <option value="">Production</option>
    <option value="">HR</option>
    <option value="">Marketing</option>
</select>
    <label for="text">Grade:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> 
            <label for="text">Designation:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" required onChange={(e)=>setDesig(e.target.value)} />
            </div>
            <div className='mb-3' >
            <label for="text">Report to:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> 
            
            <label for="text">Branch:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> 
            </div>

            <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Attendance & Leave Details</h4></Box>
            <div className='mb-2' >
    <label for="text">Device ID:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> 

<label for="text">Holidays:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> 

<label for="Type">Default shifts:</label>
  <select id="Type" name="Type"onChange={(e)=>setShift(e.target.value)} >
  <option value="">Select</option>
    <option value="">Morning</option>
    <option value="">Evening</option>
  </select>  </div>

  <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Bank Details</h4></Box>
            <div className='mb-3' >
    <label for="text">Salary Mode:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" onChange={(e)=>setSalarymode(e.target.value)} /> 
                <label for="text">Bank:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> 
<label for="text">Back A/C Number:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> </div>
            <div className='mb-3'>
    <label for="text">Payroll Cost Center:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> 
    <label for="text">Provident fund Account:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> </div>

<Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Health Insurance</h4></Box>
            <div className='mb-3' >
    <label for="text">Provider:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /> 
             <label for="text">Number:</label>
      <input type="text" id="txct2" 
            placeholder="" name="fname" /></div>

<Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Contact Details</h4></Box>
            <div className='mb-3' >
    <label for="text">Marital Status:</label>
    <select id="Type" name="Type" onChange={(e)=>setStatus(e.target.value)}>
  <option value="">Select</option>
    <option value="">Married</option>
    <option value="">Un-married</option>
  </select>  
            <label for="text">Blood Group:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            <label for="text">Family Backgroud:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            <label for="text">Health Details:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" /></div>
                        <div className='mb-3'>
            <label for="text">CNIC:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />

            <label for="text">Date of Issue:</label>
            <input type="date" id="DOI" name="DOI"></input>

            <label for="text">Valid Upto:</label>
            <input type="date" id="DOI" name="DOI"></input>  </div>

            <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Educational Qualification</h4></Box>
            <div className='mb-3' >
            <label for="text">School/University:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            <label for="text">Qualification/Program:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
    <label for="text">Level:</label>
<select id="Type" name="Type">
  <option value="">Select</option>
    <option value="">Graduate</option>
    <option value="">Undergraduate</option>
  </select>   
  <label for="text">Year of Passing:</label>
            <input type="date" id="DOI" name="DOI"></input>  </div>

            <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Previous work Excperince</h4></Box>
            <div className='mb-3' >
            <label for="text">Company:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            <label for="text">Designation:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            <label for="text">Salary:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            <label for="text">Address:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" /></div>
             <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>History In Company</h4></Box>
            <div className='mb-3' >
            <label for="text">Branch:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
             <label for="text">Start Date:</label>
            <input type="date" id="DOI" name="DOI"></input>
            <label for="text">End Date:</label>
            <input type="date" id="DOI" name="DOI"></input>
            </div>

            <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Employee Grade</h4></Box>
            <div className='mb-3' >
            <label for="text">Salary Structure (Default):</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" onChange={(e)=>setSalarystructure(e.target.value)} />
            <label for="text">Name:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" /></div>

<Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Designation & Skills</h4></Box>
            <div className='mb-3' >
            <label for="text">Designation:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            <label for="text">Required Skills:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            <label for="text">Description:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            </div>

            <Box display="flex" justifyContent="space-between"  
        backgroundColor={colors.white[500]} color={colors.blue[900]}>
            <h4>Exit</h4></Box>
            <div className='mb-3'>
            <label for="text">Resignation Letter Date:</label>
            <input type="date" id="DOI" name="DOI"></input>
            <label for="text">Exit In to Date:</label>
            <input type="date" id="DOI" name="DOI"></input>
            <label for="text">Relieving Date:</label>
            <input type="date" id="DOI" name="DOI"></input>
            <label for="text">Feedback:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" /></div>
            <div className='mb-3'>
            <label for="text">New work Place:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
            <label for="text">Reason for Leaving:</label>
    <input type="text" id="txct2" 
            placeholder="" name="fname" />
</div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/empMD">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
      </Box></Box>
  );
};
export default Update;