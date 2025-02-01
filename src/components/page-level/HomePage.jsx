import HomePageLeftPanel from "../page-child/HomePageLeftPanel";
import HomePageRightPanel from "../page-child/HomePageRightPanel";

const HomePage = () => {
    return (
        <div className="home-page w-full h-full mt-3">
            <HomePageLeftPanel />
            <HomePageRightPanel />
        </div>
    );
}

export default HomePage;