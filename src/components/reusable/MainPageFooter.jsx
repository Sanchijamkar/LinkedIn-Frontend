import LinkedInLogo from "../../assets/imgs/linkedin-logo.jpg"

const MainPageFooter = () => {
    return (
        <div className="main-page-footer mt-3 mb-2 px-6">
            <div className="text-center">
                <a href="/" target="_blank">About</a>
                <a href="/" target="_blank">Accessibility</a>
                <a href="/" target="_blank">Help Center</a>
                <a href="/" target="_blank">Privacy & Terms</a>
                <a href="/" target="_blank">Ad Choices</a>
                <a href="/" target="_blank">Advertising</a>
                <a href="/" target="_blank">Business Services</a>
                <a href="/" target="_blank">Get the LinkedIn app</a>
                <a href="/" target="_blank">More</a>
            </div>
            <div className="main-page-footer-copyright flex items-center justify-center gap-2 mt-3">
                <div className="flex items-center">
                    <p>LinkedIn</p>
                    <img src={LinkedInLogo} alt="LinkedIn Logo" />
                </div>
                <p className="text-nowrap">LinkedIn Corporation © 2025</p>
            </div>
        </div>
    );
}
// testing kay diko maka push
export default MainPageFooter;