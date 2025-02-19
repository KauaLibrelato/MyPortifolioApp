import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 24px;
    flex-direction: row;
`;

export const MediaContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})<{ color: string; lastItem?: boolean }>`
    border: 1px solid ${(props) => props.color};
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    padding: 0 10px;
    margin-right: ${(props) => (props.lastItem ? 0 : 8)}px;
`;

export const MediaText = styled.Text<{ color: string }>`
    color: ${(props) => props.color};
    font-size: 16px;
    margin-left: 8px;
`;
