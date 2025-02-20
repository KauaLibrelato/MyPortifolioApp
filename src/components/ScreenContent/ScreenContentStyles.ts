import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: any) => theme.colors.background};
    padding: 24px;
`;

export const ScrollView = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    background-color: ${({ theme }: any) => theme.colors.background};
    padding: 24px;
`;
