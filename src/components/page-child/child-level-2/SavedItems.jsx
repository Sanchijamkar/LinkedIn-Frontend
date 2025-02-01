import BookmarkIcon from "../../../assets/imgs/bookmark-icon.jpg";

const SavedItems = () => {
    return (
        <div className="saved-items w-full ps-3 pt-3 pb-3 flex items-center gap-3">
            <img src={BookmarkIcon} alt="Saved Items Icon" />
            <p>Saved items</p>
        </div>
    );
}

export default SavedItems;