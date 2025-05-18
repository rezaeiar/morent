import type { Metadata } from "next";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer";

export const metadata: Metadata = {
    title: "Morent",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <div className="py-4 md:py-8">
                {children}
            </div>
            <Footer />
        </>
    );
}
