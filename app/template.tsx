import React from "react";
import Index from "../components/AnimatedLayout";

export default function rootTemplate({children}: Readonly<{ children: React.ReactNode; }>) {
    return <Index>{children}</Index>;
}