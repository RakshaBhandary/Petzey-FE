import React, { useDebugValue, useState } from 'react';
import './App.css';
import Sidebar from "./components/Common/sidebar/leftsidebar";
import Header from "./components/Common/header/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/User/user'
import Home from "./components/Firebase/Home/Home";
import Login from "./components/Firebase/Login/Login";
import Signup from "./components/Firebase/Signup/Signup";
import { useEffect } from 'react';
import { auth } from "./firebase";
import "./App.css";


//RECEPTIONIST FLOW
import Recpprofile from "./components/Receptionist/Profile/recpprofile";
import NewAppointmentr from './components/Receptionist/Dashboard/newappointment/newappointment';
import Apporeportr from './components/Receptionist/Dashboard/AppoReport/apporeport';
import Allappointmentr from './components/Receptionist/Dashboard/dashboard/allappointment';
import Petview from './components/Receptionist/Pets/petview';

//DOCTOR FLOW

import Doctorprofile from "./components/Doctor/Profile/Doctor_profile/doctor_profile";
import Allappointmentd from './components/Doctor/Dashboard/dashboard/dashboard';
import NewAppointmentd from './components/Doctor/Dashboard/newappointment/newappointment'
import { render } from '@testing-library/react';


//PATIENT FLOW

 import Patientprofile from './components/Paient/Profile/patient_profile'
 import Allappointmentp from './components/Paient/DashBoard/dashboard/patientdashboard'
 import NewAppointmentp from './components/Paient/DashBoard/newappointment/newappointmer'
 import Doctorview from './components/Receptionist/Doctors/doctorview'
 import Apporeport from './components/Receptionist/Dashboard/AppoReport/apporeport'


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
 return(
    <div>
        {/* <Link to={Login} className='nav-link'></Link> */}
        <Router>
          <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
          </Routes>
        </Router>
        <Router>       
          <User/>
          <Routes>
          {/* <Route path="/profile" element={<profile/>} /> */}
          <Route path="/user" element={<User/>}/>
          
          <Route path='/allappointments' exact element={<Allappointmentr/>}/>
            <Route path='/allappointments/newappointment' element={<NewAppointmentr/>}/>
            <Route path='/allappointments/apporeport' element={<Apporeportr/>}/> 
            <Route path='/petview' element={<Petview/>}/>
            <Route path='/doctorview' element={<Doctorview/>}/>
            <Route path='/recpprofile' element={<Recpprofile/>}/>

                                  {/* DOCTOR FLOW */}

            <Route path='/dashboard' element={<Allappointmentd/>}/>
            <Route path='/dashboard/newappointmer' element={<NewAppointmentd/>}/>
            <Route path='/petview' element={<Petview/>}/>
            <Route path='/doctor_profile' element={<Doctorprofile/>}/>

                                            {/*PATIENT FLOW*/}              
            <Route path='/patientdashboard' element={<Allappointmentp/>}/> 
            <Route path='/patientdashboard/newappointment' element={<NewAppointmentp/>}/> 
            <Route path='/doctorview' element={<Doctorview/>}/>
            <Route path='/patient_profile' element={<Patientprofile/>}/>
          </Routes> 

        </Router>             
      </div>
    )
  }
  
  export default App;
