import "./contact.css";
import { SectionHeading } from "../../allPagesPaths.jsx";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Contact = () => {
    return (
        <div id="contact" className="contact scroll-through">
            <SectionHeading
                title="Drop A Message"
                subTitle="Global Grand Event on Digital Design"
            />
            <div className="contact-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-12 col-xs-12">
                            <div className="form-box">
                                <form action="">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="EMAIL"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="subject"
                                                    placeholder="SUBJECT"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    rows="4"
                                                    name="msg"
                                                    className="form-control"></textarea>
                                            </div>
                                        </div>

                                    </div>
                                    <button className="btn btn-block">SEND US NOW</button>
                                </form>
                            </div>
                            {/* <!-- from box ends --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;