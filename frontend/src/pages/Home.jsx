import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
        <h1 className="text-white">PickupGT</h1>
        <div className="flex flex-col items-center p-6">
            <div className="mb-6">
                <img className="w-80 h-80" src="/logo.png" alt="Logo" />
            </div>
            <div className="flex space-x-4">
                <Button page="/Schedule" text="Schedule Games" />
                <Button page="/Browse" text="Browse Games" />
            </div>
        </div>
        </>
        
    )
}

function Button(props) {
    return (
        <Link to={props.page}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{props.text}</button>
        </Link>
    )
}
