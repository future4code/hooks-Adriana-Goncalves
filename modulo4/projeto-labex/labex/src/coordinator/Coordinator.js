import {useNavigate} from"react-router-dom";

    export const goToHomePage = (navigate ) => {
        navigate ("/");
    }

    export const goToListTripsPage = (navigate ) => {
        navigate ("/listTripsPage");
    }

    export const goToApplicationFormPage = (navigate) => {
        navigate ("/applicationFormPage");
    }

    export const goToLoginPage = (navigate) => {
        
        navigate ("/loginPage");
    }

    export const goToAdminHomePage = (navigate) => {
        navigate ("/adminHomePage");
    }

    export const goToTripDetailsPage = (navigate, id) => {
        console.log(id)
        navigate ("/tripDetailsPage/:id");
    }

    export const goToCreateTripPage = (navigate) => {
        navigate ("/cRreateTripPage");
    }

