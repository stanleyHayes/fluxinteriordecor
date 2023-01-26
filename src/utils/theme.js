import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "EuclidCircularB"
    },
    palette: {
        primary: {
            main: "#112d56"
        },
        secondary: {
            main: "#ffe601"
        },
        background: {
            default: "#202124",
            paper: "#303136"
        },
        text: {
            primary: "#f8f9fa",
            secondary: "#d2d3d7"
        },
        light: {
            primary: "rgba(17,45,86,0.3)",
            secondary: "rgba(255,230,1,0.3)",
            background: "rgba(211,211,211,0.3)",
            white: "rgba(255, 255, 255, 0.3)"
        },
        mode: "dark"
    },
    shape: {borderRadius: 33}
});

export const THEMES = {theme};
