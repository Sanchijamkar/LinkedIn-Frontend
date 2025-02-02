import React from "react";
import WelcomeBanner from "./child-level-2/WelcomeBanner";
import CreatePost from "./child-level-2/CreatePost";
import PostList from "./child-level-2/PostList";

const Feed = () => {
    return (
        <div className="mt-3">
            <WelcomeBanner />
            <CreatePost />
            <div className="create-post-divider flex items-center justify-between mt-1">
                <div></div>
                <p className="flex items-center gap-1">
                    Sort by: 
                    <span className="flex items-center">
                        Top
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </span>
                </p>
            </div>
            <PostList />
            <div className="post-show-more-updates text-center mt-3 flex justify-center">
                <p>Show more feed updates</p>
            </div>
        </div>
    );
}

export default Feed;