import type { Metadata } from "next";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

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
            <div className="py-4 md:py-8">
                {children}
            </div>
            <Footer />
        </>
    );
}
