import React from "react";
import WelcomeBanner from "./child-level-2/WelcomeBanner";
import CreatePost from "./child-level-2/CreatePost";

const Feed = () => {
    return (
        <div className="mt-4 ">
            <WelcomeBanner />
            <CreatePost />
        </div>
    );
}

export default Feed;