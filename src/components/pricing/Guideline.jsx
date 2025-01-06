import { LiaCheckCircle } from "react-icons/lia";
import { SectionHeading } from "../../allPagesPaths.jsx";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Guideline = () => {
    return (
        <div className="guideline">
            <SectionHeading
                title="Event Guideline"
                subTitle="Global Grand Event on Digital Design"
            />
            <div className="guideline-content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md- 6 col-lg-6">
                            <div>
                                {/* <img src="/assets/images/about/about.jpg" className="img-fluid" alt="about" /> */}
                                <img
                                    src={process.env.PUBLIC_URL + '/assets/images/about/about.jpg'}
                                    className="img-fluid"
                                    alt="about" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md- 6 col-lg-6">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries.
                            </p>
                            <div>
                                <h6>Check List</h6>
                                <ul>
                                    <li><LiaCheckCircle /> Lorem Ipsum is simply dummy</li>
                                    <li><LiaCheckCircle /> Ipsum passages, and more recently</li>
                                    <li><LiaCheckCircle /> PageMaker including versions</li>
                                    <li><LiaCheckCircle /> Lorem Ipsum is simply dummy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guideline;