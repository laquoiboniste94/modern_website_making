import React from "react";
import Hero from "../_components/Hero/hero";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return <Hero title='Contact' sub='お問い合わせ' />;

}
