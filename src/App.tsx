import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Tech from "./pages/Tech";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="*" element={<About />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
