import "./choose-us.css";
import { chooseData } from "../../components/common/sectionData";
import { SectionHeading } from "../../allPagesPaths.jsx";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const ChooseUs = () => {
    return (
        <div className="choose-us text-center">
            <SectionHeading
                title="Why You Choose Us?"
                subTitle="Global Grand Event on Digital Design"
            />
            <div className="choose-us-content">
                <div className="container">
                    <div className="row">
                        {chooseData?.map(item => (
                            <div className="col-xs-12 col-md-6 col-lg-4  padding-none" key={item.id}>
                                {item.icon}
                                <span>{item.title}</span>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <!-- my container ends --> */}
            </div>
        </div>
    )
}

export default ChooseUs; 