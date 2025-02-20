import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackHeaderProps } from "@react-navigation/stack";
import * as Icons from "phosphor-react-native";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components/native";

import { ThemeContext } from "../../theme/Theme";
import { ThemeType } from "../../utils/enums";
import * as S from "./HeaderStyles";
import { LANGUAGES } from "./utils/constants";

export function Header({ route, navigation }: StackHeaderProps) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { colors } = useTheme();
    const { i18n } = useTranslation();
    const selectedLanguage = i18n.language;
    const isHome = route.name === "Home";

    const changeLanguage = async (lang: string) => {
        await AsyncStorage.setItem("@language", lang);
        i18n.changeLanguage(lang);
    };

    return (
        <S.Container>
            <S.BackButton isHome={isHome} onPress={() => navigation.goBack()}>
                <Icons.CaretLeft size={24} color={colors.textPrimary} />
            </S.BackButton>

            <S.ThemeButton onPress={toggleTheme} isHome={isHome}>
                {theme === ThemeType.light ? (
                    <Icons.Sun size={24} color={colors.textPrimary} weight="fill" />
                ) : (
                    <Icons.Moon size={24} color={colors.textPrimary} weight="fill" />
                )}
            </S.ThemeButton>

            <S.ChangeLanguageContainer>
                {LANGUAGES.map((language) => (
                    <S.ChangeLanguageButton
                        key={language.id + language.name}
                        isSelected={selectedLanguage === language.name}
                        onPress={() => changeLanguage(language.name)}
                    >
                        {language.icon}
                    </S.ChangeLanguageButton>
                ))}
            </S.ChangeLanguageContainer>
        </S.Container>
    );
}
