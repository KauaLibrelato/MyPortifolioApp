import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 12px 24px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: ${({ theme }: any) => theme.colors.background};
    margin-top: ${Platform.OS === "ios" ? "48px" : "24px"};
`;

export const BackButton = styled.Pressable<{ isHome: boolean }>`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 50%;
    display: ${({ isHome }) => (!isHome ? "flex" : "none")};
    padding: 5px;
    margin: -5px;
`;

export const ThemeButton = styled.Pressable<{ isHome: boolean }>`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 50%;
    display: ${({ isHome }) => (isHome ? "flex" : "none")};
    padding: 5px;
    margin: -5px;
`;

export const ChangeLanguageContainer = styled.View`
    flex-direction: row;
    gap: 5px;
`;

export const ChangeLanguageButton = styled.Pressable<{ isSelected: boolean }>`
    background-color: ${({ isSelected, theme }) =>
        isSelected ? theme.colors.primary : theme.colors.background};
    padding: 0 5px;
`;
