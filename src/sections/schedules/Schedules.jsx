import "./schedules.css";
import SchedulesTable from "../../components/schedules/SchedulesTable";
import Speaking from "../../components/schedules/Speaking";

/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++*/

const Schedules = () => {
    return (
        <div id="schedules" className="schedules scroll-through">
            <SchedulesTable />
            <Speaking />
        </div>
    )
}

export default Schedules;