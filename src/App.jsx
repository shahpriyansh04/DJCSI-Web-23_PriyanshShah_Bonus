import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Features from "./components/Features";
import News from "./components/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#151333] text-white h-100vh px-32 overflow-hidden">
      <Header />
      <Main />
      <Features />
      <News />
    </div>
  );
}

export default App;
