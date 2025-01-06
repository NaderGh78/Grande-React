import "./footer.css";
import { LiaFacebookF } from "react-icons/lia";
import { LiaTwitter } from "react-icons/lia";
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaCheckSquareSolid } from "react-icons/lia";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Footer = () => {
    return (
        <footer>
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div>
                                <a href="">
                                    {/* <img src="assets/images/logo.png" alt="logo" /> */}
                                    <img
                                        src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                                        alt="logo" />
                                </a>
                                <p className="text-white mt-4">
                                    Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut
                                    labore el dolore alg minim veniam quis nostrud ncididunt.
                                </p>
                            </div>
                        </div>
                        {/* <!-- first col ends --> */}

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <h5 className="text-white">QUICK LINKS</h5>
                            <ul className="list-unstyled mt-3">
                                <li><a href="" className="text-white">About Conference</a></li>
                                <li><a href="" className="text-white">Our Speakers</a></li>
                                <li><a href="" className="text-white">Event Shedule</a></li>
                                <li><a href="" className="text-white">Latest News</a></li>
                                <li><a href="" className="text-white">Event Photo Gallery</a></li>
                            </ul>
                        </div>
                        {/* <!-- second col ends --> */}

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div>
                                <h5 className="text-white">RECENT POSTS</h5>
                                <div className="recent-post-info mt-4">
                                    <img
                                        src={process.env.PUBLIC_URL + '/assets/images/art/a1.jpg'}
                                        alt="art 1"
                                        className="img-fluid" />
                                    <div>
                                        <a href="">Lorem ipsm dolor sumit.</a>

                                        <h6>October 12, 2025</h6>
                                    </div>
                                </div>
                                <div className="recent-post-info">
                                    <img
                                        src={process.env.PUBLIC_URL + '/assets/images/art/a2.jpg'}
                                        alt="art 1"
                                        className="img-fluid" />
                                    <div>
                                        <a href="">Lorem ipsm dolor sumit.</a>
                                        <h6>October 12, 2025</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- third col ends --> */}

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <h5 className="text-white">SUBSCRIBE US</h5>
                            <form action="">
                                <input type="text" className="form-control" placeholder="Your Email" />
                                <button><LiaCheckSquareSolid /></button>
                            </form>

                            <div className="follow-us">
                                <h6 className="text-white">FOLLOW US ON</h6>
                                <ul className="d-flex list-unstyled">
                                    <li><a href=""><LiaFacebookF /></a></li>
                                    <li><a href=""><LiaTwitter /></a></li>
                                    <li><a href=""><LiaLinkedinIn /></a></li>
                                    <li><a href=""><LiaInstagram /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- fourth col ends --> */}
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                © Developed by Nader G
            </div>
        </footer>
    )
}

export default Footer;