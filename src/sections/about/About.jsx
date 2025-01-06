import "./about.css";
import AboutContent from "../../components/about/AboutContent";
import AboutInfo from "../../components/about/AboutInfo";
import { SectionHeading } from "../../allPagesPaths.jsx";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const About = () => {
    return (
        <div id="about" className="about scroll-through">
            <SectionHeading
                title="About This Events"
                subTitle="Global Grand Event on Digital Design"
            />
            <AboutContent />
            <AboutInfo />
        </div>
    )
}

export default About;