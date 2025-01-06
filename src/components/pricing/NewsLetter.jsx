import { LiaCheckSquareSolid } from "react-icons/lia";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h3>Sign Up For Our Newsletter</h3>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="">
                            <input type="email" placeholder="ENTER YOU EMAIL HERE" />
                            <button><LiaCheckSquareSolid />SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;