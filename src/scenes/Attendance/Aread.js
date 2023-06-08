import React, { useEffect, useState  } from 'react';
import { Table, checkbox } from 'semantic-ui-react'
import axios from 'axios';
import {Box, Button, IconButton, Menu, MenuItem} from "@mui/material";
import Header from '../../components/Header'
import { colors, useTheme } from '@mui/material'
import { tokens } from "../theme";
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const Aread=()=> {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/Attendance`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
          })
  }, []);

  const setData = (data) => {
    let { id, empid, fromdate, todate, checkbox, reason } = data;
      localStorage.setItem('id', id);
      localStorage.setItem('empid', empid);
      localStorage.setItem('fromdate', fromdate);
      localStorage.setItem('todate', todate);
      localStorage.setItem('checkbox', checkbox);
      localStorage.setItem('reason', reason);
}

const getData = () => {
  axios.get(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/Attendance`)
      .then((getData) => {
          setAPIData(getData.data);
      })
}
const onDelete = (id) => {
  axios.delete(`https://646296267a9eead6fad2c898.mockapi.io/api/V1/Attendance/${id}`)
  .then(() => {
      getData();
  })
}
const exportPdf = async()=>{
  const doc = new jsPDF({orientation:'landscape'})
  
  const tableData = APIData.map((data) => {
    return [data.id, data.empid, data.fromdate, data.todate, data.reason];
  });
  doc.autoTable({
    head: [['Id', 'Employee Id', 'From Date', 'To Date', 'Reason']],
    body: tableData,
  });
  doc.save("Attendance.pdf");
};
return (
<Box>          
<Box display="flex" justifyContent="space-between" alignItems="center" >
  <Header title="Employee Attendance" subtitle="Employee Attendance Requests List" />
  <Box>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <IconButton onClick={handleMenuOpen}>
          <MoreVertIcon sx={{ color: colors.blue[900] }} />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            style: {
              color:"#0a1f2e", width:"200px", borderRadius:'15px', border:'1px solid #ccc',
              backgroundColor: "#fbfbff",
            },
          }}
        >
          <MenuItem   onClick={handleMenuClose}>Import</MenuItem>
          <MenuItem   onClick={exportPdf}>Export</MenuItem>
        </Menu></Box>
          <Button 
            sx={{
              backgroundColor: colors.white[100],
              color: colors.blue[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px", borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
            }}href='/Acreate'
          >
Create Attendance Request </Button> 
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between"  
      backgroundColor={colors.white[500]} color={colors.blue[900]}>
    <div style={{ height: '550px', overflow: 'auto', width:'1180px', backgroundColor: '#f4f5ff'}}>    
        <Table 
        singleLine id='my-table'>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Employee Id</Table.HeaderCell>

                        <Table.HeaderCell>From Date</Table.HeaderCell>
                        <Table.HeaderCell>To Date</Table.HeaderCell>
                        <Table.HeaderCell>Reason</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
           <Table.Body>
  {APIData.map((data) => {
     return (
      
       <Table.Row>
          <Table.Cell>{data.id}</Table.Cell>
           <Table.Cell>{data.empid}</Table.Cell>
           <Table.Cell>{data.fromdate}</Table.Cell>
           <Table.Cell>{data.todate}</Table.Cell>
           <Table.Cell>{data.reason}</Table.Cell>
           <Link to='/Aupdate'>
  <Table.Cell> 
  <IconButton  onClick={() => setData(data)}>
        <EditIcon sx={{ color: colors.blue[900] }} />
      </IconButton>{/*
  <Button  sx={{
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
   <Button  sx={{
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
    
    )    }
export default Aread;
