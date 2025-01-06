import { SectionHeading } from "../../allPagesPaths.jsx";
import { latestNewsData } from "../common/sectionData.js";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const LatestNews = () => {
    return (
        <div className="latest-news">
            <SectionHeading
                title="Our Latest News & Articles"
                subTitle="Global Grand Event on Digital Design"
            />
            <div className="latest-news-content">
                <div className="container">
                    <div className="row">
                        {
                            latestNewsData?.map(item => (
                                <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
                                    <div className="card">
                                        <div className="img-handler">
                                            {/* <img className="card-image-top" src={item.img} alt={item.author} /> */}
                                            <img
                                                className="card-image-top"
                                                src={process.env.PUBLIC_URL + `/${item.img}`}
                                                alt={item.author} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.category}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <div>
                                                <span>{item.date} |</span>
                                                <a href="">by {item.author}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="myRedBtn">READ MORE NEWS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews;