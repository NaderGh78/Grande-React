import { LiaFacebookF } from "react-icons/lia";
import { LiaTwitter } from "react-icons/lia";
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { speakingData } from "../../components/common/sectionData.js";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Speaking = () => {

    // show the hidden cards when click
    const showHiddenCardsHandler = () => {

        const allCards = document.querySelectorAll(".speaking .row > div");
        const btn = document.getElementById("allSpeakersBtn");

        allCards.forEach(card => {

            // if card has hidden-speaker classname, remove the this class
            if (card.classList.contains("hidden-speaker")) {

                card.classList.remove("hidden-speaker");

                // remove the btn itself
                btn.style.display = "none";

            }

        })

    }

    /*+++++++++++++++++++++++++++++++++++++++++++*/

    return (
        <div className="speaking">
            <h3 className="custom-heading text-center">Who's Speaking?</h3>
            <p className="text-center">Global Grand Event on Digital Design</p>
            <div className="container">
                <div className="row">
                    {
                        speakingData?.map(item => (
                            /*
                             add class [hidden-speaker] for the cards that has index greater than 3
                             to hide them in order to show them later
                            */
                            <div className={
                                `${(item.id > 3)
                                    ? "col-sm-6 col-md-6 col-lg-4 mb-4 hidden-speaker"
                                    : "col-sm-6 col-md-6 col-lg-4 mb-4"}`
                            }
                                key={item.id}
                            >
                                <div className="card">
                                    <div className="overlay">
                                        <div className="card-socials">
                                            <span><LiaFacebookF /></span>
                                            <span><LiaTwitter /></span>
                                            <span><LiaLinkedinIn /></span>
                                            <span><LiaInstagram /></span>
                                        </div>
                                    </div>
                                    {/* <img className="card-image-top" src={item.img} alt={item.name} /> */}
                                    <img src={process.env.PUBLIC_URL + item.img} alt="logo" />
                                    <div className="card-body">
                                        <h6 className="card-title" style={{ marginBottom: "5px", fontWeight: "700" }}>
                                            {item.name}
                                        </h6>
                                        <p className="card-text" style={{ fontSize: "15px" }}>{item.job}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button id="allSpeakersBtn" className="myRedBtn" onClick={showHiddenCardsHandler}>
                        ALL SPEAKERS
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Speaking;