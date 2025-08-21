
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Article from "./Components/Article";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import Register from "./Components/Register";







                        
                                                                                                              

function App() {
  return (
   <>
   <Header/>
   
    
      <Routes>

        <Route path="/"  element={<Home />} />
         <Route path="/about"  element={<About />} />
          <Route path="/contact" element={<Contact />}/>
           <Route path="/article" element={<Article/>} />
             <Route path="/login" element={<Login/>} />
             <Route path="/forgotpassword" element={<ForgotPassword/>}/>
             <Route path="/register" element={<Register/>}/>

      </Routes> 
      </>
    
  );
}

export default App;