import "./App.css";
import Body3 from "./Component/Body3";
import Head1 from "./Component/Header/Head1";
import Body2 from "./Component/Home/Body2";
import Body4 from "./Component/Home/Body4";
import Body5 from "./Component/Home/Body5";
import Body6 from "./Component/Home/Body6";
import Body7 from "./Component/Home/Body7";
import Body8 from "./Component/Home/Body8";
import Home from "./Component/Home/Home";
import Home1 from "./Component/Home/Home1";
import Home2 from "./Component/Home/Home2";
import New from "./Component/Home/New";
import Try from "./Component/Home/Try";


function App() {
  return (
    // <main class="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 class="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p class="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" />
    // </main>
    <div className="bg-gray-100">
      <Home/>
      <Home1/>
      <Home2/>
      <Try/>
      <Body2/>
      <Body3/>
      <Body4/>
      <Body5/>
      <Body6/>
      <Body7/>
      <Body8/>
      <New/>
      {/* <Head1/> */}
    </div>
  );
}

export default App;
