import "./faq.css";
import { LiaPenSolid } from "react-icons/lia";
import { SectionHeading } from "../../allPagesPaths.jsx";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Faq = () => {
    return (
        <div id="faq" className="faq scroll-through">
            <SectionHeading
                title="ASK QUESTION?"
                subTitle="Global Grand Event on Digital Design"
            />
            <div className="faq-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="accordion mb-3" id="accordion-one">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse1"
                                            aria-expanded="true"
                                            aria-controls="collapse1">
                                            <span><LiaPenSolid /></span>
                                            How to make a new event?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse1"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordion-one"
                                    >
                                        <div className="accordion-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                            brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse2"
                                            aria-expanded="false"
                                            aria-controls="collapse2"
                                        >
                                            <span><LiaPenSolid /></span>
                                            Which payment methods do you accept?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse2"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordion-one"
                                    >
                                        <div className="accordion-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                            brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse3"
                                            aria-expanded="false"
                                            aria-controls="collapse3"
                                        >
                                            <span><LiaPenSolid /></span>
                                            Which document can i bring to meeting?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse3"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordion-one"
                                    >
                                        <div className="accordion-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                            brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse4"
                                            aria-expanded="false"
                                            aria-controls="collapse4"
                                        >
                                            <span><LiaPenSolid /></span>
                                            Who can join at the live event venue?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse4"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordion-one"
                                    >
                                        <div className="accordion-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                            brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end accordion-one --> */}
                        </div>
                        {/* <!-- end first col --> */}

                        {/* =============================================== */}
                        {/* =============================================== */}

                        <div className="col-lg-6 col-md-12">
                            <div className="accordion" id="accordion-two">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse5"
                                            aria-expanded="true"
                                            aria-controls="collapse5">
                                            <span><LiaPenSolid /></span>
                                            How to make a new event?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse5"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordion-two"
                                    >
                                        <div className="accordion-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                            brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse6"
                                            aria-expanded="false"
                                            aria-controls="collapse6"
                                        >
                                            <span><LiaPenSolid /></span>
                                            Which payment methods do you accept?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse6"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordion-two"
                                    >
                                        <div className="accordion-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                            brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse7"
                                            aria-expanded="false"
                                            aria-controls="collapse7"
                                        >
                                            <span><LiaPenSolid /></span>
                                            Which document can i bring to meeting?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse7"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordion-two"
                                    >
                                        <div className="accordion-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                            brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse8"
                                            aria-expanded="false"
                                            aria-controls="collapse8"
                                        >
                                            <span><LiaPenSolid /></span>
                                            Who can join at the live event venue?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse8"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordion-two"
                                    >
                                        <div className="accordion-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                            brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end accordion-two --> */}
                        </div>
                        {/* <!-- end second col --> */}
                    </div>
                </div>
            </div>
            {/* <!-- faq content ends --> */}
        </div>
    )
}

export default Faq;