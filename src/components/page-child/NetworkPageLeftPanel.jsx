import MyNetworkConnection from "./child-level-2/MyNetworkConnection";

const NetworkPageLeftPanel = () => {
    return (
        <div>
            <h2>Manage my network</h2>
            <div>
                <MyNetworkConnection /> 
            </div>
        </div>
    )
}

export default NetworkPageLeftPanel;