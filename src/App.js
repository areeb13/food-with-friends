import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Restaurants from "./pages/Restaurants";
import Winner from "./pages/Winner"; 
import "./App.css"
function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home"  element={<Home />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/winner" element={<Winner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;