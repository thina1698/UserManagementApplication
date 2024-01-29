import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navibar from './components/Navibar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Adduser from './users/Adduser';
import Edituser from './users/Edituser';
import Viewuser from './users/Viewuser';


function App() {
  return (
    <div className="App">
      <Router>
      <Navibar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addUser" element={<Adduser/>}/>
        <Route exact path="/editUser/:id" element={<Edituser/>}/>        
        <Route exact path="/showUser/:id" element={<Viewuser/>}/>        

      </Routes>
      </Router>
    </div>
  );
}

export default App;
