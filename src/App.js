import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router";
import Homes from "./Component/HomePage/Homes";
import Home from "./Component/Restaurant/Home"

  function App(){

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes/>}></Route>
          <Route path="/restaurants" element={<Home/>}></Route>
          
        </Routes>
        </BrowserRouter>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
