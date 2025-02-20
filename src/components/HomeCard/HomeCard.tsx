import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";

import * as S from "./HomeCardStyles";
import { HOMECARDINFOS } from "./utils/constants";

export function HomeCard() {
    const { t } = useTranslation();
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const navigateToScreen = (screen?: string) => {
        if (screen) {
            navigation.navigate(screen);
        }
    };

    return (
        <S.Container>
            {HOMECARDINFOS.map((info) => (
                <S.CardContainer key={info.id} onPress={() => navigateToScreen(info?.screen)}>
                    <S.ImageWrapper>
                        <S.ImageBackground source={info.image}>
                            <S.Overlay />
                        </S.ImageBackground>
                    </S.ImageWrapper>
                    <S.Title>{t(`home.${info.title}`)}</S.Title>
                </S.CardContainer>
            ))}
        </S.Container>
    );
}
