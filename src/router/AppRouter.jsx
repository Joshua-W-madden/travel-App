import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
// import PageAccommodation from "../pages/PageAccommodation";

function AppRouter() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
