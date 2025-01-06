import "./event-start.css";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const EventStart = () => {
    return (
        <div className="event-start text-center">
            <h3 className="text-uppercase">event will start in</h3>
            <div className="event-start-nbr d-flex">
                <div>
                    <strong>0</strong>
                    <span>DAYS</span>
                </div>
                <div>
                    <strong>00</strong>
                    <span>HOURS</span>
                </div>
                <div>
                    <strong>00</strong>
                    <span>MINUTES</span>
                </div>
                <div>
                    <strong>00</strong>
                    <span>SECONDS</span>
                </div>
            </div>
            {/* event start nbr ends */}
            <a href="" className="myRedBtn">ADD TO MY CALENDER</a>
        </div>
        // <!-- event start ends -->
    )
}

export default EventStart;