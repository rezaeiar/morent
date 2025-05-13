import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Morent",
    description: "description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <div className="py-8">
                {children}
            </div>
            <Footer />
        </>
    );
}
