import HomePageLeftPanel from "../page-child/HomePageLeftPanel";
import Feed from "../page-child/Feed";
import HomePageRightPanel from "../page-child/HomePageRightPanel";
import MainPageFooter from "../reusable/MainPageFooter";

const HomePage = () => {
    return (
        <div className="home-page w-full h-full mt-3 ss:w-590 ss:mx-auto smd:w-779">
            <div className="md:flex gap-2">
                <HomePageLeftPanel />
                <div className="show-more-less mt-3 flex justify-center">
                    <p className="flex items-center md:hidden">
                        Show less
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </p>
                </div>
                <div>
                    <Feed />
                    <HomePageRightPanel />
                    <MainPageFooter />
                </div>
            </div>
        </div>
    );
}

export default HomePage;