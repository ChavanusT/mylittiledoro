import "./navbar.css";
import axios from "axios";

function HandlePostRequest(event) {
    event.preventDefault();
    let endpoint = "http://localhost:3969";
    const id = event.target.id;
    switch (id) {
        case "#hello": {
            endpoint += "/doro/hello";
            break;
        }

        default: {
            break;
        }
    }

    axios
        .post(endpoint, { word: "Dorothy" })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        });
}

function NavBar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <a id="home" href="#home" onClick={HandlePostRequest}>
                        My Little Doro
                    </a>
                </li>
                <li>
                    <a id="account" href="#link" onClick={HandlePostRequest}>
                        Account
                    </a>
                </li>
                <li>
                    <a id="#hello" href="#me" onClick={HandlePostRequest}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
