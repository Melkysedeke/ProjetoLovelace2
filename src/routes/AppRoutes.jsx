import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Tool from "../pages/Tool/Tool.jsx";
import Practice from "../pages/Practice/Practice.jsx";
import AccessActivity from "../pages/AccessActivity/AccessActivity.jsx";
import Activity from "../pages/Activity/Activity.jsx";
import AccessCode from "../pages/AccessCode/AccessCode.jsx";
import FormActivity from "../components/formActivity/FormActivity.jsx"
import EditActivity from "../components/formActivity/EditActivity.jsx";
import ActivityResponses from "../components/formActivity/ActivityResponses.jsx"
import ActivityGalery from "../components/formActivity/ActivityGallery.jsx"
import Profile from "../components/formActivity/Profile.jsx"

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/Lovelace_1.2.4/" element={<Login/>} />
          <Route path="/Lovelace_1.2.4/reg" element={<Register/>} />
          <Route path="/Lovelace_1.2.4/tool" element={<Tool/>} />
          <Route path="/Lovelace_1.2.4/practice" element={<Practice/>} />
          <Route path='/Lovelace_1.2.4/cA' element={<FormActivity/>}/> {/*Form Activity*/}
          <Route path='/Lovelace_1.2.4/aA/:id' element={<AccessActivity/>}/> {/*Access Activity*/}
          <Route path='/Lovelace_1.2.4/a/:id' element={<Activity/>}/> {/*Activity Details*/}
          <Route path='/Lovelace_1.2.4/aC' element={<AccessCode/>}/> {/*Access Code*/}
          <Route path='/Lovelace_1.2.4/eA/:id' element={<EditActivity/>}/> 
          <Route path='/Lovelace_1.2.4/rA/:id' element={<ActivityResponses/>}/> 
          <Route path='/Lovelace_1.2.4/aG' element={<ActivityGalery/>}/> {/*User Area*/}
          <Route path="/Lovelace_1.2.4/profile" element={<Profile />}/>
        </Routes>
    </BrowserRouter>
  );
}
