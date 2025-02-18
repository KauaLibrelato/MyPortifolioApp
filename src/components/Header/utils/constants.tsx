import BrazilSvg from "../../../assets/svgs/brazil.svg";
import SpainSvg from "../../../assets/svgs/spain.svg";
import USASvg from "../../../assets/svgs/usa.svg";
import { ILanguage } from "./types";

export const LANGUAGES: ILanguage[] = [
    {
        id: "1",
        name: "pt",
        icon: <BrazilSvg width={32} height={32} />,
    },
    {
        id: "2",
        name: "en",
        icon: <USASvg width={32} height={32} />,
    },
    {
        id: "3",
        name: "es",
        icon: <SpainSvg width={32} height={32} />,
    },
];
