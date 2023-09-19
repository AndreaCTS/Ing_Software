import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/navbar';
import HomeInit from './pages/homeinit';
import Home from './pages/home';
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from "./users/ViewUser";
import Mapa from './map';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeInit />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/mapa" element={<HomeInit />} />
          <Route exact path="/map" element={<Mapa />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path='/edituser/:id' element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
