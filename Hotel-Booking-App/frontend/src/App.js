import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List"
import Hotel from "./pages/hotel/Hotel"
// import Login from "./pages/login/Login";
import Login from "./Login/index"
import Signup from "./Singup/index"
import Manage from "./pages/manage/Manage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/manage" element={<Manage/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
