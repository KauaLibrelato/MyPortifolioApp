import React from "react";

import * as S from "./HomeStyles";

import { HomeCard, ProfileCard, ScreenContent, SocialMedia } from "../../components";
export function Home() {
    return (
        <ScreenContent>
            <S.Container>
                <ProfileCard />
                <SocialMedia />
                <HomeCard />
            </S.Container>
        </ScreenContent>
    );
}
