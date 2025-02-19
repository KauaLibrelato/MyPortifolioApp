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
    width: 177px;
    height: 180px;
    overflow: hidden;
`;

export const ImageBackground = styled.ImageBackground.attrs({
    resizeMode: "cover",
    blurRadius: 5,
})`
    width: 100%;
    height: 100%;
    border-radius: 24px;

    filter: grayscale(100%);
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
