import { Routes, Route, useLocation } from "react-router-dom";

// my compnents
import "./App.css";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Upcoming from "../Upcoming/Upcoming";
import Categories from "../Categories/Categories";

function App() {
  const location = useLocation();

  const getPageClass = () => {
    switch (location.pathname) {
      case "/":
        return "page page--dashboard";

      case "/upcoming":
        return "page page--upcoming";

      case "/categories":
        return "page page--categories";

      default:
        return "page";
    }
  };

  return (
    <div className="App">
      <div className={getPageClass()}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
