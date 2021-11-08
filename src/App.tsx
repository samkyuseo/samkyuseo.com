import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero";
import About from "./components/layout/About";
import Videos from "./components/layout/Videos";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
