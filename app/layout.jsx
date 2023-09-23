"use client";

import "@styles/globals.css";
import { MoralisProvider } from "react-moralis";
import Header from "@components/Header";

const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const metadata = {
    title: "One Piece",
    description: "Decentralized Lottery",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
                    <div className="main">
                        <main className="app">
                            <Header />
                            {children}
                        </main>
                    </div>
                </MoralisProvider>
            </body>
        </html>
    );
};

export default RootLayout;
