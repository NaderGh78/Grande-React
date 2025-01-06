import { BackToTop, Footer, Header } from "../allPagesPaths.jsx";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <BackToTop />
        </>
    );
};

export default Layout; 