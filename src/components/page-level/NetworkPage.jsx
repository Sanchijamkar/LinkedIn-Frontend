import NetworkPageLeftPanel from "../page-child/NetworkPageLeftPanel";
import NetworkPageMainPanel from "../page-child/NetworkPageMainPanel";

const NetworkPage = () => {
    return (
        <div className="w-full">
           <NetworkPageLeftPanel />
           <div>
               <NetworkPageMainPanel />
           </div>
        </div>
    );
}

export default NetworkPage;