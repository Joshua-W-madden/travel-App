import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SocialPosting = ({ postingObj }) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        const seed = postingObj.id;
        const imageUrl = `https://picsum.photos/200?random=${seed}`;
        setImage(imageUrl);
    }, [postingObj.id]);

    return (
        <div className="posting-container">
            <div className="profile-pic">
                <img
                    src={image}
                    alt={`Profile Picture of ${postingObj.hostName}`}
                />
            </div>
            <div>
                <div className="basic-info">
                    <h2>{postingObj.title}</h2>
                    <h3>{postingObj.hostName}</h3>
                    <p className="location">{postingObj.location}</p>
                    <p>{postingObj.description}</p>
                </div>
                <div className="reach-out">
                    <a href={`mailto:${postingObj.email}`}>
                        Reach out to {postingObj.hostName}!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialPosting;
