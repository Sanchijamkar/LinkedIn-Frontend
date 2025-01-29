
const MainHeader = () => {
    return (
        <div className="main-header w-full">
            <div className="flex gap-1 items-center">
                <img src="/public/linkedin-logo.jpg" alt="LinkdIn Logo" className="main-header-logo" />
                <img src="/public/search-icon.jpg" alt="Search Bar Icon" className="main-header-search-icon" />
                <img src="/public/home-page-icon.png" alt="Home Page Icon" className="main-header-home-icon" />
                <img src="/public/myNetwork-icon.jpg" alt="My Network Icon" className="main-header-myNetwork-icon" />
                <img src="/public/jobs-icon.png" alt="Jobs Icon" className="main-header-jobs-icon" />
                <img src="/public/messaging-icon.png" alt="Messaging Icon" className="main-header-messaging-icon" />
            </div>
        </div>
    );
}

export default MainHeader;