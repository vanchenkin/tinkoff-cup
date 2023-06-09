import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "./types/Category";

type StateType = {
    categories: Category[];
};

const initialState: StateType = {
    categories: JSON.parse(localStorage.getItem("categories") || "[]"),
};

const categoriesSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<{ name: string }>) => {
            const newCategory = {
                ...action.payload,
                color:
                    "#" +
                    (((1 << 24) * Math.random()) | 0)
                        .toString(16)
                        .padStart(6, "0"),
            };
            state.categories.push(newCategory);
            localStorage.setItem(
                "categories",
                JSON.stringify(state.categories)
            );
        },
        removeCategory: (state, action: PayloadAction<string>) => {
            state.categories = state.categories.filter(
                (category) => category.name !== action.payload
            );
            localStorage.setItem(
                "categories",
                JSON.stringify(state.categories)
            );
        },
    },
});

export const { addCategory, removeCategory } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
