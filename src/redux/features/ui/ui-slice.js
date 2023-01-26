import {createSlice} from "@reduxjs/toolkit";
import {CONSTANTS} from "../../../utils/constants";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        theme: localStorage.getItem(CONSTANTS.LUXURY_MART_THEME_VARIANT) ? localStorage.getItem(CONSTANTS.LUXURY_MART_THEME_VARIANT): 'light',
        drawerOpen: false,
    },
    reducers: {
        toggleDrawer: (state, action) => {
            state.drawerOpen = action.payload;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light': 'dark';
            localStorage.setItem(
                CONSTANTS.LUXURY_MART_THEME_VARIANT, state.theme === 'dark' ?
                    JSON.stringify('light'):
                    JSON.stringify('dark'))
        },
        toggleView: (state) => {
            state.view = state.view === 'grid' ? 'list': 'grid';
            localStorage.setItem(
                CONSTANTS.MOTHERCARE_VIEW, state.view === 'grid' ?
                    JSON.stringify('list'):
                    JSON.stringify('grid'))
        }
    },
});

export const selectUI = state => state.ui;
export const UI_ACTION_CREATORS = {
    toggleDrawer: uiSlice.actions.toggleDrawer,
    toggleTheme: uiSlice.actions.toggleTheme,
    toggleView: uiSlice.actions.toggleView,
};
export default uiSlice.reducer;
