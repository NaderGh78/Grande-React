import "./gallery.css";
import { useDispatch } from "react-redux";
import { setShowOverlay } from "../../redux/slices/modalSlice";
import { SectionHeading } from "../../allPagesPaths.jsx";
import { galleryData } from "../../components/common/sectionData.js";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Gallery = () => {

    const dispatch = useDispatch();

    // Function to handle image click
    const handleImageClick = (imgUrl) => {
        // Dispatch image URL to store and show overlay
        dispatch(setShowOverlay(imgUrl));
    };

    /*+++++++++++++++++++++++++++++++++++++++++++*/

    return (
        <div id="gallery" className="gallery scroll-through">
            <SectionHeading
                title="OUR EVENT GALLERY"
                subTitle="Global Grand Event on Digital Design"
            />
            <div className="gallery-content">
                <div className="container">
                    <div className="row">
                        {galleryData.map((item) => (
                            <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
                                <div className="single-img">
                                    <div className="overlay">
                                        {/* <span onClick={() => handleImageClick(item.img)}>
                                        {item.icon}</span> */}
                                        <span
                                            onClick={() => handleImageClick(process.env.PUBLIC_URL + `/${item.img}`)}
                                        >{item.icon}</span>
                                    </div>
                                    {/* <img src={item.img} alt={`gallery${item.id}`} /> */}
                                    <img src={process.env.PUBLIC_URL + `/${item.img}`} alt="logo" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn d-flex justify-content-center mt-4">
                        <button className="myRedBtn">BROWSE ALL</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery; 