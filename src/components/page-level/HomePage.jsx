import HomePageLeftPanel from "../page-child/HomePageLeftPanel";
import HomePageRightPanel from "../page-child/HomePageRightPanel";
import Feed from "../page-child/Feed";

const HomePage = () => {
    return (
        <div className="home-page w-full h-full mt-3">
            <HomePageLeftPanel />
            <HomePageRightPanel />
            <Feed />
        </div>
    );
}

export default HomePage;