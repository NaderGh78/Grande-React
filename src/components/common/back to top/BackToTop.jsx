import { LiaAngleUpSolid } from "react-icons/lia";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const BackToTop = () => {

    // show hide btn
    const showHideBtnHandler = () => {

        const btn = document.getElementById("back-to-top");

        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {

            btn.style.opacity = 1;

        } else {

            btn.style.opacity = 0;

        }

    }

    // then scroll to top when click on btn
    const scrollToTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    window.onscroll = function () {
        showHideBtnHandler();
    }

    /*+++++++++++++++++++++++++++++++++++++++++++*/

    return (
        <span id="back-to-top" onClick={scrollToTopHandler}>
            <LiaAngleUpSolid />
        </span>
    )
}

export default BackToTop;