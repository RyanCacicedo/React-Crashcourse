import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home.jsx'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
     <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/:username" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
