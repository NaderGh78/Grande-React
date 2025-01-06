import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  EventStart,
  ChooseUs,
  About,
  Schedules,
  Gallery,
  Faq,
  Sponsors,
  Pricing,
  Contact,
  Layout
} from "./allPagesPaths.jsx";

import OverlayImage from "./components/common/image-overlay/OverlayImage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

function App() {

  const { showOverlay } = useSelector((state) => state.overlay);

  /*===========================================*/

  // hide the scroll when the [overlay image] open by adding [hide-scroll] to body 
  useEffect(() => {

    if (showOverlay) {

      document.body.classList.add('hide-scroll');

    } else {

      document.body.classList.remove('hide-scroll');

    }

  }, [showOverlay]);

  /*===========================================*/

  return (
    <Layout>
      <EventStart />
      <ChooseUs />
      <About />
      <Schedules />
      <Gallery />
      <Faq />
      <Sponsors />
      <Pricing />
      <Contact />
      {/* if the showOverlay is true show the OverlayImage comp */}
      {/* {showOverlay && <OverlayImage />} */}
      <OverlayImage />
    </Layout>
  );
}

export default App; 