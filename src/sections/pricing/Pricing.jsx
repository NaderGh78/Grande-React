import "./pricing.css";
import PricingPrice from "../../components/pricing/PricingPrice";
import Guideline from "../../components/pricing/Guideline";
import LatestNews from "../../components/pricing/LatestNews";
import NewsLetter from "../../components/pricing/NewsLetter";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Pricing = () => {
    return (
        <div id="pricing" className="pricing scroll-through">
            <div className="pricing-content">
                <PricingPrice />
                <Guideline />
                <LatestNews />
                <NewsLetter />
            </div>
        </div>
    )
}

export default Pricing;