import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import {React} from "react"
import Mamou from "./components/Mamou";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {



    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element ={<Login />}></Route>
                    <Route path="/mamoucorno" element ={<Mamou />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
