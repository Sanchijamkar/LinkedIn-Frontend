import UserProfilePhoto from "../../../assets/imgs/profile-photo.png";
import UserProfileCardOverlay from "../../../assets/imgs/user-background-overlay.jpg";
import USTPLogo from "../../../assets/imgs/ustp-logo.png";

const UserProfileCard = () => {
    return (
        <div className="user-profile-card relative">
            <img src={UserProfileCardOverlay} alt="User Profile Card Overlay" className="user-profile-card-overlay w-full h-14 absolute left-0 top-0" />
            <div className="user-profile-card-header"></div>
            <div className="user-profile-card-info flex flex-col items-start justify-center gap-1 p-2 ps-3 pt-4">
                <img src={UserProfilePhoto} alt="Profile Photo" />
                <h2 className="mt-0">John Cyril Espina</h2>
                <p className="user-profile-university">Student at University of Science and Technology of Southern Philippines</p>
                <p>Cagayan de Oro, Philippines</p>
                <div className="user-profile-university-logo flex items-center gap-1">
                    <img src={USTPLogo} alt="University Logo" />
                    <p className="mt-2 pe-1">University of Science and Technology of Southern Philippines</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfileCard;