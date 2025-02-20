import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import * as S from "./ScreenContentStyles";

export function ScreenContent({
    children,
    scrollView = false,
}: {
    children: ReactNode;
    scrollView?: boolean;
}) {
    const isScrollView = () => {
        if (scrollView) {
            return <S.ScrollView>{children}</S.ScrollView>;
        }
        return <S.Container>{children}</S.Container>;
    };
    return (
        <SafeAreaView style={{ flex: 1 }} edges={[]}>
            {isScrollView()}
        </SafeAreaView>
    );
}
