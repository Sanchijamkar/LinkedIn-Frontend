import FollowBtn from "../../reusable/FollowBtn";
import W3SchooolsPhoto from "../../../assets/imgs/w3schools-photo.png"

const FollowSuggestions = () => {
    return (
        <div className="follow-suggestions ps-2">
            <div className="follow-suggestions-list flex items-start gap-3">
                <img src={W3SchooolsPhoto} alt="User Profile Photo" />
                <div>
                    <h3>W3Schools.com</h3>
                    <p>Company • E-Learning Providers</p>
                    <FollowBtn  />
                </div>
            </div>
            <div className="follow-suggestions-list flex items-start gap-3 mt-2">
                <img src={W3SchooolsPhoto} alt="User Profile Photo" />
                <div>
                    <h3>W4Schools.com</h3>
                    <p>Company • E-Learning Providers</p>
                    <FollowBtn  />
                </div>
            </div>
            <div className="follow-suggestions-list flex items-start gap-3 mt-2">
                <img src={W3SchooolsPhoto} alt="User Profile Photo" />
                <div>
                    <h3>W5Schools.com</h3>
                    <p>Company • E-Learning Providers</p>
                    <FollowBtn  />
                </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
                <p>
                    View all recommendations
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

            </div>
        </div>
    );
}

export default FollowSuggestions;