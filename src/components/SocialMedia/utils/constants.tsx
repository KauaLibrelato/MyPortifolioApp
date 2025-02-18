import * as Icons from "phosphor-react-native";

import { ISocialMedia } from "./types";

export const SOCIALMEDIAS: ISocialMedia[] = [
    {
        color: "#0e76a8",
        text: "LinkedIn",
        icon: <Icons.LinkedinLogo color="#0e76a8" />,
        link: "https://www.linkedin.com/in/kaua-librelato-da-costa/",
    },
    {
        color: "#171515",
        text: "GitHub",
        icon: <Icons.GithubLogo color="#171515" />,
        link: "https://github.com/KauaLibrelato",
    },
    {
        color: "#FF69B4",
        text: "Instagram",
        icon: <Icons.InstagramLogo color="#FF69B4" />,
        link: "https://www.instagram.com/kaua_librelato",
    },
];
