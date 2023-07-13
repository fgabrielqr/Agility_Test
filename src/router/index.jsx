import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import Auth from "./auth";
import OAuthLogin from "./oAuthLogin";
import { Map } from "../pages/Map";
import { Dash } from "../components/dashboard/Index";

function Router() {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <OAuthLogin>
                        <Login />
                    </OAuthLogin>
                }
            />
            <Route
                path="/"
                element={
                    <Auth>
                        <Dash />
                    </Auth>
                }
            >
                <Route index element={<Main />} />
                <Route path="/map" element={<Map />} />
            </Route>
        </Routes>
    );
}

export default Router;
