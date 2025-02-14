import ManageMyNetwork from "./child-level-2/ManageMyNetwork";

const NetworkPageLeftPanel = () => {
    return (
        <div className="network-page-left-panel mt-3 p-3"> 
            <h2 className="manage-my-network pb-3">Manage my network</h2>
            <div>
                <ManageMyNetwork /> 
            </div>
        </div>
    )
}

export default NetworkPageLeftPanel;