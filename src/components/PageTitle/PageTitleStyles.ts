import styled from "styled-components/native";

export const Container = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textPrimary};
`;
