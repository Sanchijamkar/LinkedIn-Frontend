import HomePageLeftPanel from "../page-child/HomePageLeftPanel";
import Feed from "../page-child/Feed";

const HomePage = () => {
    return (
        <div className="home-page w-full h-full mt-3">
            <HomePageLeftPanel />
            <Feed />
        </div>
    );
}

export default HomePage;