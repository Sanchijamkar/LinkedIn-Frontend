import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/reusable/MainHeader";
import HomePage from "./components/page-level/HomePage";
import NetworkPage from "./components/page-level/NetworkPage";

function App() {
  return (
    <Router basename="/LinkedIn-Clone">
      <div className="main-container box-border w-screen pb-10">
        <MainHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mynetwork" element={<NetworkPage />} />
          {/**/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
