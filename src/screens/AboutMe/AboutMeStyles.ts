import styled from "styled-components/native";

export const Container = styled.View`
    padding-bottom: 48px;
`;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const DownloadButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    margin-top: 24px;
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    align-items: center;
`;

export const DownloadButtonText = styled.Text<{ isLightTheme: boolean }>`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme, isLightTheme }) =>
        isLightTheme ? theme.colors.background : theme.colors.textPrimary};
`;

export const SectionContainer = styled.View`
    margin-top: 24px;
`;

export const HeaderSectionContainer = styled.Pressable`
    flex-direction: row;
    align-items: center;
`;

export const SectionTitle = styled.Text`
    margin-left: 8px;
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Body = styled.View`
    flex: 1;
    margin-top: 8px;
`;

export const DescriptionContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
`;

export const SectionDescriptionHeader = styled.View`
    margin-bottom: 12px;
    flex-direction: row;
    align-items: center;
`;

export const SectionDescriptionTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ItemsContainer = styled.View``;

export const SectionDescription = styled.Text`
    margin-left: 8px;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.textPrimary};
`;
