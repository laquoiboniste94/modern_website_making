import Hero from "../_components/Hero/hero";
import Sheet from "../_components/Sheet/sheet";

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <Hero title="News" sub="ニュース一覧"/>
            <Sheet>{children}</Sheet>
        </>
    );
}
