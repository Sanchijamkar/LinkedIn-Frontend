import { useNavigate, useLocation } from "react-router-dom";
import LinkedinLogo from '../../assets/imgs/linkedin-logo.jpg';
import SearchIcon from '../../assets/imgs/search-icon.jpg';
import ProfilePhoto from '../../assets/imgs/Sanchi.jpg';
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
        <div className="main-header w-full py-1 xs:py-0">
            <div className="flex justify-around lg:max-w-screen-lg mx-auto">
                <div className="w-full flex gap-8  items-center justify-around px-2">
                    <div className="flex gap-3 me-3 items-center w-fit">
                        <img src={LinkedinLogo} alt="LinkedIn Logo" className="main-header-logo" />
                        <div className="flex items-center gap-1">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="size-6 lg:hidden">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <p className="header-icon-text hidden d:block lg:hidden">Search</p>
                            </div>
                            <input type="text" placeholder="Search" className="main-header-search-bar hidden lg:block px-3 pb-1" />
                        </div>
                    </div>
                    <div className="flex items-center w-fit gap-8">
                        {/* Home Button with Refresh Fix */}
                        <button onClick={ () => goToHome("/home")} className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-51.2 -60.2 614.40 614.40" class="w-6 h-6 fill-current text-gray-800">
                            <polygon points="416 174.74 416 48 336 48 336 106.45 256 32 0 272 64 272 64 480 208 480 208 320 304 320 304 480 448 480 448 272 512 272 416 174.74"/>
                            </svg>
                            <p className="header-icon-text hidden d:block">Home</p>
                        </button>
                        {/* My Network Button */}
                        <button onClick={() => navigate("/mynetwork")} className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 52 52" class="w-5 h-5 fill-current text-gray-800 transform scale-x-[-1]"><g>
                            <path d="M42,22.3c-2.8-1.1-3.2-2.2-3.2-3.3s0.8-2.2,1.8-3c1.7-1.4,2.6-3.5,2.6-5.8c0-4.4-2.9-8.2-8-8.2 c-4.7,0-7.5,3.2-7.9,7.1c0,0.4,0.2,
                            0.7,0.5,0.9c3.8,2.4,6.1,6.6,6.1,11.7c0,3.8-1.5,7.2-4.2,9.6c-0.2,0.2-0.2,0.6,0,0.8 c0.7,0.5,2.3,1.2,3.3,1.7c0.3,0.1,0.5,0.2,0.8,0.2h12.1c2.3,
                            0,4.1-1.9,4.1-4v-0.6C50,25.9,46.2,24,42,22.3z"/>
                            <path d="M28.6,36.2c-3.4-1.4-3.9-2.6-3.9-3.9c0-1.3,1-2.6,2.1-3.6c2-1.7,3.1-4.1,3.1-6.9c0-5.2-3.4-9.7-9.6-9.7 c-6.1,0-9.6,4.5-9.6,9.7c0,2.8,
                            1.1,5.2,3.1,6.9c1.1,1,2.1,2.3,2.1,3.6c0,1.3-0.5,2.6-4,3.9c-5,2-9.9,4.3-9.9,8.5V45v1 c0,2.2,1.8,4,4.1,4h27.7c2.3,0,4.2-1.8,4.2-4v-1v-0.4C38,
                            40.5,33.6,38.2,28.6,36.2z"/>
                            </g>
                            </svg>
                            <p className="header-icon-text hidden d:block mt-1">My Network</p>
                        </button>
                        {/* Jobs Button */}
                        <button onClick={() => navigate("/jobs")} className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.4 -1.8  28.80 28.80" class="w-6 h-6 fill-current text-gray-800 stroke-current stroke-0">
                            <path d="M21,6H3A1,1,0,0,0,2,7v6.28a2,2,0,0,0,1.37,1.9l4.52,1.51a13.13,13.13,0,0,0,8.22,0l4.54-1.52A2,2,0,0,0,22,13.28V7A1,1,0,0,0,21,6Zm-8,
                            7H11a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Zm7.6,3.25-.5,4a2,2,0,0,1-2,1.76H5.88a2,2,0,0,1-2-1.76l-.5-4,4.18,1.39a14.06,14.06,0,0,0,4.42.71,14.16,14.16,
                            0,0,0,4.43-.71ZM14,2H10A4,4,0,0,0,6.13,5H8.27A2,2,0,0,1,10,4h4a2,2,0,0,1,1.73,1h2.14A4,4,0,0,0,14,2Z" />
                            </svg>
                            <p className="header-icon-text hidden d:block">Jobs</p>
                        </button>
                        {/* Messaging Button */}
                        <button onClick={() => navigate("/messaging")} className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 24 24" class="w-5 h-5 fill-current text-gray-800 transform scale-x-[-1]">
                            <path d="M19.91,16.51A8.45,8.45,0,0,0,22,11c0-5-4.49-9-10-9S2,6,2,11s4.49,9,10,9a10.9,10.9,0,0,0,3-.41l4.59,2.3A.91.91,0,0,0,20,
                            22a1,1,0,0,0,.62-.22,1,1,0,0,0,.35-1ZM8,12a1,1,0,1,1,1-1A1,1,0,0,1,8,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,12Z" />
                            </svg>
                            <p className="header-icon-text hidden d:block mt-1">Messaging</p>
                        </button>
                        {/* Notification Button with Navigation */}
                        <button onClick={() => navigate("/notification-page")} className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.7 -2 20.40 19.40" class="w-6 h-6 fill-current text-gray-800">
                            <g fill="none" fill-rule="evenodd">
                            <g transform="translate(2,0)" fill="currentColor">
                            <path d="M8.141,1.318 C8.141,0.607 7.582,0.032 6.893,0.032 C6.204,0.032 5.646,0.607 5.646,1.318 C5.646,1.398 5.655,
                            1.478 5.668,1.555 C3.002,2.594 1,4.772 1,10 L13,10 C13.001,4.771 10.784,2.595 8.117,1.555 C8.132,1.478 8.141,1.398 8.141,1.318 Z" />
                            <path d="M14,13 L0,13 L0.906,11 L12.812,11 L14,13 Z" />
                            <path d="M6.961,16 C8.045,16 8.922,15.123 8.922,14.043 L5,14.043 C5,15.123 5.878,16 6.961,16 L6.961,16 Z" />
                            </g>
                            </g>
                            </svg>
                           <p className="header-icon-text hidden d:block">Notification</p>
                      </button>
                        {/* Profile Photo Button */}
                        <button onClick={() => navigate("/profile")} className="flex flex-col items-center">
                            <img src={ProfilePhoto} alt="User Profile Photo" className="main-header-profile-photo" />
                            <p className="header-icon-text hidden d:block mt-1">Profile</p>
                        </button>
                    </div>
                    <div className="hidden xxs:block xs:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                </div>
                <div className="main-header-divider hidden xs:block"></div>
                <div className="main-header-right-part hidden xs:flex px-5 sm:px-8">
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col items-center">
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
                            <p className="header-icon-text hidden d:block">Business</p>
                        </div>
                        <div className="hidden sm:block mt-1">
                            <div className="flex flex-col items-center">
                                <img src={PremiumIcon} alt="Premium Icon" />
                                <p className="text-nowrap mt-1">Try Premium for PHP0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
