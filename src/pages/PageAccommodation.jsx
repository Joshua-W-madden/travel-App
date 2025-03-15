import { Link } from "react-router-dom";

function PageAccommodation() {
    return (
        <div>
            <h1>Accommodation</h1>
            <p>Our accommodation page</p>
            <Link to={`/upload`}>Upload</Link>
        </div>
    );
}

export default PageAccommodation;
