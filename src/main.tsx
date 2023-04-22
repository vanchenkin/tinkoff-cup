import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import MainPage from "./pages/MainPage/MainPage.tsx";
import { ConfigProvider } from "antd";
import ru from "antd/locale/ru_RU";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider locale={ru}>
                <MainPage />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
);
