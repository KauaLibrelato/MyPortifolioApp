import React from "react";

import AndroidSvg from "../../../assets/svgs/android.svg";
import AppleSvg from "../../../assets/svgs/apple.svg";
import ExpoSvg from "../../../assets/svgs/expo.svg";
import JsSvg from "../../../assets/svgs/js.svg";
import ReactSvg from "../../../assets/svgs/react.svg";
import TsSvg from "../../../assets/svgs/ts.svg";
import { ITech } from "./types";

export const TECHS: ITech[] = [
    { id: "5", name: "react", icon: <ReactSvg width={24} height={24} /> },
    { id: "4", name: "expo", icon: <ExpoSvg width={24} height={24} /> },
    { id: "6", name: "typescript", icon: <TsSvg width={24} height={24} /> },
    { id: "3", name: "javascript", icon: <JsSvg width={24} height={24} /> },
    { id: "1", name: "android", icon: <AndroidSvg width={24} height={24} /> },
    { id: "2", name: "apple", icon: <AppleSvg width={24} height={24} /> },
];
