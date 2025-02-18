import { Marquee } from "@animatereactnative/marquee";
import React from "react";

import * as S from "./TechsStyles";
import { TECHS } from "./utils/constants";

export function Techs() {
    return (
        <Marquee
            style={{ overflow: "hidden" }}
            speed={0.3}
            spacing={7}
            frameRate={120}
            withGesture={false}
        >
            <S.Container>
                {TECHS.map((tech) => (
                    <S.TechContainer key={tech.id + tech.name}>{tech.icon}</S.TechContainer>
                ))}
            </S.Container>
        </Marquee>
    );
}
