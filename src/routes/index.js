import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layout/publicLayout";
import HomePage from "../pages/homePage";
import MainPage from "../pages/homePage/home";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route path="/" element={<MainPage />} />
            </Route>

        </Routes>

    )
}
export default AppRouter 