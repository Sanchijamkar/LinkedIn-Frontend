import UserProfileCard from "./child-level-2/UserProfileCard";
import ViewAllAnalytics from "./child-level-2/ViewAllAnalytics";
import Connections from "./child-level-2/connections";
import SavedItems from "./child-level-2/SavedItems";
import PremiumIcon from "../../assets/imgs/premium-icon.webp";
import GroupsAndEvents from "./child-level-2/GroupsAndEvents";

const HomePageLeftPanel = () => {
    return (
        <div className="home-page-left-panel">
            <UserProfileCard />
            <ViewAllAnalytics />
            <Connections />
            <div className="premium-section p-3">
                <p>Grow your career with premium</p>
                <div className="flex items-center gap-3">
                    <img src={PremiumIcon} alt="Premium Icon" className="mt-1" />
                    <p>Try Premium for PHP0</p>
                </div>
            </div>
            <SavedItems />
            <GroupsAndEvents />
        </div>
    );
}

export default HomePageLeftPanel;