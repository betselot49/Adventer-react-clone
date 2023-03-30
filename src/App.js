import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Service from "./components/Service/Service";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;