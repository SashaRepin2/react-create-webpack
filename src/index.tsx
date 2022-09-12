import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Loader from "./components/UI/Loader";

import store, { persistor } from "./store/store";

import "./styles/index.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
        <PersistGate
            loading={<Loader position={"absolute"} />}
            persistor={persistor}
        >
            <App />
        </PersistGate>
    </Provider>
);
