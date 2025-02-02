import PostListItem from "./child-level-3/PostListItem";

const PostList = () => {
    return (
        <div className="post-list">
            <div className="post-list-item-container w-full">
                <PostListItem />
            </div>
        </div>
    );
}

export default PostList;