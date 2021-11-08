import Navbar from "./components/layout//Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero";
import About from "./components/pages/About";
import Posts from "./components/pages/Posts";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
