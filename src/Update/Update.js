import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {Box} from "@mui/material";
import { colors, useTheme } from '@mui/material'
import { tokens } from "../scenes/theme";
import Header from "../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Button, Form, Checkbox, Input, Select } from 'semantic-ui-react'
import { Grade } from "@mui/icons-material";


const Update = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let navigate = useNavigate();
  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ];
  const optionst = [
    { key: 'm', text: 'Full-time', value: 'Full-time' },
    { key: 'f', text: 'Part-time', value: 'Part-time' },

  ]
  const optionsta = [
    { key: 'm', text: '15 Days', value: '15 Daya' },
    { key: 'f', text: '30 Days', value: '30 Days' },

  ]
  const optionstb = [
    { key: 'm', text: 'Finance', value: 'Finance' },
    { key: 'f', text: 'Sales ', value: 'Part-timeC' },
    { key: 'o', text: 'Marketing ', value: 'Marketing' },
    { key: 'p', text: 'HR ', value: 'HR' },
    { key: 'q', text: 'Production ', value: 'Productione' },
    { key: 'r', text: 'IT ', value: 'ITc' },
  ]
  const optionstc = [
    { key: 'm', text: 'Morning', value: 'Morning' },
    { key: 'f', text: 'Evening', value: 'Evening' },

  ]
  const optionste = [
    { key: 'm', text: 'Married', value: 'Married' },
    { key: 'f', text: 'Un-married', value: 'Un-married' },

  ]
  const optionstd = [
    { key: 'm', text: 'Monthly', value: 'Monthly' },
    { key: 'f', text: 'Weekly', value: 'Weekly' },

  ]

const [id, setId] = useState(0);
const [empcode, setEmpcode]=useState("");
const  [fname, setFname]= useState("");
const  [lname,setLname]= useState("");
const  [gender, setGender]= useState("");
const  [dob, setDOB]= useState("");
const  [doj, setDoj]= useState("");
const  [etype, setEtype]= useState("");
const  [emrgncyname, setEmrgncyName]= useState("");
const  [relation, setRelation]= useState("");
const  [jobapp, setjobapp]= useState("");
const  [conenddate, setConenddate]= useState("");
const  [offrdate, setOffrdate]= useState("");
const  [notice, setNotice]= useState("");
const  [confdate, setConfdate]= useState("");
const  [dor, setDOR]= useState("");
const  [departn, setdepartn]= useState("");
const  [gradee, setGrade]= useState("");
const  [desigg, setDesigg]= useState("");
const  [reportto, setReportto]= useState("");
const  [branch, SetBranch]= useState("");
const  [deviceid, setDeviceid]= useState("");
const  [holidays, setHolidays]= useState("");
const  [dshift, setDshift]= useState("");
const  [salarymode, setSalarymode]= useState("");
const  [bank, setBank]= useState("");
const  [bankacc, setbankAcc]= useState("");
const  [payrollc, setPayrollc]= useState("");
const  [pfacc, setPfacc]= useState("");
const  [hprovider, setHprovider]= useState("");
const  [hnumber, setHnumber]= useState("");
const  [status, setStatus]= useState("");
const  [bldgrp, setBldgrp]= useState("");
const  [fbg, setFbg]= useState("");
const  [healthd, setHealthd]= useState("");
const  [cnic, setCnic]= useState("");
const  [issuedate, setIssuedate]= useState("");
const  [expdate, setExpdate]= useState("");
const  [uni, setUni]= useState("");
const  [program, setProgram]= useState("");
const  [level, setLevel]= useState("");
const  [passingyr, setPassingyr]= useState("");
const  [excomp, setExcomp]= useState("");
const  [exdesig, setExdesig]= useState("");
const  [exsalary, setExsalary]= useState("");
const  [add, setAdd]= useState("");
const  [exbranch, setExbranch]= useState("");
const  [stdate, setStdate]= useState("");
const  [endate, setEndate]= useState("");
const  [salarystructure, setSalarystructure]= useState("");
const  [name, setName]= useState("");
const  [desig, setDesig]= useState("");
const  [rqskills, setRqskills]= useState("");
const  [des, setDes]= useState("");
const  [resigdate, setResigdate]= useState("");
const  [exdate, setExdate]= useState("");
const  [relievingdate, setReleivingdate]= useState("");
const  [feedback, setFeedback]= useState("");
const  [newplace, setNewplace]= useState("");
const  [reasonleaving, setReasonleaving]= useState("");
const [isFormValid, setFormValid] = useState(false);

useEffect(() => {
  setId(localStorage.getItem("id"));
  setEmpcode(localStorage.getItem("empcode", empcode));
  setFname(localStorage.getItem("fname", fname));
  setLname(localStorage.getItem("lname", lname));
  setGender(localStorage.getItem("gender", gender));
  setDOB(localStorage.getItem("dob", dob));
  setDoj(localStorage.getItem("doj", doj));
  setEtype(localStorage.getItem("etype", etype));
  setEmrgncyName(localStorage.getItem("emrgncyname", emrgncyname));
  setRelation(localStorage.getItem("relation", relation));
  setjobapp(localStorage.getItem("jobapp", jobapp));
  setConenddate(localStorage.getItem("conenddate", conenddate));
  setOffrdate(localStorage.getItem("offrdate", offrdate));
  setNotice(localStorage.getItem("notice", notice));
  setConfdate(localStorage.getItem("confdate", confdate));
  setDOR(localStorage.getItem("dor", dor));
  setdepartn(localStorage.getItem("depart", departn));
  setGrade(localStorage.getItem("gradee", gradee));
  setDesigg(localStorage.getItem("desigg", desigg));
  setReportto(localStorage.getItem("reportto", reportto));
  SetBranch(localStorage.getItem("branch", branch));
  setDeviceid(localStorage.getItem("deviceid", deviceid));
  setHolidays(localStorage.getItem("holidays", holidays));
  setDshift(localStorage.getItem("dshift", dshift));
  setSalarymode(localStorage.getItem("salarymode", salarymode));
  setBank(localStorage.getItem("bank", bank));
  setbankAcc(localStorage.getItem("bankacc", bankacc));
  setPayrollc(localStorage.getItem("payrollc", payrollc));
  setPfacc(localStorage.getItem("pfacc", pfacc));
  setHprovider(localStorage.getItem("hprovider", hprovider));
  setHnumber(localStorage.getItem("hnumbr", hnumber));
  setStatus(localStorage.getItem("status", status));
  setBldgrp(localStorage.getItem("bldgrp", bldgrp));
  setHealthd(localStorage.getItem("healthd", healthd));
  setFbg(localStorage.getItem("fbg", fbg));
  setCnic(localStorage.getItem("cnic", cnic));
  setIssuedate(localStorage.getItem("issuedate", issuedate));
  setExpdate(localStorage.getItem("expdate", expdate));
  setUni(localStorage.getItem("uni", uni));
  setProgram(localStorage.getItem("program", program));
  setLevel(localStorage.getItem("leval", level));
  setPassingyr(localStorage.getItem("passingyr", passingyr));
  setExcomp(localStorage.getItem("excomp", excomp));
  setExdesig(localStorage.getItem("exdesig", exdesig));
  setExsalary(localStorage.getItem("exsalary", exsalary));
  setAdd(localStorage.getItem("add", add));
  setExbranch(localStorage.getItem("exbranch", exbranch));
  setStdate(localStorage.getItem("stdate", stdate));
  setEndate(localStorage.getItem("endate", endate));
  setSalarystructure(localStorage.getItem("salarystructure", salarystructure));
  setName(localStorage.getItem("name", name));
  setDesig(localStorage.getItem("desig", desig));
  setRqskills(localStorage.getItem("rqskills", rqskills));
  setDes(localStorage.getItem("des", des));
  setResigdate(localStorage.getItem("resigdate", resigdate));
  setExdate(localStorage.getItem("exdate", exdate));
  setExdate(localStorage.getItem("exdate", exdate));
  setReleivingdate(localStorage.getItem("releivingdate", relievingdate));
  setFeedback(localStorage.getItem("feedback", feedback));
  setNewplace(localStorage.getItem("newplace", newplace));
  setReasonleaving(localStorage.getItem("reasonleaving", reasonleaving));
}, []);
const handleSubmit = (e) => {
  e.preventDefault();

  // Check if any required field is empty
  if (!empcode || !fname ) {
    alert('Please fill in all required fields.');
    return;
  }
  updateAPIData();
};
useEffect(() => {
  setFormValid(!!empcode && !!fname  && !!doj && !!name  && !!cnic);
}, [empcode, fname, doj, name, cnic]);

const updateAPIData = () => {
  if (!empcode || !fname || !gender || !doj || !etype || !jobapp || !offrdate
    || !departn || !desigg || !dshift || !salarymode || !bankacc || cnic.length !== 13 || isNaN(cnic)) {
    alert('Please fill in all required fields and ensure the CNIC is valid.');
    return;
  }
  if (new Date(doj) < new Date(offrdate)) {
    alert('Date of joining cannot be before the offer date.');
    return;
  }
  if (new Date(conenddate) <= new Date(doj) || new Date(conenddate) <= new Date(offrdate)) {
    alert('Contract end date should be after the date of joining and offer date.');
    return;
  }
  if (new Date(confdate) >= new Date(doj)) {
    alert('Confirmation date should be before the date of joining.');
    return;
  }
  const maxDateOfBirth = new Date('2005-01-01');
if (new Date(dob) >= maxDateOfBirth) {
alert('Date of birth should be before a certain date.');
return;
}
if (!/^\d{14,18}$/.test(pfacc)) {
alert('Provident Fund account number should be a numerical digit between 14 to 18 digits.');
return;
}
if (new Date(issuedate) >= new Date(expdate)) {
alert('Date of issue should be before the valid upto date.');
return;
}
  if (
    new Date(dor) <= new Date(doj) ||
    new Date(dor) <= new Date(offrdate) ||
    new Date(dor) <= new Date(confdate)
  ) {
    alert('Date of retirement should be after the date of joining, offer date, and confirmation date.');
    return;
  }
  if (!/^\d{1,2}$/.test(holidays)) {
    alert('Holidays should be a 1 or 2-digit numeric value.');
    return;
  }
  if (!/^\d{13,17}$/.test(bankacc)) {
    alert('Bank account number should be between 13 to 17 digits.');
    return;
  }
  if (hnumber.length !== 11 || isNaN(hnumber)) {
    alert('Number should be 11 digits.');
    return;
  }
  if (new Date(resigdate) >= new Date(exdate)) {
    alert('Resignation date should be before the exit date.');
    return;
  }

  // Check if relievingdate is after resigdate
  if (new Date(relievingdate) <= new Date(resigdate)) {
    alert('Relieving date should be after the resignation date.');
    return;
  }
  axios.put(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/EmpMD-PerM/${id}`, {
    id:id,
    empcode:empcode,
    fname: fname,
    lname: lname,
    gender: gender,
    dob: dob,
    doj: doj,
    etype: etype,
    emrgncyname: emrgncyname,
    relation: relation,
    jobapp: jobapp,
    conenddate: conenddate,
    offrdate: offrdate,
    notice: notice,
    confdate: confdate,
    dor: dor,
departn: departn,
    gradee: gradee,
    desigg: desigg,
    reportto: reportto,
    branch: branch,
    deviceid: deviceid,
    holidays: holidays,
    dshift: dshift,
    salarymode: salarymode,
    bank: bank,
    bankacc: bankacc,
    payrollc: payrollc,
    pfacc: pfacc,
    hprovider: hprovider,
    hnumber: hnumber,
    status: status,
    bldgrp: bldgrp,
    fbg: fbg,
    healthd: healthd,
    cnic: cnic,
    issuedate: issuedate,
    expdate: expdate,
    uni: uni,
    program: program,
    level: level,
    passingyr: passingyr,
    excomp: excomp,
    exdesig: exdesig,
    exsalary: exsalary,
    add: add,
    exbranch: exbranch,
    stdate: stdate,
    endate: endate,
    salarystructure: salarystructure,
    name: name,
    desig: desig,
    rqskills: rqskills,
    des: des,
    resigdate: resigdate,
    exdate: exdate,
    relievingdate: relievingdate,
    feedback: feedback,
    newplace: newplace,
    reasonleaving: reasonleaving,
 
}).then(() => {
  navigate("/empMD");
})
}
return(
  <Box m="20px">
  <Header title="MasterData" subtitle="Update Employee Master Data" />
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
      href='/empMD'
    >
      <DownloadOutlinedIcon sx={{ mr: "10px" }} />
      Show Data
    </Button>
  </Box> <br></br>
        Employee Details 
      </h4>
  </Box>
  <Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[100]} color={colors.blue[900]}  >
        <div style={{ height: '550px', overflow: 'auto', width:'1130px', backgroundColor: '#f4f5ff'}}>    

  <Form className="create-form">
  <Form.Group widths='equal'>
  <Form.Field
            control={Input}
            label='Employee Code' 
            placeholder='Employee Code' value={empcode} required
            onChange={(e)=>setEmpcode(e.target.value)}
          />
    <Form.Field
      control={Input}
      label='First name'
      placeholder='First name' value={fname} required
      onChange={(e)=>setFname(e.target.value)}
    />
    <Form.Field
      control={Input}
      label='Last name'
      placeholder='Last name' value={lname} 
       onChange={(e)=>setLname(e.target.value)}
    />
  </Form.Group>
          {/*
          <Form.Field
            control={Select}
            label='Gender'
            options={options} value={gender}
            onChange={(e)=>setGender(e.target.value)}
            placeholder='Gender'
          /></Form.Group>*/}
 <label for="Type">Gender:</label>
  <select id="Type" name="Type" onChange={(e)=>setGender(e.target.value)} value={gender} >
  <option value="Select">Select</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>

<Form.Group widths='equal'>
<Form.Field
    type='date'
      control={Input}
      label='Data of birth'
      placeholder='Enter DOJ' value={dob}
      onChange={(e)=>setDOB(e.target.value)}
    /><Form.Field
    type='date'
      control={Input}
      label='Data of joining' required
      placeholder='Enter DOJ' value={doj}
      onChange={(e)=>setDoj(e.target.value)}
    />
   </Form.Group>
          {/*
          <Form.Field
            control={Select}
            options={optionst}
            label='Employeement Type'
            placeholder='Enter Employeement type'  onChange={(e)=>setEtype(e.target.value)}
        />*/}
         <label for="Type">Employeement Type:</label>
  <select id="Type" name="Type" onChange={(e)=>setEtype(e.target.value)} value={etype} >
  <option value="Select">Select</option>
    <option value="Full Time">Full Time</option>
    <option value="Part Time">Part Time</option>
  </select>

<Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Emergency Contacts</h4>
  </Box>
  <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Name' 
      placeholder='Enter Name' value={emrgncyname} required
      onChange={(e)=>setEmrgncyName(e.target.value)}
    /><Form.Field
      control={Input}
      label='Relation'
      placeholder='' value={relation}
      onChange={(e)=>setRelation(e.target.value)}
    />
   </Form.Group>

      <Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Joining Details</h4>
  </Box>

  <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Job Applicant'
      placeholder='Enter Name' value={jobapp}
      onChange={(e)=>setjobapp(e.target.value)}
    /><Form.Field
    type='date'
      control={Input}
      label='Contract End Date'
      placeholder='' value={conenddate}
      onChange={(e)=>setConenddate(e.target.value)}
    />
   <Form.Field
    type='date'
      control={Input}
      label='Offer Date'
      placeholder='' value={offrdate}
      onChange={(e)=>setOffrdate(e.target.value)}
    />
     </Form.Group>{/*
<Form.Field
           control={Select}
           options={optionsta}
            label='Notice days'
            placeholder='Select'
            onChange={(e)=>setNotice(e.target.value)}
/>*/}
<label for="Type">Notice Days:</label>
  <select id="Type" name="Type" onChange={(e)=>setNotice(e.target.value)} value={notice} >
  <option value="Select">Select</option>
    <option value="15">15 Days</option>
    <option value="30">30 Days</option>
  </select>
  <Form.Group widths='equal'><Form.Field
    type='date'
      control={Input}
      label='Confirmation Date'
      placeholder='' value={confdate}
      onChange={(e)=>setConfdate(e.target.value)}
    />
   <Form.Field
    type='date'
      control={Input}
      label='Date of Retirement'
      placeholder='' value={dor}
      onChange={(e)=>setDOR(e.target.value)}
    />
   </Form.Group>
      <Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Department & Grade</h4></Box>

       {/*
<Form.Field
control={Select}
options={optionstb}
            label='Department' 
            placeholder='' 
            onChange={(e)=>setDepartn(e.target.value)}
          /><Form.Field
          control={Input}
          label='Grade'
          placeholder='' required
          onChange={(e)=>setGrade(e.target.value)}
/>*/}
<label for="Type">Department:</label>
  <select id="Type" name="Type" onChange={(e)=>setdepartn(e.target.value)} value={departn} >
  <option value="Select">Select</option>
    <option value="Finance">Finance</option>
    <option value="Sales">Sales</option>
    <option value="Marketing">Marketing</option>
    <option value="HR">HR</option>
    <option value="Production">Production</option>
  </select>
  <Form.Group widths='equal'>
    <Form.Field
    control={Input}
    label='Grade' required
    placeholder='' value={gradee}
    onChange={(e)=>setGrade(e.target.value)}
  />
  <Form.Field
      control={Input}
      label='Designation'
      placeholder='' value={desigg}
      onChange={(e)=>setDesigg(e.target.value)}
    />
   </Form.Group>

   <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Report to'
      placeholder='' value={reportto}
      onChange={(e)=>setReportto(e.target.value)}
    /><Form.Field
    control={Input}
    label='Branch'
    placeholder='' value={branch}
    onChange={(e)=>SetBranch(e.target.value)}
  />
   </Form.Group>
<Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Attendance & Leave Details</h4></Box>
      <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Device Id'
      placeholder='' value={deviceid}
      onChange={(e)=>setDeviceid(e.target.value)}
    /><Form.Field
    control={Input}
    label='Holidays'
    placeholder='' value={holidays}
    onChange={(e)=>setHolidays(e.target.value)}
  />
 {/*
        <Form.Field
           control={Select}
           options={optionstc}
            label='Default Shifts'
            placeholder=''
            onChange={(e)=>setShift(e.target.value)}
/>*/} </Form.Group>
   <label for="Type"> Default shifts:</label>
  <select id="Type" name="Type" onChange={(e)=>setDshift(e.target.value)} value={dshift} >
  <option value="Select">Select</option>
    <option value="Morning">Morning</option>
    <option value="Evening">Evening</option>
  </select>

<Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Bank Details</h4></Box>
      {/*
<Form.Field
         control={Select}
         options={optionstd}
            label='Salary Mode'
            placeholder=''
            onChange={(e)=>setSalarymode(e.target.value)}
          /><Form.Field
          control={Input}
          label='Bank'
          placeholder=''
          onChange={(e)=>setBank(e.target.value)}
/>*/}
   <label for="Type"> Salary Mode:</label>
  <select id="Type" name="Type" onChange={(e)=>setSalarymode(e.target.value)} value={salarymode} >
  <option value="Select">Select</option>
    <option value="Bank">Bank</option>
    <option value="Cheque">Cheque</option>
  </select>
  <Form.Group widths='equal'>
  <Form.Field
      control={Input}
      label='Bank Account #'
      placeholder='' value={bankacc}
      onChange={(e)=>setbankAcc(e.target.value)}
    />
   </Form.Group>
   <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Payroll Cost Centre'
      placeholder='' value={payrollc}
      onChange={(e)=>setPayrollc(e.target.value)}
    /><Form.Field
    control={Input}
    label='Provident Fund Account'
    placeholder='' value={pfacc}
    onChange={(e)=>setPfacc(e.target.value)}
  />  </Form.Group>

<Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Health Insurance</h4></Box>

      <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Provider'
      placeholder='' value={hprovider}
      onChange={(e)=>setHprovider(e.target.value)}
    /><Form.Field
    control={Input}
    label='Number'
    placeholder='' value={hnumber}
    onChange={(e)=>setHnumber(e.target.value)}
  />
   </Form.Group>

<Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Contact Details</h4></Box>

         {/*
<Form.Field
           control={Select}
           options={optionste}
            label='Marital Status'
            placeholder=''
            onChange={(e)=>setStatus(e.target.value)}
          /><Form.Field
          control={Input}
          label='Blood Group'
          placeholder=''
          onChange={(e)=>setBldgrp(e.target.value)}
/>*/}
   <label for="Type" padding='80px'> Marital Status:</label>
     <select id="Type" name="Type" onChange={(e)=>setStatus(e.target.value)} value={status} >
  <option value="Select">Select</option>
    <option value="Married">Married</option>
    <option value="Unmarried">Un-married</option>
  </select>
  <Form.Group widths='equal'>
  <Form.Field
      control={Input}
      label='Family Background'
      placeholder='' value={fbg}
      onChange={(e)=>setFbg(e.target.value)}
    />
   </Form.Group>
   <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Health Details'
      placeholder='' value={healthd}
      onChange={(e)=>setHealthd(e.target.value)}
    /><Form.Field
    control={Input}
    label='CNIC' required
    placeholder='' value={cnic}
    onChange={(e)=>setCnic(e.target.value)}
  />
  <Form.Field
  type='date'
      control={Input}
      label='Date of Issue'
      placeholder='' value={issuedate}
      onChange={(e)=>setIssuedate(e.target.value)}
    />
    <Form.Field
type='date'
      control={Input}
      label='Valid upto'
      placeholder='' value={expdate}
      onChange={(e)=>setExpdate(e.target.value)}
    />
   </Form.Group>
  
<Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Educational Qualification</h4></Box>

      <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='University'
      placeholder='' value={uni}
      onChange={(e)=>setUni(e.target.value)}
    /><Form.Field
    control={Input}
    label='Qualification/Program'
    placeholder='' value={program}
    onChange={(e)=>setProgram(e.target.value)}
  />
  <Form.Field
      control={Input}
      label='Level'
      placeholder='' value={level}
      onChange={(e)=>setLevel(e.target.value)}
    />
   </Form.Group> 

   <Form.Group widths='equal'>
<Form.Field
type='date'
      control={Input}
      label='Year of Passing'
      placeholder='' value={passingyr}
      onChange={(e)=>setPassingyr(e.target.value)}
    />
   </Form.Group>
   <Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Previous work Excperince</h4></Box>
   <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Company'
      placeholder='' value={excomp}
      onChange={(e)=>setExcomp(e.target.value)}
    />
     <Form.Field
      control={Input}
      label='Designation'
      placeholder='' value={exdesig}
      onChange={(e)=>setExdesig(e.target.value)}
    />
    <Form.Field
    control={Input}
    label='Salary'
    placeholder='' value={exsalary}
    onChange={(e)=>setExsalary(e.target.value)}
  />
  <Form.Field
    control={Input}
    label='Address'
    placeholder='' value={add}
    onChange={(e)=>setAdd(e.target.value)}
  />
   </Form.Group>
    
       <Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>History In Company</h4></Box>
    
      <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Branch'
      placeholder='' value={branch}
      onChange={(e)=>SetBranch(e.target.value)}
    />
     <Form.Field
     type='date'
      control={Input}
      label='Start Date'
      placeholder='' value={stdate}
      onChange={(e)=>setStdate(e.target.value)}
    />
    <Form.Field
    type='date'
    control={Input}
    label='End Date'
    placeholder='' value={endate}
    onChange={(e)=>setEndate(e.target.value)}
  />
   </Form.Group>

      <Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Employee Grade</h4></Box>

      <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Salary Structure'
      placeholder='' value={setSalarystructure}
      onChange={(e)=>setSalarystructure(e.target.value)}
    />
     <Form.Field
      control={Input}
      label='Name'
      placeholder='' value={name}
      onChange={(e)=>setName(e.target.value)}
    />
   </Form.Group>

<Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Designation & Skills</h4></Box>

      <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Designation'
      placeholder='' value={desig}
      onChange={(e)=>setDesig(e.target.value)}
    />
    <Form.Field
      control={Input}
      label='Required Skills'
      placeholder='' value={rqskills}
      onChange={(e)=>setRqskills(e.target.value)}
    />
   <Form.Field
      control={Input}
      label='Description'
      placeholder='' value={des}
      onChange={(e)=>setDes(e.target.value)}
    />
   </Form.Group>

      <Box display="flex" justifyContent="space-between"  
  backgroundColor={colors.white[500]} color={colors.blue[900]}>
      <h4>Exit</h4></Box>


      <Form.Group widths='equal'>
<Form.Field
type='date'
      control={Input}
      label='Resignation Letter Date'
      placeholder='' value={resigdate}
      onChange={(e)=>setResigdate(e.target.value)}
    />
     <Form.Field
type='date'
      control={Input}
      label='Exit in to Date'
      placeholder='' value={exdate}
      onChange={(e)=>setExdate(e.target.value)}c
    />
   <Form.Field
type='date'
      control={Input}
      label='Relieving Date'
      placeholder='' value={relievingdate}
      onChange={(e)=>setReleivingdate(e.target.value)}
    />
   </Form.Group>

   <Form.Group widths='equal'>
<Form.Field
      control={Input}
      label='Feedback'
      placeholder='' value={feedback}
      onChange={(e)=>setFeedback(e.target.value)}
    />
     <Form.Field
      control={Input}
      label='New work place '
      placeholder='' value={newplace}
      onChange={(e)=>setNewplace(e.target.value)}
    />
    <Form.Field
    control={Input}
    label='Reason for Leaving'
    placeholder='' value={reasonleaving}
    onChange={(e)=>setReasonleaving(e.target.value)}
  />
   </Form.Group>
      
<Button   
type="submit" color='#0a1f2e'
className="btn-primary"  onClick={updateAPIData} 
>Update
</Button>

</Form>
</div>
</Box>
</Box>
)

}


export default Update;