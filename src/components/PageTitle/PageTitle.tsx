import React from "react";

import * as S from "./PageTitleStyles";

export function PageTitle({ text }: { text: string }) {
    return <S.Container>{text}</S.Container>;
}
