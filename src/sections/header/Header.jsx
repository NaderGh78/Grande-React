import "./header.css";
import MyMenu from "../../components/common/my-menu/MyMenu";
import MySlider from "../../components/header/MySlider";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Header = () => {
    return (
        <header id="header" className="scroll-through">
            <MyMenu />
            <MySlider />
        </header>
    )
}

export default Header;