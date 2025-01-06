import { useState } from "react";
import { SectionHeading } from "../../../src/allPagesPaths.jsx";
import { schedulesDate } from "../common/sectionData.js";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const SchedulesTable = () => {

    const [active, setActive] = useState(1);
    // const [openAcc, setOpenAcc] = useState();

    const [shwoAccordion, setShowAccordion] = useState('event-accordion1');

    /*+++++++++++++++++++++++++++++++++++++++++++*/

    const showAccordionHandler = (event) => {
        setShowAccordion(event.currentTarget.id);
    }

    /*+++++++++++++++++++++++++++++++++++++++++++*/

    return (
        <div className="schedules-table">
            <SectionHeading
                title="Event Schedules"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor"
            />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="tabs-links">
                            <ul>
                                {
                                    schedulesDate?.map((li, idx) => (
                                        <li
                                            onClick={() => setActive(li.id)}
                                            key={li.id}
                                        >
                                            <div
                                                className={active === li.id ? "active-tab" : ""}
                                                id={li.accordionId}
                                                onClick={showAccordionHandler}
                                            >
                                                <h6 className="mb-0 text-dark">{li.day}</h6>
                                                <small className="text-secondary">{li.date}</small>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <!-- first col ends --> */}

                    {/* +++++++++++++++++++++++++++++++++++++++++++ */}

                    {/* event-accordion */}
                    <div className="col-lg-9">
                        <div
                            id="event-accordion1"
                            className={`${shwoAccordion === "event-accordion1" ? "showAcc event-accordion" : "event-accordion"}`}
                        >
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapsA"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="left">
                                            {/* <img src="assets/images/speaker/speakers-1.jpg" className="img-fluid" alt="speakers-1" /> */}
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/speaker/speakers-1.jpg'}
                                                className="img-fluid"
                                                alt="speakers-1" />
                                        </div>
                                        <div className="right">
                                            <small>10am - 12:30pm</small>
                                            <h5>Monday 14 February</h5>
                                            <span>David Warner</span>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="collapsA"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#event-accordion1"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus
                                            lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.
                                        </p>
                                        {/*  style="font-size: 13px;" */}
                                        <div>
                                            <span className="text-danger">Location:</span>
                                            Hall 1 , Building A, Golden Street, Southafrica
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapsB"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="left">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/speaker/speakers-2.jpg'}
                                                className="img-fluid"
                                                alt="speakers-2" />
                                        </div>
                                        <div className="right">
                                            <small>10am - 12:30pm</small>
                                            <h5>Monday 14 February</h5>
                                            <span>David Warner</span>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="collapsB"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#event-accordion1"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus
                                            lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.
                                        </p>
                                        {/*  style="font-size: 13px;" */}
                                        <div>
                                            <span className="text-danger">Location:</span>
                                            Hall 1 , Building A, Golden Street, Southafrica
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end accordion 1 --> */}

                        {/* +++++++++++++++++++++++++++++++++++++++++++ */}

                        <div
                            id="event-accordion2"
                            className={`${shwoAccordion === "event-accordion2" ? "showAcc event-accordion" : "event-accordion"}`}
                        >
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapsC"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="left">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/speaker/speakers-1.jpg'}
                                                className="img-fluid"
                                                alt="speakers-1" />
                                        </div>
                                        <div className="right">
                                            <small>10am - 12:30pm</small>
                                            <h5>Thuesday 15 February</h5>
                                            <span>David Warner</span>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="collapsC"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#event-accordion2"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus
                                            lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.
                                        </p>
                                        {/*  style="font-size: 13px;" */}
                                        <div>
                                            <span className="text-danger">Location:</span>
                                            Hall 1 , Building A, Golden Street, Southafrica
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapsD"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="left">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/speaker/speakers-2.jpg'}
                                                className="img-fluid"
                                                alt="speakers-1" />
                                        </div>
                                        <div className="right">
                                            <small>10am - 12:30pm</small>
                                            <h5>Thuesday 15 February</h5>
                                            <span>David Warner</span>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="collapsD"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#event-accordion2"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus
                                            lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.
                                        </p>
                                        {/*  style="font-size: 13px;" */}
                                        <div>
                                            <span className="text-danger">Location:</span>
                                            Hall 1 , Building A, Golden Street, Southafrica
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapsE"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="left">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/speaker/speakers-3.jpg'}
                                                className="img-fluid"
                                                alt="speakers-3" />
                                        </div>
                                        <div className="right">
                                            <small>10am - 12:30pm</small>
                                            <h5>Thuesday 15 February</h5>
                                            <span>David Warner</span>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="collapsE"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#event-accordion2"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus
                                            lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.
                                        </p>
                                        {/*  style="font-size: 13px;" */}
                                        <div>
                                            <span className="text-danger">Location:</span>
                                            Hall 1 , Building A, Golden Street, Southafrica
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end accordion 2 --> */}

                        {/* +++++++++++++++++++++++++++++++++++++++++++ */}

                        <div
                            id="event-accordion3"
                            className={`${shwoAccordion === "event-accordion3" ? "showAcc event-accordion" : "event-accordion"}`}
                        >
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapsF"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="left">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/speaker/speakers-1.jpg'}
                                                className="img-fluid"
                                                alt="speakers-1" />
                                        </div>
                                        <div className="right">
                                            <small>10am - 12:30pm</small>
                                            <h5>Sunday 18 February</h5>
                                            <span>David Warner</span>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="collapsF"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#event-accordion3"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus
                                            lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.
                                        </p>
                                        {/*  style="font-size: 13px;" */}
                                        <div>
                                            <span className="text-danger">Location:</span>
                                            Hall 1 , Building A, Golden Street, Southafrica
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapsG"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="left">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/speaker/speakers-2.jpg'}
                                                className="img-fluid"
                                                alt="speakers-2" />
                                        </div>
                                        <div className="right">
                                            <small>10am - 12:30pm</small>
                                            <h5>Sunday 18 February</h5>
                                            <span>David Warner</span>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="collapsG"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#event-accordion1"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus
                                            lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.
                                        </p>
                                        {/*  style="font-size: 13px;" */}
                                        <div>
                                            <span className="text-danger">Location:</span>
                                            Hall 1 , Building A, Golden Street, Southafrica
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end accordion 3 --> */}

                    </div>
                    {/* <!-- second col ends --> */}
                </div>
                {/* <!-- end row --> */}
            </div>
        </div>
    )
}

export default SchedulesTable;