import NetworkPageLeftPanel from "../page-child/NetworkPageLeftPanel";
import NetworkPageRightPanel from "../page-child/NetworkPageRightPanel";

const NetworkPage = () => {
    return (
        <div className="w-full">
           <NetworkPageLeftPanel />
           <div>
               <NetworkPageRightPanel />
           </div>
        </div>
    );
}

export default NetworkPage;