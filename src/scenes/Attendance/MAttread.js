import React, { useEffect, useState  } from 'react';
import { Table, checkbox } from 'semantic-ui-react'
import axios from 'axios';
import {Box, Button} from "@mui/material";
import Header from '../../components/Header'
import { colors, useTheme } from '@mui/material'
import { tokens } from "../theme";
import { Link } from 'react-router-dom';


const MAttread=()=> {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/AttendanceMark`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
          })
  }, []);

  const setData = (data) => {
    let { id, empid, date, checkbox, shift, lateentry, earlyexit } = data;
      localStorage.setItem('id', id);
      localStorage.setItem('empid', empid);
      localStorage.setItem('date', date);
      localStorage.setItem('checkbox', checkbox);
      localStorage.setItem('shift', shift);
      localStorage.setItem('lateentry', lateentry);
      localStorage.setItem('earlyexit', earlyexit);
}

const getData = () => {
  axios.get(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/AttendanceMark`)
      .then((getData) => {
          setAPIData(getData.data);
      })
}
const onDelete = (id) => {
  axios.delete(`https://64665758ba7110b6639e57a4.mockapi.io/api/attendance/AttendanceMark/${id}`)
  .then(() => {
      getData();
  })
}
    return (
        <div>
           <Header title="Employee Attendance" subtitle="Employee Attendance List" />
      <Box display="flex" justifyContent="space-between"  
      backgroundColor={colors.white[500]} color={colors.blue[900]}>
        <Table singleLine>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Employee Id</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Shift</Table.HeaderCell>
                        <Table.HeaderCell>Late Entry</Table.HeaderCell>
                        <Table.HeaderCell>Early Exit</Table.HeaderCell>
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
           <Table.Cell>{data.date}</Table.Cell>
           <Table.Cell>{data.shift}</Table.Cell>
           <Table.Cell>{data.lateentry}</Table.Cell>
           <Table.Cell>{data.earlyexit}</Table.Cell>

           <Link to='/MAttupdate'>
  <Table.Cell> 
  <Button primary className='ui primary button'
  onClick={() => setData(data)}>Update</Button>
   </Table.Cell>
</Link>
<Table.Cell>
   <Button primary className='ui primary button'
    onClick={() => onDelete(data.id)}>Delete</Button>
   </Table.Cell>
        </Table.Row>
   )})}
</Table.Body></Table>
</Box>
        </div>
    )
}
export default MAttread;
