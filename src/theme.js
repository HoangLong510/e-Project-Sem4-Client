"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class",
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#2979ff",
                },
                text: {
                    primary: "#000",
                    secondary: "#444",
                    tertiary: "#eee",
                },
                background: {
                    default: "#fff",
                }
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "#2979ff",
                },
                text: {
                    primary: "#fff",
                    secondary: "#eee",
                    tertiary: "#333",
                },
                background: {
                    default: "#222",
                    paper: "#000"
                },
            },
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;
