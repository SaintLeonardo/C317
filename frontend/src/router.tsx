import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/mainPage/welcomePage";
import { UserDataPage } from "./pages/userDataPage/userdataPage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/userdata" element={<UserDataPage />} />
        </Routes>
    );
}