import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/navbar';
import HomeInit from './pages/homeinit';
import Admin from './pages/admin';
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from "./users/ViewUser";
import ViewComment from './comments/ViewComment';
import AddComment from "./comments/AddComment";
import DeleteComment from "./comments/DeleteComment";
import Mapa from './pages/map';
import Login from './users/Login';
import 'font-awesome/css/font-awesome.css';
import Dashboard from './pages/dashboard';
import ViewWheel from './wheels/ViewWheel';
import AddWheel from './wheels/AddWheel';
import DeleteWheels from './wheels/DeleteWheel';






function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeInit />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/mapa" element={<HomeInit />} />
          <Route exact path="/map" element={<Mapa />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path='/dashboard' Component={Dashboard}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/viewwheels" element={<ViewWheel />} />
          <Route exact path="/addwheels" element={<AddWheel />} />
          <Route exact path='/edituser/:id' element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/viewcomments" element={<ViewComment />} />
          <Route exact path="/addcomments" element={<AddComment/>} />
          <Route exact path="/deletecomments" element={<DeleteComment />} />
          <Route exact path="/deletewheels" element={<DeleteWheels/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
