import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            textPrimary: string;
            textSecondary: string;
            background: string;
            backgroundSecondary: string;
            button: string;
            border: string;
            pink: string;
            githubColor: string;
            linkedinColor: string;
        };
        statusBarStyle: "light" | "dark";
    }
}
