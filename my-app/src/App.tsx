import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import Container from "@mui/material/Container";

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
