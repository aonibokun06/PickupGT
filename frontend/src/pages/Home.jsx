import {Link} from "react-router-dom"

export function Home() {
    return (
        <div className="container">
            <div className="h">
                <img className="landingPageLogo" src="/logo.png" />
            </div>
            <div class="container landingPageButtonContainer">
                <Button page = "/Schedule" text = "Schedule Games" />
                <Button page = "/Browse" text = "Browse Games" />
            </div>
        </div>
    )
}

function Button(props) {
    return (
        <Link to={props.page}>
            <button>{props.text}</button>
        </Link>
    )
}
