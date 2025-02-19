import * as Linking from "expo-linking";
import React from "react";
import { FlatList } from "react-native";

import * as S from "./SocialMediaStyles";
import { SOCIALMEDIAS } from "./utils/constants";

export function SocialMedia() {
    return (
        <S.Container>
            <FlatList
                data={SOCIALMEDIAS}
                renderItem={({ item }) => (
                    <S.MediaContainer
                        key={item.text}
                        color={item.color}
                        onPress={() => Linking.openURL(item.link)}
                        lastItem={item.text === SOCIALMEDIAS[SOCIALMEDIAS.length - 1].text}
                    >
                        {item.icon}
                        <S.MediaText color={item.color}>{item.text}</S.MediaText>
                    </S.MediaContainer>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.text}
            />
        </S.Container>
    );
}
