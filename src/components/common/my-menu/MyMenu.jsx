import { useState } from "react";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const MyMenu = () => {

    // close the menu in small devices when jump to section
    const [expanded, setExpanded] = useState(false);

    /*+++++++++++++++++++++++++++++++++++++++++++*/

    // show fixed menu when scroll window
    const showFixedMenuHandler = () => {

        const getMenu = document.querySelector(".my-menu");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

            getMenu.classList.add("sticky-menu");

        } else {

            getMenu.classList.remove("sticky-menu");

        }

    }

    window.addEventListener("scroll", showFixedMenuHandler);

    /*+++++++++++++++++++++++++++++++++++++++++++*/

    return (
        <div className="my-menu">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg p-0">
                    <div className="container-fluid">
                        <a href="index.html" className="navbar-brand">
                            {/* <img src="assets/images/logo.png" alt="logo" /> */}
                            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive"
                            aria-controls="navbarNav"
                            aria-expanded={expanded}
                            aria-label="Toggle navigation"
                            onClick={() => setExpanded(!expanded)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className={`${expanded ? "collapse navbar-collapse show" : "collapse navbar-collapse"}`}
                            id="navbarResponsive"
                        >
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active">
                                    <a
                                        className="nav-link active-link"
                                        aria-current="page"
                                        href="#"
                                        onClick={() => setExpanded(false)}
                                    >home</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#about"
                                        onClick={() => setExpanded(false)}
                                    >about</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#schedules"
                                        onClick={() => setExpanded(false)}
                                    >schedules</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#gallery"
                                        onClick={() => setExpanded(false)}
                                    >gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#faq"
                                        onClick={() => setExpanded(false)}
                                    >faq</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#sponsors"
                                        onClick={() => setExpanded(false)}
                                    >sponsors</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#pricing"
                                        onClick={() => setExpanded(false)}
                                    >pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#contact"
                                        onClick={() => setExpanded(false)}
                                    >contact</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- collapse navbar ends --> */}
                    </div>
                </nav>
            </div>
            {/* <!-- navbar ends--> */}
        </div>
    )
}

export default MyMenu;