import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Projects from "./pages/Projects";
import PriceSection from "./pages/Price-section";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/allplans" element={<PriceSection />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/project/:projectId" element={<SingleBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
