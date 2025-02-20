import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px;
    margin-top: 24px;
`;

export const CardContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    width: 168px;
    height: 160px;
    overflow: hidden;
    border-radius: 24px;
`;

export const ImageWrapper = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    overflow: hidden;
`;

export const ImageBackground = styled.ImageBackground.attrs({
    resizeMode: "cover",
    blurRadius: Platform.OS === "ios" ? 3 : 10,
})`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const Overlay = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.Text`
    position: absolute;
    bottom: 12px;
    left: 12px;
    font-size: 16px;
    color: white;
    font-weight: bold;
    border-radius: 8px;
`;
