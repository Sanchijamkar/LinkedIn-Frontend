import FollowSuggestions from "./child-level-2/FollowSuggestions";
import AddToYourFeedIcon from "../../assets/imgs/add-to-your-feed-icon.webp";
import AdsLinkedInBanner from "./child-level-2/AdsLinkedInBanner";


const HomePageRightPanel = () => {
    return (
        <div className="home-page-right-panel mt-3 dl:mt-0">
            <div className="home-page-right-panel-container p-3">
                <div className="flex items-center justify-between mb-2">
                    <h2>Add to your feed</h2>
                    <img src={AddToYourFeedIcon} alt="Add to your Feed Icon" />
                </div>
                <FollowSuggestions />
            </div>
            <AdsLinkedInBanner />
        </div>
    );
}

export default HomePageRightPanel;