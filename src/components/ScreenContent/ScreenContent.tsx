import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import * as S from "./ScreenContentStyles";

export function ScreenContent({ children }: { children: ReactNode }) {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={[]}>
            <S.Container>{children}</S.Container>
        </SafeAreaView>
    );
}
