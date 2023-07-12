import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import AuthGuard from "./auth";
import GuestGuard from "./oAuthLogin";
import { Map } from "../pages/Map";
import { Dash } from "../components/dashboard/Index";

function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AuthGuard>
                        <Dash />
                    </AuthGuard>
                }
            >
                <Route index element={<Main />} />
                <Route path="/map" element={<Map />} />
            </Route>

            <Route
                path="/login"
                element={
                    <GuestGuard>
                        <Login />
                    </GuestGuard>
                }
            />
        </Routes>
    );
}

export default Router;
