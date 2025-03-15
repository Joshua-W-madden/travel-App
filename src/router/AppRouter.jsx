import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import PageAccommodation from "../pages/PageAccommodation";
import PageSinglePost from "../pages/PageSinglePost";
import UploadForm from "../components/UploadForm";
import Home from "../pages/PageHome";

function AppRouter() {
    return (
        <BrowserRouter>
            <HeaderNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accommodation" element={<PageAccommodation />} />
                <Route path="/accommodation:id" element={<PageSinglePost />} />
                <Route path="/upload" element={<UploadForm />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
