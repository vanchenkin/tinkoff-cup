import { configureStore, Dispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { paymentsReducer } from "./payments/paymentsSlice";
import { categoriesReducer } from "./categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        payments: paymentsReducer,
        categories: categoriesReducer,
    },
});

export type RootStateType = ReturnType<typeof store.getState>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatchType = typeof store.dispatch & Dispatch<any>;
export type GetStateFuncType = () => RootStateType;

// Создаем типизированные версии `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
