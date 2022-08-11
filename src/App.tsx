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
} from "./consts/links";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const BoardPage = React.lazy(() => import("./pages/BoardPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <BackButton />
                <Suspense fallback={<Loader />}>
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
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
