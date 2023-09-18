"use client";

import "@styles/globals.css";
import { MoralisProvider } from "react-moralis";
import Header from "@components/Header";

export const metadata = {
    title: "One Piece",
    description: "Decentralized Lottery",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <MoralisProvider initializeOnMount={false}>
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
