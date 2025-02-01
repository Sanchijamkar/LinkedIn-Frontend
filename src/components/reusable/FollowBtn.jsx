
const FollowBtn = () => {
    return (
        <div className="follow-btn mt-2">
            <button className="flex items-center justify-center gap-1">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <h3>Follow</h3>
            </button>
        </div>
    );
}

export default FollowBtn;