/*import {Box, IconButton, useTheme} from '@mui/material';
import { useContext } from "react";
import { ColorModeContext, tokens } from '../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import  NotificationsOutlinedIcon  from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import  PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined';
import  SearchIcon  from '@mui/icons-material/Search'; 

const Topbar=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return(
        <Box display ='flex' justifyContent="space-between" p={2}> 
       <Box display ='flex' backgroundColor={colors.primary[400]}
       borderRadius="3px">
        <InputBase sx={{ml:2, flex:1}} placeholder="Search"/>
        <IconButton type="button" sx={{p:1}}>
            <SearchIcon/>
        </IconButton>
       </Box>
              
    <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}><LightModeOutlinedIcon/></IconButton>
{theme.palette.mode==='dark'?(
    <DarkModeOutlinedIcon/>
):(
    <LightModeOutlinedIcon/>
)}
        
        <IconButton><PersonOutlinedIcon/></IconButton>
        <IconButton><NotificationsOutlinedIcon/></IconButton>
        <IconButton><SettingsOutlinedIcon/></IconButton>
            </Box>
            </Box>
    )
}
export default Topbar;*/

import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor=
        {colors.white[100]}
        borderRadius="10px" boxShadow='1px 2px 9px #aed7f4' 
      >
        <InputBase sx={{ color:colors.blue[900], ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ color:colors.blue[900], p: 1 } }>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon  sx={{ color: colors.blue[900]}}
            />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton >
        <IconButton>
          <NotificationsOutlinedIcon sx={{ color: colors.blue[900]}}/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon sx={{ color: colors.blue[900]}}/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon sx={{ color: colors.blue[900]}}/>
        </IconButton>
      </Box>
      
    </Box>
  );
};

export default Topbar;
