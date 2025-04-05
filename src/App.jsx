import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/reusable/MainHeader";
import HomePage from "./components/page-level/HomePage";
import NetworkPage from "./components/page-level/NetworkPage";
import JobPage from "./components/page-level/JobPage";
import MessagesPage from "./components/page-level/MessagesPage";
import NotificationsPage from "./components/page-level/notifications-Page";
import UserProfile from "./components/page-level/UserProfile"; // ✅ Import UserProfile

function App() {
  return (
    <Router basename="/LinkedIn-Clone">
      <div className="main-container box-border w-screen pb-10">
        <MainHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mynetwork" element={<NetworkPage />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/messaging" element={<MessagesPage />} />
          <Route path="/notification-Page" element={<NotificationsPage />} />
          <Route path="/profile" element={<UserProfile />} /> {/* ✅ Fixed */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
