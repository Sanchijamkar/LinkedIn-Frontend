import ConnectionsIcon from "../../../assets/imgs/connections-icon.jpg";

const Connections = () => {
    return (
        <div className="connections w-full ps-3 pt-2 pb-4">
            <div className="flex items-center gap-9">
                <p>
                    Connections
                </p>
                <img src={ConnectionsIcon} alt="Connections Icon" />
            </div>
            <p>
                Grow your network
            </p>
        </div>
    );
}

export default Connections;