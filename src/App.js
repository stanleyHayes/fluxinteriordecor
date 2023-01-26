import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {THEMES} from "./utils/theme";
import {Route, Routes} from "react-router";
import LandingPage from "./pages/landing/landing-page";

function App() {
    return (
        <ThemeProvider theme={THEMES.theme}>
            <CssBaseline enableColorScheme={true}/>
            <Routes>
                <Route element={<LandingPage/>} path="/"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
