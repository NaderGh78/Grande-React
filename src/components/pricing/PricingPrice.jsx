import { LiaCheckCircle } from "react-icons/lia";
import { SectionHeading } from "../../allPagesPaths.jsx";
import { priceData } from "../../components/common/sectionData.js";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const PricingPrice = () => {
    return (
        <div className="pricing-price">
            <SectionHeading
                title="Our Pricing"
                subTitle="Global Grand Event on Digital Design"
            />
            <div className="container">
                <div className="row">
                    {
                        priceData?.map(item => (
                            <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
                                <div>
                                    {item.icon}
                                    <h6>{item.title}</h6>
                                    <strong>${item.price}</strong>
                                    <p>{item.subTitle}</p>
                                    <ul>
                                        <li><LiaCheckCircle /> Coffee Break</li>
                                        <li><LiaCheckCircle /> Entrance</li>
                                        <li><LiaCheckCircle /> Lunch on all days</li>
                                        <li><LiaCheckCircle /> Access to all areas</li>
                                        <li><LiaCheckCircle /> Certificate</li>
                                        <li><LiaCheckCircle /> Workshop</li>
                                    </ul>
                                    <div className="d-flex justify-content-center">
                                        <button className="myRedBtn">BUY TICKET</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingPrice;