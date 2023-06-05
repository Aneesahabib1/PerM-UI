import React, { useEffect, useState  } from 'react';
import { Table, checkbox } from 'semantic-ui-react'
import axios from 'axios';
import {Box, Button} from "@mui/material";
import Header from '../../components/Header'
import { colors, useTheme } from '@mui/material'
import { tokens } from "../theme";
import { Link } from 'react-router-dom';


const ReadTask=()=> {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
    return (
        <Box m="20px">
         <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Header title="Employee Tasks" subtitle="Employee Task List" />
        <Box>
          <Button 
            sx={{
              backgroundColor: colors.white[100],
              color: colors.blue[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px", borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
            }}href='/CreateTask'
          >
Create Task          </Button> 
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between"  
      backgroundColor={colors.white[500]} color={colors.blue[900]}>
        <Table singleLine>
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
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
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
  <Button 
   sx={{
    backgroundColor: colors.white[100],
    color: colors.blue[900],
    fontSize: "14px",
    fontWeight: "bold",
    padding: "10px 20px", borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
  }}
  onClick={() => setData(data)}>Update</Button>
   </Table.Cell>
</Link>
<Table.Cell>
   <Button  sx={{
              backgroundColor: colors.white[100],
              color: colors.blue[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px", borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
            }}
    onClick={() => onDelete(data.id)}>Delete</Button>
   </Table.Cell>
        </Table.Row>
   )})}
</Table.Body></Table>
</Box></Box>
    )
}
export default ReadTask;
