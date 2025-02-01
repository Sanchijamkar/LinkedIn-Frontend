import HomePageLeftPanel from "../page-child/HomePageLeftPanel";
import Feed from "../page-child/Feed";
import HomePageRightPanel from "../page-child/HomePageRightPanel";

const HomePage = () => {
    return (
        <div className="home-page w-full h-full mt-3">
            <HomePageLeftPanel />
            <Feed />
            <HomePageRightPanel />
        </div>
    );
}

export default HomePage;