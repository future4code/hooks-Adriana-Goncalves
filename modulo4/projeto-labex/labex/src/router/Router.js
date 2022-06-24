import { BrowserRouter, Routes, Route}from "react-router-dom";
// pages
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import Error from "../pages/Error/Error";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element ={<HomePage/>}/>
                <Route path="/listTripsPage" element={<ListTripsPage/>}/>
                <Route path="/applicationFormPage" element={<ApplicationFormPage/>}/>
                <Route path="/loginPage" element={<LoginPage/>}/>
                <Route path="/adminHomePage" element={<AdminHomePage/>}/>
                <Route path="/tripDetailsPage/:id" element={<TripDetailsPage/>}/>
                <Route path="/createTripPage" element={<CreateTripPage/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;