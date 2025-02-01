import HomePageLeftPanel from "../page-child/HomePageLeftPanel";
import Feed from "../page-child/Feed";
import HomePageRightPanel from "../page-child/HomePageRightPanel";
import MainPageFooter from "../reusable/MainPageFooter";

const HomePage = () => {
    return (
        <div className="home-page w-full h-full mt-3">
            <HomePageLeftPanel />
            <Feed />
            <HomePageRightPanel />
            <MainPageFooter />
        </div>
    );
}

export default HomePage;