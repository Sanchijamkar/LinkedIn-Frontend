import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/reusable/MainHeader";
import HomePage from "./components/page-level/HomePage";

function App() {
  return (
    <Router>
      <div className="main-container box-border w-screen">
        <MainHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/**/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
