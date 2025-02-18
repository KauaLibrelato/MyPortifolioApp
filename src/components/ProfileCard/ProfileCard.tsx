import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Techs } from "..";
import { ThemeContext } from "../../theme/Theme";
import * as S from "./ProfileCardStyles";

export function ProfileCard() {
    const { t } = useTranslation();

    const { theme } = useContext(ThemeContext);
    const reactLogo =
        theme === "light"
            ? require("../../assets/images/reactLogoLight.png")
            : require("../../assets/images/reactLogoDark.png");

    return (
        <S.Container>
            <S.ReactLogo source={reactLogo} />
            <S.Avatar source={require("../../assets/images/myphoto.png")} />

            <S.Content>
                <S.Greeting>
                    <S.Hi source={require("../../assets/images/hi.gif")} />
                    <S.Title>{t("home.greeting")}</S.Title>
                </S.Greeting>

                <S.Description>{t("home.description")}</S.Description>

                <S.TechWrapper>
                    <Techs />
                </S.TechWrapper>
            </S.Content>
        </S.Container>
    );
}
