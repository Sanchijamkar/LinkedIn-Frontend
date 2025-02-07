import DailyPuzzleGames from "./child-level-2/DailyPuzzleGames";
import FollowSuggestions from "./child-level-2/FollowSuggestions";
import AddToYourFeedIcon from "../../assets/imgs/add-to-your-feed-icon.webp";
import AdsLinkedInBanner from "./child-level-2/AdsLinkedInBanner";


const HomePageRightPanel = () => {
    return (
        <div className="home-page-right-panel mt-3 dl:mt-0">
            <div className="home-page-right-panel-container p-3 mb-2 ss:border-l ss:border-r ss:rounded-lg ss:border-bdr-separator">
                <div className="flex items-center justify-between mb-3">
                    <h2>Today’s puzzle games</h2>
                </div>
                <DailyPuzzleGames />
            </div>
            <div className="home-page-right-panel-container p-3 ss:border-l ss:border-r ss:rounded-lg ss:border-bdr-separator">
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