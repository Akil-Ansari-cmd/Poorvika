import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Poorvika from "./Component";
import Head5 from "./Component/Header/Head5";
import Head6 from "./Component/Header/Head6";
import Detail from "./Component/Header/Detail";
import Bottom from "./Component/Bottom/Bottom";
import Home from "./Component/Home/Home";
import Home1 from "./Component/Home/Home1";
import New from "./Component/Home/New";
import Product from "./Component/Detail/Product";

function App() {
  const product = [{
    id:"1",
    name:"iphone",
  },{
    id:"2",
    name:"iphone",
  },{
    id:"3",
    name:"iphone",
  },{
    id:"4",
    name:"iphone",
  },{
    id:"5",
    name:"iphone",
  }]
  return (
  
    // <main class="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 class="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p class="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" />
    // </main>
  <>
  <BrowserRouter>
  <Home/>
  <Home1/>
  <Routes>
    <Route path='/' element={<Poorvika/>}/>
    <Route path="/Wish" element={<Head5/>}/>
    <Route path="/Product" element={<Head6/>}/>
    <Route path="/Bottom" element={<Bottom/>}/>
    <Route path="/productdetail" element={<Product/>}/>
  </Routes>
  <New/>
  </BrowserRouter>
  </>
  )
}

export default App;
