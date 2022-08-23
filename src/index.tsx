import { PersistGate } from "redux-persist/integration/react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Loader from "./components/UI/Loader";

import store, { persistor } from "./store";

import "./styles/index.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
        <PersistGate
            loading={<Loader />}
            persistor={persistor}
        >
            <App />
        </PersistGate>
    </Provider>
);
