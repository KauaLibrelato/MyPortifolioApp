import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 12px;
    flex-direction: row;
`;

export const MediaContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})<{ color: string }>`
    border: 1px solid ${(props) => props.color};
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    padding: 0 10px;
    margin-right: 10px;
`;

export const MediaText = styled.Text<{ color: string }>`
    color: ${(props) => props.color};
    font-size: 16px;
    margin-left: 10px;
`;
