import { aboutContentData } from "../common/sectionData";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const AboutContent = () => {
    return (
        <div className="about-content">
            <div className="container">
                <div className="row">
                    {aboutContentData?.map(item => (
                        <div className="col-xs-12 col-md-6 col-lg-4 mb-4" key={item.id}>
                            <div className="card">
                                {/* <img className="card-image-top" src={item.img} alt="img1" /> */}
                                <img className="card-image-top" src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    {/* "font-size: 13px;"*/}
                                    <p className="card-text">{item.description}</p>
                                    <a href="" className="myRedBtn">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <!-- my container ends --> */}
        </div>
    )
}

export default AboutContent;