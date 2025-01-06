import "./sponsors.css";
import { SectionHeading } from "../../allPagesPaths.jsx";
import { sponsorsData } from "../../components/common/sectionData.js";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Sponsors = () => {
    return (
        <div id="sponsors" className="sponsors scroll-through">
            <SectionHeading
                title="SPONSORS"
                subTitle="Global Grand Event on Digital Design"
            />
            <div className="sponsors-content">
                <div className="container">
                    <div className="row">
                        {
                            sponsorsData?.map(item => (
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                                    <div>
                                        {/* <img src={item.img} className="img-fluid" alt={`sponsor ${item.id}`} /> */}
                                        <img
                                            src={process.env.PUBLIC_URL + `/${item.img}`}
                                            className="img-fluid"
                                            alt={`sponsor ${item.id}`}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="myRedBtn">BECOME A SPONSOR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors;