import React, { useEffect, useState  } from 'react';
import { Table, checkbox } from 'semantic-ui-react'
import axios from 'axios';
import {Box, Button} from "@mui/material";
import Header from '../../components/Header'
import { colors, useTheme } from '@mui/material'
import { tokens } from "../theme";
import { Link } from 'react-router-dom';


const ReadDepartment=()=> {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get(`https://647e18d4af984710854aee8c.mockapi.io/Deparments`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
          })
  }, []);

  const setData = (data) => {
    let { id, departmentid, name, code, deleted, createdby, createdon } = data;
      localStorage.setItem('id', id);
      localStorage.setItem('departmentid', departmentid);
      localStorage.setItem('name', name);
      localStorage.setItem('code', code);
      localStorage.setItem('deleted', deleted);
      localStorage.setItem('createdby', createdby);
      localStorage.setItem('createdon', createdon);
}

const getData = () => {
  axios.get(`https://647e18d4af984710854aee8c.mockapi.io/Deparments`)
      .then((getData) => {
          setAPIData(getData.data);
      })
}
const onDelete = (id) => {
  axios.delete(`https://647e18d4af984710854aee8c.mockapi.io/Deparments/${id}`)
  .then(() => {
      getData();
  })
}
    return (
        <Box m="20px">
         <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Header title="Departments" subtitle="Departments List" />
        <Box>
          <Button 
            sx={{
              backgroundColor: colors.white[100],
              color: colors.blue[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px", borderRadius:'15px', boxShadow:'1px 2px 9px #aed7f4'
            }}href='/CDepartment'
          >
Add Department   </Button> 
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between"  
      backgroundColor={colors.white[500]} color={colors.blue[900]}>
        <Table singleLine>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Department Id</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Code</Table.HeaderCell>
                        <Table.HeaderCell>Deleted</Table.HeaderCell>
                        <Table.HeaderCell>Created by</Table.HeaderCell>
                        <Table.HeaderCell>Created on</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
           <Table.Body>
  {APIData.map((data) => {
     return (
      
       <Table.Row>
          <Table.Cell>{data.id}</Table.Cell>
           <Table.Cell>{data.departmentid}</Table.Cell>
           <Table.Cell>{data.name}</Table.Cell>
           <Table.Cell>{data.code}</Table.Cell>
           <Table.Cell>{data.deleted}</Table.Cell>
           <Table.Cell>{data.createdby}</Table.Cell>
           <Table.Cell>{data.createdon}</Table.Cell>

           <Link to='/UpdateDepartment'>
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
export default ReadDepartment;