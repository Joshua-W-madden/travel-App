import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import SocialPosting from "../components/SocialPosting";
import postingData from "../data/posting-data";

function PageHome() {
    const displayposting = () => {
        setCatalogResult(
            postingData.map((posting) => (
                <SocialPosting key={posting.id} postingObj={posting} />
            ))
        );
    };

    return (
        <main>
            <Tabs>
                <TabList className="tablist">
                    <Tab className="region">America</Tab>
                    <Tab className="region">Europe</Tab>
                    <Tab className="region">Asia</Tab>
                    <Tab className="region">Oceania</Tab>
                    <Tab className="region">Africa</Tab>
                </TabList>
                <TabPanel>
                    <section className="postings-activities">
                        <h2>These People are Looking for Travel Companions!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "America" &&
                                    posting.category == "travel companion"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                    <section className="postings-accommodation">
                        <h2>These People are Offering Accommodation!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "America" &&
                                    posting.category == "accommodation"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="postings-activities">
                        <h2>These People are Looking for Travel Companions!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "Europe" &&
                                    posting.category == "travel companion"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                    <section className="postings-accommodation">
                        <h2>These People are Offering Accommodation!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "Europe" &&
                                    posting.category == "accommodation"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="postings-activities">
                        <h2>These People are Looking for Travel Companions!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "Asia" &&
                                    posting.category == "travel companion"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                    <section className="postings-accommodation">
                        <h2>These People are Offering Accommodation!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "Asia" &&
                                    posting.category == "accommodation"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="postings-activities">
                        <h2>These People are Looking for Travel Companions!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "Oceania" &&
                                    posting.category == "travel companion"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                    <section className="postings-accommodation">
                        <h2>These People are Offering Accommodation!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "Oceania" &&
                                    posting.category == "accommodation"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="postings-activities">
                        <h2>These People are Looking for Travel Companions!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "Africa" &&
                                    posting.category == "travel companion"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                    <section className="postings-accommodation">
                        <h2>These People are Offering Accommodation!</h2>
                        {postingData
                            .filter(
                                (posting) =>
                                    posting.region == "Africa" &&
                                    posting.category == "accommodation"
                            )
                            .map((posting) => (
                                <SocialPosting
                                    key={posting.id}
                                    postingObj={posting}
                                />
                            ))}
                    </section>
                </TabPanel>
            </Tabs>
        </main>
    );
}

export default PageHome;
