import './App.css'
import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent.jsx";

function App() {


  return (
    <BrowserRouter>
        <HeaderComponent />
        <Routes >
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<EmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
        </Routes>
        <FooterComponent />

    </BrowserRouter>
  )
}

export default App
