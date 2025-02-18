import React from "react";

import * as S from "./HomeStyles";

import { ProfileCard, ScreenContent, SocialMedia } from "../../components";
export function Home() {
    return (
        <ScreenContent>
            <S.Container>
                <ProfileCard />
                <SocialMedia />
            </S.Container>
        </ScreenContent>
    );
}
