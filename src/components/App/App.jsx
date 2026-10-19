import { Routes, Route, useLocation } from "react-router-dom";

// my compnents
import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Events from "../Events/Events";
import Calendar from "../Calendar/Calendar";

function App() {
  const location = useLocation();

  const getPageClass = () => {
    switch (location.pathname) {
      case "/":
        return "page page--dashboard";

      case "/Events":
        return "page page--Events";

      case "/Calendar":
        return "page page--Calendar";

      default:
        return "page";
    }
  };

  return (
    <div className="App">
      <div className={getPageClass()}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/events" element={<Events />} />
          <Route path="/Calendar" element={<Calendar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
