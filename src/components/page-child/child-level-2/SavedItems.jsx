import BookmarkIcon from "../../../assets/imgs/bookmark-icon.jpg";

const SavedItems = () => {
    return (
        <div className="saved-items w-full ps-3 pt-3 pb-3 flex items-center gap-3 border-b  border-bdr-separator ss:rounded-br-lg ss:rounded-bl-lg">
            <img src={BookmarkIcon} alt="Saved Items Icon" />
            <p>Saved items</p>
        </div>
    );
}

export default SavedItems;