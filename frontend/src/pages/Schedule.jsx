import ScheduleGame from "../components/ScheduleGame"
import { Link } from "react-router-dom"

export function Schedule() {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-4xl font-bold mb-6 text-white">Schedule your next game</h1>
            <ScheduleGame />
            <Link to={"/"} className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Home</button>
            </Link>
        </div>
    )
}