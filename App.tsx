import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components/native";
import "./i18n";

import { Routes } from "./src/routes";
import { ThemeProvider } from "./src/theme/Theme";

export default function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <StatusBarWithTheme />
                <Routes />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

const StatusBarWithTheme = () => {
    const { colors, statusBarStyle } = useTheme();

    return <StatusBar style={statusBarStyle || "light"} backgroundColor={colors.background} />;
};
