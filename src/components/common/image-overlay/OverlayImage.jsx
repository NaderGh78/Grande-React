import { useSelector, useDispatch } from "react-redux";
import { setHideOverlay } from "../../../redux/slices/modalSlice";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const OverlayImage = () => {

    const dispatch = useDispatch();

    const { showOverlay, imageUrl } = useSelector((state) => state.overlay);

    // hide the overlay
    const closeOverlay = () => {
        dispatch(setHideOverlay());
    };

    // cos the image inside overlay still exist but without any source,therfore check if the showOverlay already true
    if (!showOverlay) return null;

    /*+++++++++++++++++++++++++++++++++++++++++++*/

    return (
        <div
            id="show-image-overlay"
            className={`${(showOverlay) ? "show" : ""}`} onClick={closeOverlay}
        >
            {/* Prevent closing when clicking the image */}
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                <img
                    src={imageUrl}
                    alt="gallery"
                    className={`${(showOverlay) ? "show overlay-img" : "overlay-img"}`}
                />
            </div>
        </div>
    );
};

export default OverlayImage; 