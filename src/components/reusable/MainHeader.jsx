import LinkedinLogo from '../../assets/imgs/linkedin-logo.jpg';
import SearchIcon from '../../assets/imgs/search-icon.jpg';
import HomePageIcon from '../../assets/imgs/home-page-icon.png';
import MyNetworkIcon from '../../assets/imgs/myNetwork-icon.jpg';
import JobsIcon from '../../assets/imgs/jobs-icon.png';
import MessagingIcon from '../../assets/imgs/messaging-icon.png';

const MainHeader = () => {
    return (
        <div className="main-header w-full">
            <div className="flex gap-1 items-center">
                <img src={LinkedinLogo} alt="LinkdIn Logo" className="main-header-logo" />
                <img src={SearchIcon} alt="Search Bar Icon" className="main-header-search-icon" />
                <img src={HomePageIcon} alt="Home Page Icon" className="main-header-home-icon" />
                <img src={MyNetworkIcon} alt="My Network Icon" className="main-header-myNetwork-icon" />
                <img src={JobsIcon} alt="Jobs Icon" className="main-header-jobs-icon" />
                <img src={MessagingIcon} alt="Messaging Icon" className="main-header-messaging-icon" />
            </div>
        </div>
    );
}

export default MainHeader;