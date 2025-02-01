import UserProfilePhoto from "../../../assets/imgs/profile-photo.png";
import UserProfileCardOverlay from "../../../assets/imgs/user-background-overlay.jpg";

const UserProfileCard = () => {
    return (
        <div className="user-profile-card relative ">
            <img src={UserProfileCardOverlay} alt="User Profile Card Overlay" className="user-profile-card-overlay w-full h-12 absolute left-0 top-0" />
            <div className="user-profile-card-header"></div>
            <div className="user-profile-card-info flex flex-col items-center justify-center gap-1 p-2">
                <img src={UserProfilePhoto} alt="Profile Photo" />
                <h2 className="mt-2">Glenn Mark Anino</h2>
                <p>Student at University of Science and Technology of Southern Philippines</p>
            </div>
        </div>
    );
}

export default UserProfileCard;