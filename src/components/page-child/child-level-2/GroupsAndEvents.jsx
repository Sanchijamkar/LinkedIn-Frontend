import Groups from "../../reusable/Groups";
import Events from "../../reusable/Events";


const GroupsAndEvents = () => {
    return (
        <div className="groups-and-events">
            <div className="groups-and-events-divider"></div>
            <div className="p-3">
                <Groups />
                <Events />
            </div>
            <div className="group-and-events-discover-more text-center p-2 pt-3">
                <p>Discover more</p>
            </div>
        </div>
    );
}

export default GroupsAndEvents;