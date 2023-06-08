import React, { useEffect, useState, useRef  } from 'react';
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
const ReadTask=()=> {
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
      axios.get(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/Task`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
          })
  }, []);

  const setData = (data) => {
    let { id, title, description, status, tpid, deadline, completiondate,assignedto, assignedby, typeid } = data;
      localStorage.setItem('id', id);
      localStorage.setItem('title', title);
      localStorage.setItem('description', description);
      localStorage.setItem('status', status);
      localStorage.setItem('tpid', tpid);
      localStorage.setItem('deadline', deadline);
      localStorage.setItem('completiondate', completiondate);
      localStorage.setItem('assignedto', assignedto);
      localStorage.setItem('assignedby', assignedby);
      localStorage.setItem('typeid', typeid);
}

const getData = () => {
  axios.get(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/Task`)
      .then((getData) => {
          setAPIData(getData.data);
      })
}
const onDelete = (id) => {
  axios.delete(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/Task/${id}`)
  .then(() => {
      getData();
  })
}
const exportPdf = async () => {
  const doc = new jsPDF({ orientation: 'landscape' });
  const heading = 'Employee Tasks';

  const tableData = APIData.map((data) => {
    return [
      data.id,
      data.empid,
      data.title,
      data.description,
      data.status,
      data.tpid,
      data.deadline,
      data.completiondate,
      data.assignedto,
      data.assignedby,
      data.typeid,
    ];
  });
  doc.autoTable({
    head:[[
    'Id',
    'Employee Id',
    'Title',
    'Description',
    'Status',
    'TPid',
    'Deadline',
    'Completion Date',
    'Assigned to',
    'Assigned by',
    'Task Type Id',
  ]],
  body: tableData,
});
  doc.save('Task.pdf');
};

    return (
        <Box m="20px"  >
         <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Header title="Employee Tasks" subtitle="Employee Task List" />
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
            }}href='/CreateTask'
          >
Create Task    </Button> 
        </Box>
      </Box>
      
      <Box display="flex" justifyContent="space-between"  
      backgroundColor={colors.white[500]} color={colors.blue[900]}>

        <Table singleLine id='my-table'>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Employee Id</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>TPid</Table.HeaderCell>
                    <Table.HeaderCell>Deadline</Table.HeaderCell>
                    <Table.HeaderCell>Completion Date</Table.HeaderCell>
                    <Table.HeaderCell>Assigned to</Table.HeaderCell>
                    <Table.HeaderCell>Assigned by</Table.HeaderCell>
                    <Table.HeaderCell>Task Type Id</Table.HeaderCell>
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
           <Table.Cell>{data.title}</Table.Cell>
           <Table.Cell>{data.description}</Table.Cell>
           <Table.Cell>{data.status}</Table.Cell>
           <Table.Cell>{data.tpid}</Table.Cell>
           <Table.Cell>{data.deadline}</Table.Cell>
           <Table.Cell>{data.completiondate}</Table.Cell>
           <Table.Cell>{data.assignedto}</Table.Cell>
           <Table.Cell>{data.assignedby}</Table.Cell>
           <Table.Cell>{data.typeid}</Table.Cell>

           <Link to='/UpdateTask'>
  <Table.Cell> 
  <IconButton  onClick={() => setData(data)}>
        <EditIcon sx={{ color: colors.blue[900] }} />
      </IconButton>{/*
  <Button 
   sx={{
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
</Table.Body></Table>
</Box></Box>
    )
}
export default ReadTask;
