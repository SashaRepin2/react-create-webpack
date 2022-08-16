import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import BackButton from "./components/UI/BackButton/BackButton";
import Loader from "./components/UI/Loader/Loader";
import Header from "./components/Header/Header";
import {
    LINKS_BOARDS_PAGE,
    LINKS_BOARD_PAGE,
    LINKS_HOME_PAGE,
    LINKS_NOT_FOUND_PAGE,
    LINKS_SETTINGS_PAGE,
} from "./consts/links";
import SettingsPage from "./pages/SettingsPage";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const BoardPage = React.lazy(() => import("./pages/BoardPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <Suspense fallback={<Loader />}>
                    <BackButton />
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
