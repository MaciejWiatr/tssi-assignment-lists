import "./globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../src/app/store";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <title>Podzielne przez 3 Maciej Wiatr</title>
            </Head>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
