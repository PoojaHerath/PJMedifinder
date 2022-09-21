import CusLogin from "./pages/customerLogin/CusLogin";
import CusReg from "./pages/customerReg/CusReg";
import PharmReg from "./pages/pharmReg/PharmReg";
import PharmLogin from "./pages/pharmLogin/PharmLogin";
import Verification from "./pages/emailVerification/Verification";
import PharmHome from "./pages/pharmHome/PharmHome";
import CusVerification from "./pages/cusEmailVerification/CusVerification";
import AddMedicine from "./pages/addMedicine/AddMedicine";
import MedList from "./pages/medList/MedList";

//import Location from "./pages/location/location";
import Home from "./pages/home/Home";
import Topbar from "./topbar/Topbar";
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
    <Topbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CusLogin" element={user ? <Home /> : <CusLogin />} />
      <Route path="/CusReg" element={user ? <Home/> : <CusReg />} />
      <Route path="/PharmLogin" element={<PharmLogin/>} />
      <Route path="/PharmReg" element={<PharmReg />} />
      <Route path="/Verification" element={<Verification />} />
      <Route path="/PharmHome" element={<PharmHome />} />
      <Route path="/CusVerification" element={<CusVerification />} />
      <Route path="/AddMedicine" element={<AddMedicine />} />
      <Route path="/MedList" element={<MedList />} />
    </Routes>
    <Routes>
    </Routes>
    </Router>
  );
};

export default App;
