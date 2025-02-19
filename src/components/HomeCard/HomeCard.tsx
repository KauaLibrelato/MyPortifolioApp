import React from "react";
import { useTranslation } from "react-i18next";

import * as S from "./HomeCardStyles";
import { HOMECARDINFOS } from "./utils/constants";

export function HomeCard() {
    const { t } = useTranslation();
    return (
        <S.Container>
            {HOMECARDINFOS.map((info) => (
                <S.CardContainer key={info.id}>
                    <S.ImageBackground source={info.image}>
                        <S.Title>{t(`home.${info.title}`)}</S.Title>
                    </S.ImageBackground>
                </S.CardContainer>
            ))}
        </S.Container>
    );
}
