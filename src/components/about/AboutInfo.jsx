import { aboutData } from "../common/sectionData";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const AboutInfo = () => {
    return (
        <div className="about-info">
            <div className="container">
                <div className="row">
                    {
                        aboutData?.map(item => (
                            <div className="col-xs-12 col-md-6 col-lg-3" key={item.id}>
                                <div>
                                    {item.icon}
                                    <strong>{item.title}</strong>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutInfo;