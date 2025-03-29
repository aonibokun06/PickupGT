import ScheduleGame from "../components/ScheduleGame"
import { Link } from "react-router-dom"


export function Schedule() {
    return (
        <>
            <h1>Schedule your next game</h1>
            <ScheduleGame />
            <Link to={"/"}>
                <button>Home</button>
            </Link>

        </>
        
    )
}