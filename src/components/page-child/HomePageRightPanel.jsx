import FollowSuggestions from "./child-level-2/FollowSuggestions";
import AddToYourFeedIcon from "../../assets/imgs/add-to-your-feed-icon.webp";

const HomePageRightPanel = () => {
    return (
        <div className="home-page-right-panel p-3 mt-3">
            <div className="flex items-center justify-between">
                <h2>Add to your feed</h2>
                <img src={AddToYourFeedIcon} alt="Add to your Feed Icon" />
            </div>
            <FollowSuggestions />
        </div>
    );
}

export default HomePageRightPanel;