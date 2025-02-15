import ManageMyNetwork from "./child-level-2/ManageMyNetwork";
import AdsLinkedBanner from "./child-level-2/AdsLinkedInBanner";
import MainPageFooter from "../reusable/MainPageFooter";

const NetworkPageLeftPanel = () => {
    return (
        <div className="network-page-left-panel"> 
            <div className="manage-my-network-container mt-3 mb-5 p-3">
                <h2 className="manage-my-network pb-3">Manage my network</h2>
                <div>
                    <ManageMyNetwork />
                </div>
            </div>
            <AdsLinkedBanner />
            <MainPageFooter />
        </div>
    )
}

export default NetworkPageLeftPanel;