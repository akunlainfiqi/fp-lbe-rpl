import { Link } from "react-router-dom";

const header = () =>{
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/todo">Todo</Link>
        </div>
    )
}

export default header;