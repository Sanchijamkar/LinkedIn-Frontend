import AdsBanner from "../../../assets/imgs/ads-banner.jpg";  

const AdsLinkedInBanner = () => {
    return (
        <div className="ads-linkedin-banner flex items-center justify-center mt-2 mb-5 ss:rounded-lg">
            <img src={AdsBanner} alt="Ads Banner" className="ss:rounded-lg" />
        </div>
    );
}

export default AdsLinkedInBanner;