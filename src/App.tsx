import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
