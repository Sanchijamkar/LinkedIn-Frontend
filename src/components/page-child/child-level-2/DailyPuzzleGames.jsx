import TangoLogo from "../../../assets/imgs/Tango-logo.png"
import QueensLogo from "../../../assets/imgs/Queens-logo.png"
import PinpointLogo from "../../../assets/imgs/Pinpoint-logo.png"
import CrossclimbLogo from "../../../assets/imgs/Crossclimb-logo.png"

const DailyPuzzleGames = () => {
    return (
        <div className="daily-games ps-2">
            <div className="daily-games-list flex justify-between gap-3">
                <img src={TangoLogo} alt="User Profile Photo" />
                <div className="flex-grow">
                    <h3>Tango</h3>
                    <p>Harmonize the grid</p>
                </div>   
                <div>
                    <svg class="w-[28px] h-[28px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="m9 5 7 7-7 7"/>
                    </svg>
                </div>
            </div>
            <div className="daily-games-list flex justify-between gap-3 mt-2">
                <img src={QueensLogo} alt="User Profile Photo" />
                <div className="flex-grow">
                    <h3>Queens</h3>
                    <p>Crown each region</p>
                </div>   
                <div>
                    <svg class="w-[28px] h-[28px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="m9 5 7 7-7 7"/>
                    </svg>
                </div>
            </div>
            <div className="daily-games-list flex justify-between gap-3 mt-2">
                <img src={PinpointLogo} alt="User Profile Photo" />
                <div className="flex-grow">
                    <h3>Pinpoint</h3>
                    <p>Guess the category</p>
                </div>   
                <div>
                    <svg class="w-[28px] h-[28px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="m9 5 7 7-7 7"/>
                    </svg>
                </div>   
            </div>
            <div className="daily-games-list flex justify-between gap-3 mt-2">
                <img src={CrossclimbLogo} alt="User Profile Photo" />
                <div className="flex-grow">
                    <h3>Crossclimb</h3>
                    <p>Unlock a trivia ladder</p>
                </div>   
                <div>
                    <svg class="w-[28px] h-[28px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="m9 5 7 7-7 7"/>
                    </svg>
                </div>   
            </div>       
        </div>
    );
}

export default DailyPuzzleGames;