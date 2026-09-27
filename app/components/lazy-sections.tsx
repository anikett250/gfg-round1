"use client";

import dynamic from "next/dynamic";

const Header2 = dynamic(() => import("./header2"), {
    loading: () => <div className="min-h-screen bg-[#090a0c]" />,
});

const Header3 = dynamic(() => import("./header3"), {
    loading: () => <div className="min-h-screen bg-[#090a0c]" />,
});

export default function LazySections() {
    return (
        <>
            <Header2 />
            <Header3 />
        </>
    );
}