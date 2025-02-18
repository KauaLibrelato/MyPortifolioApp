import { DefaultTheme } from "styled-components/native";

export const darkTheme: DefaultTheme = {
    colors: {
        primary: "#34495E",
        secondary: "#1ABC9C",
        textPrimary: "#ECF0F1",
        textSecondary: "#7F8C8D",
        background: "#2C3E50",
        backgroundSecondary: "#34495E",
        button: "#1ABC9C",
        border: "#7F8C8D",
        pink: "#FF69B4",
        githubColor: "#171515",
        linkedinColor: "#0e76a8",
    },
    statusBarStyle: "light",
};

export const lightTheme: DefaultTheme = {
    colors: {
        primary: "#2C3E50",
        secondary: "#3498DB",
        textPrimary: "#333333",
        textSecondary: "#7F8C8D",
        background: "#F4F6F6",
        backgroundSecondary: "#E1E8EB",
        button: "#3498DB",
        border: "#BDC3C7",
        pink: "#FF69B4",
        githubColor: "#171515",
        linkedinColor: "#0e76a8",
    },
    statusBarStyle: "dark",
};
