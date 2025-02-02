import { useNavigate, useLocation } from "react-router-dom";
import LinkedinLogo from '../../assets/imgs/linkedin-logo.jpg';
import SearchIcon from '../../assets/imgs/search-icon.jpg';
import HomePageIcon from '../../assets/imgs/home-page-icon.png';
import MyNetworkIcon from '../../assets/imgs/myNetwork-icon.jpg';
import JobsIcon from '../../assets/imgs/jobs-icon.png';
import MessagingIcon from '../../assets/imgs/messaging-icon.png';
import NotificationIcon from '../../assets/imgs/notification-icon.jpg';
import ProfilePhoto from '../../assets/imgs/profile-photo.png';

const MainHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToHome = () => {
        if (location.pathname === "/") {
            navigate(0); 
        } else {
            navigate("/", { replace: true });
        }
    };

    return (
        <div className="main-header w-full">
            <div className="flex gap-1 items-center justify-around p-2">
                <img src={LinkedinLogo} alt="LinkedIn Logo" className="main-header-logo" />
                <img src={SearchIcon} alt="Search Bar Icon" className="main-header-search-icon" />

                {/* Home Button with Refresh Fix */}
                <button onClick={ () => goToHome("/Home")}>
                    <img src={HomePageIcon} alt="Home Page Icon" className="main-header-home-icon" />
                </button>

                {/* My Network Button */}
                <button onClick={() => navigate("/mynetwork")}>
                    <img src={MyNetworkIcon} alt="My Network Icon" className="main-header-myNetwork-icon" />
                </button>

                {/* Jobs Button */}
                <button onClick={() => navigate("/jobs")}>
                    <img src={JobsIcon} alt="Jobs Icon" className="main-header-jobs-icon" />
                </button>

                {/* Messaging Button */}
                <button onClick={() => navigate("/messaging")}>
                    <img src={MessagingIcon} alt="Messaging Icon" className="main-header-messaging-icon" />
                </button>

                {/* Notification Button with Navigation */}
                <button onClick={() => navigate("/notification-page")}>
                    <img src={NotificationIcon} alt="Notification Icon" className="main-header-notification-icon" />
                </button>

                {/* Profile Photo Button */}
                <button onClick={() => navigate("/profile")}>
                    <img src={ProfilePhoto} alt="User Profile Photo" className="main-header-profile-photo" />
                </button>
            </div>
        </div>
    );
};

export default MainHeader;
