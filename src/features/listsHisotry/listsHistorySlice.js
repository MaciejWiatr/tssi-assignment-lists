import { createSlice } from "@reduxjs/toolkit";

export const listsHistorySlice = createSlice({
    name: "listHistory",
    initialState: {
        value: [],
        isClearing: false,
    },
    reducers: {
        addListToHistory: (state, action) => {
            const newHistoryEl = {
                originalList: action.payload.originalList,
                result: action.payload.result,
            };
            state.value.push(newHistoryEl);
        },
        clearListHistory: (state) => {
            state.value.splice(0, state.value.length);
            state.isClearing = true;
        },
        toggleClearing: (state) => {
            state.isClearing = false;
        },
    },
});

export const {
    addListToHistory,
    clearListHistory,
    toggleClearing,
} = listsHistorySlice.actions;

export const selectListHistory = (state) => state.listHistory.value;
export const selectClearing = (state) => state.listHistory.isClearing;

export const changeClearingAsync = () => async (dispatch) => {
    setTimeout(() => {
        dispatch(toggleClearing());
    }, 1000);
};

export default listsHistorySlice.reducer;
