import React from 'react';
import Sheet from '../_components/Sheet/sheet';
import Hero from '../_components/Hero/hero';

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Hero title='Members' sub='当社メンバー紹介'/>
            <Sheet>{children}</Sheet>
        </>
    );
}
/*このコンポによりメンバーページのレイアウト設定で生成されたメンバーページをchildrenとして、
このSheetで囲む。つまり、メンバーページのレイアウトがSheetのレイアウト上に張り付けられるということ*/