import { ColorModeContext, useMode} from "./scenes/theme";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./scenes/global/Navbar";
import Topbar from "./scenes/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Read from "./scenes/empMD/index";
import Update from "./Update/Update";
/*import EmpMD from "./scenes/empMD/index";*/
import Calendar from "./scenes/calendar/calendar";
import Bar from "./scenes/bar";
import Bar2 from "./scenes/bar2";
import Pie from "./scenes/Pie";
import Line from "./scenes/line";
import Create from "./scenes/CreateMD/Create";
import Acreate from "./scenes/Attendance/Acreate";
import Aupdate from "./scenes/Attendance/Aupdate";
import Aread from "./scenes/Attendance/Aread";
import MAttread from "./scenes/Attendance/MAttread";
import MAttupdate from "./scenes/Attendance/MAttupdate";
import MAttcreate from "./scenes/Attendance/MAttcreate";
import CreateTask from "./scenes/Task/CreateTask";
import ReadTask from "./scenes/Task/ReadTask";
import UpdateTask from "./scenes/Task/UpdateTask"; 
/*import TaskManagement from "./scenes/taskM";
import Attendance from "./scenes/Attendance";
import Departments from "./scenes/department";
import Feedback from "./scenes/feedback";*/


function App() {
  const [theme, colorMode]= useMode();
  const [isNavbar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar isNavbar={Navbar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} /> 
             <Route path="/empMD" element={<Read />} />

              <Route path="/index" element={<Read />} />
              <Route path="/CreateMD" element={<Create />} />
              <Route path="/Update" element={<Update />}></Route>
              <Route path="/Acreate" element={<Acreate />}></Route>
              <Route path="/Aupdate" element={<Aupdate />}></Route>
              <Route path="/Aread" element={<Aread />}></Route>
              <Route path="/MAttread" element={<MAttread />}></Route>
              <Route path="/MAttcreate" element={<MAttcreate />}></Route>
              <Route path="/MAttupdate" element={<MAttupdate />}></Route>
              <Route path="/CreateTask" element={<CreateTask />}></Route>
              <Route path="/ReadTask" element={<ReadTask />}></Route>
              <Route path="/UpdateTask" element={<UpdateTask />}></Route>


             {/* <Route path="/TaskManagement" element={<TaskManagement />} />
              <Route path="/Attendance" element={<Attendance />} />
  <Route path="/Departments" element={<Departments />} />*/}
                       <Route path="/calendar" element={<Calendar />} />
                       <Route path="/bar" element={<Bar />} />
                       <Route path="/Pie" element={<Pie />} />
                       <Route path="/line" element={<Line />} />
                       <Route path="/bar2" element={<Bar2 />} />
{/*
  <Route path="/Feedback" element={<Feedback />} />*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
