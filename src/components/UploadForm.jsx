import { useState } from "react";

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg"];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (png or jpeg)");
        }
    };

    return (
        <form>
            <fieldset>
                <legend>Host Information</legend>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="profile-pic">Profile Picture</label>
                    <input type="file" onChange={handleChange} />
                </div>
            </fieldset>
            <fieldset>
                <legend>Details</legend>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="text">Provide Details!</label>
                    <textarea
                        id="room-description"
                        name="room-description"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="file">Upload Accommodation Photos</label>
                    <input type="file" onChange={handleChange} />
                </div>
            </fieldset>

            <input type="submit" value="Upload" />
        </form>
    );
}

export default UploadForm;
