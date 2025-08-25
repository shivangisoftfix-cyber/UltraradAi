import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Article from "./Components/Article";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import Register from "./Components/Register";
import Wrapper from "./Components/Wrapper";


function App() {
  return (
    <>
      {/* Uncomment this if you want the Header always visible */}
      {/* <Header /> */}
      

      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Home />
            </Wrapper>
          }
        />
        <Route path="/about" element={<Wrapper>
          <About />
          </Wrapper>
        } />
        <Route path="/contact" element={<Wrapper>
          <Contact/>
          </Wrapper>} />
        <Route path="/article" element={
          <Wrapper>
          <Article />
          </Wrapper> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
