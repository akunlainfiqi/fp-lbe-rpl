import { Link } from "react-router-dom";

const header = () =>{
    return(
        <div className="navbar">
            <Link to="/" className="navbar-component">Home</Link>
            <Link to="/todo" className="navbar-component">Todo</Link>
        </div>
    )
}

export default header;