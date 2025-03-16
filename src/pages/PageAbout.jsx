import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";

function PageAbout() {
    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main className="about">
            <section className="app-info">
                <h1>About The App</h1>
                <p>
                    WanderTogether is a platform designed for solo travelers
                    seeking companionship and local experiences. Whether you're
                    looking for a couch to crash on through Couchsurfing or
                    someone to join you on a hike, WanderTogether helps you
                    connect with like-minded travelers and locals who are eager
                    to share their journey. Our goal is to make your solo
                    adventure more enjoyable and less isolating by offering a
                    safe space to meet new people, share experiences, and create
                    lasting memories.
                </p>
                <p>
                    Our App brings together travelers who share common interests
                    and activities, ensuring that every trip becomes an
                    opportunity for meaningful connection and fun!
                </p>
            </section>
        </main>
    );
}

export default PageAbout;
