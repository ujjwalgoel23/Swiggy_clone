import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router";
import Homes from "./Component/HomePage/Homes";
import Home from "./Component/Restaurant/Home";
import RestaurantMenu from "./Component/Restaurant/RestaurantMenu"
import SearchFood from "./Component/Restaurant/SearchFood";
import SecondaryHome from "./Component/Restaurant/SecondaryHome";
import { store} from "./Component/Redux/Stores";
import {Provider} from "react-redux";

  function App(){

    return (
      <Provider store={store}>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes/>}></Route>
          <Route element={<SecondaryHome/>}>
          <Route path="/restaurants" element={<Home/>}></Route>
          <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
          <Route path="/city/delhi/:id/search" element={<SearchFood/>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
        </Provider>

    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
