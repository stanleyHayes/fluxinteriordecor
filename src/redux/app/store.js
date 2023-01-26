import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./../features/ui/ui-slice";

import {CONSTANTS} from "../../utils/constants";

const theme = localStorage.getItem(CONSTANTS.LUXURY_MART_THEME_VARIANT) ?
    JSON.parse(localStorage.getItem(CONSTANTS.LUXURY_MART_THEME_VARIANT)) : 'dark';

const store = configureStore({
    reducer: {
        ui: uiReducer,
    },
    preloadedState: {
        ui: {theme}
    },
    devTools: true
});

export default store;
