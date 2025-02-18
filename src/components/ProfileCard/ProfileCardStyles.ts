import { Image } from "expo-image";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 144px;
    border-radius: 24px;
    background-color: ${({ theme }: DefaultTheme) => theme.colors.backgroundSecondary};
    position: relative;
    flex-direction: row;
`;

export const ReactLogo = styled.Image`
    position: absolute;
    width: 130px;
    height: 120px;
    left: -20px;
    top: -20px;
`;

export const Avatar = styled.Image`
    width: 140px;
    height: 160px;
    left: 10px;
    position: absolute;
    bottom: 0;
    z-index: 1;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    margin-left: 125px;
`;

export const Greeting = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const Hi = styled(Image)`
    width: 20px;
    height: 20px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }: DefaultTheme) => theme.colors.textPrimary};
`;

export const Description = styled.Text`
    font-size: 14px;
    color: ${({ theme }: DefaultTheme) => theme.colors.textSecondary};
    margin-left: 25px;
`;

export const TechWrapper = styled.View`
    margin: 10px 0 0 25px;
`;
