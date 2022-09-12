import React, { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import BackButton from "./components/UI/BackButton";
import Loader from "./components/UI/Loader";

import SettingsPage from "./pages/SettingsPage";

import {
    LINKS_BOARDS_PAGE,
    LINKS_BOARD_PAGE,
    LINKS_HOME_PAGE,
    LINKS_NOT_FOUND_PAGE,
    LINKS_SETTINGS_PAGE,
} from "./consts/links";

import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const BoardPage = lazy(() => import("./pages/BoardPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <Suspense fallback={<Loader />}>
                    <BackButton />
                    <ToastContainer />
                    <Routes>
                        <Route
                            path={LINKS_HOME_PAGE}
                            element={<HomePage />}
                        />
                        <Route
                            path={LINKS_BOARDS_PAGE}
                            element={<HomePage />}
                        />
                        <Route
                            path={LINKS_BOARD_PAGE}
                            element={<BoardPage />}
                        />
                        <Route
                            path={LINKS_NOT_FOUND_PAGE}
                            element={<NotFoundPage />}
                        />
                        <Route
                            path={LINKS_SETTINGS_PAGE}
                            element={<SettingsPage />}
                        />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
