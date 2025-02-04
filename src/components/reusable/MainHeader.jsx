import { useNavigate, useLocation } from "react-router-dom";
import LinkedinLogo from '../../assets/imgs/linkedin-logo.jpg';
import SearchIcon from '../../assets/imgs/search-icon.jpg';
import HomePageIcon from '../../assets/imgs/home-page-icon.png';
import MyNetworkIcon from '../../assets/imgs/myNetwork-icon.jpg';
import JobsIcon from '../../assets/imgs/jobs-icon.png';
import MessagingIcon from '../../assets/imgs/messaging-icon.png';
import NotificationIcon from '../../assets/imgs/notification-icon.jpg';
import ProfilePhoto from '../../assets/imgs/profile-photo.png';
import PremiumIcon from "../../assets/imgs/premium-icon.webp";

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
        <div className="main-header w-full py-1">
            <div className="flex justify-around lg:max-w-screen-lg mx-auto">
                <div className="w-full flex gap-3  items-center justify-around px-2">
                    <div className="flex gap-4 items-center w-fit">
                        <img src={LinkedinLogo} alt="LinkedIn Logo" className="main-header-logo" />
                        <div className="flex items-center gap-1">
                            <img src={SearchIcon} alt="Search Bar Icon" className="main-header-search-icon lg:hidden" />
                            <input type="text" placeholder="Search" className="main-header-search-bar hidden d:block px-3 pb-1" />
                        </div>
                    </div>
                    {/* Home Button with Refresh Fix */}
                    <button onClick={ () => goToHome("/home")}>
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
                    <div className="hidden xxs:block xs:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                </div>
                <div className="main-header-divider hidden xs:block"></div>
                <div className="main-header-right-part hidden xs:flex xs:px-5">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill={"black"}
                            >
                                <rect x="3" y="3" width="5" height="5" rx="1" />
                                <rect x="10" y="3" width="5" height="5" rx="1" />
                                <rect x="17" y="3" width="5" height="5" rx="1" />
                                <rect x="3" y="10" width="5" height="5" rx="1" />
                                <rect x="10" y="10" width="5" height="5" rx="1" />
                                <rect x="17" y="10" width="5" height="5" rx="1" />
                                <rect x="3" y="17" width="5" height="5" rx="1" />
                                <rect x="10" y="17" width="5" height="5" rx="1" />
                                <rect x="17" y="17" width="5" height="5" rx="1" />
                            </svg>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex flex-col items-center">
                                <img src={PremiumIcon} alt="Premium Icon" />
                                <p className="text-nowrap">Try Premium for PHP0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
