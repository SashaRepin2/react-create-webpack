import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import BackButton from "./components/UI/BackButton/BackButton";
import Loader from "./components/UI/Loader/Loader";
import Header from "./components/Header/Header";

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
                        <Route path="/" element={<HomePage />} />
                        <Route path="boards" element={<HomePage />} />
                        <Route path="boards/:boardId" element={<BoardPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
