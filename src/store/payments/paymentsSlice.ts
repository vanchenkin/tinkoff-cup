import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentType } from "./types/Payment";

type Filters = {
    startDate?: string;
    endDate?: string;
    categories: string[];
};

type StateType = {
    payments: PaymentType[];
    filters: Filters;
};

const initialState: StateType = {
    payments: JSON.parse(localStorage.getItem("payments") || "[]"),
    filters: {
        startDate: undefined,
        endDate: undefined,
        categories: [],
    },
};

const paymentsSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        addPayment: (state, action: PayloadAction<PaymentType>) => {
            state.payments.push(action.payload);

            localStorage.setItem("payments", JSON.stringify(state.payments));
        },
        removePayment: (state, action: PayloadAction<string>) => {
            state.payments = state.payments.filter(
                (payment) => payment.id === action.payload
            );
            localStorage.setItem("payments", JSON.stringify(state.payments));
        },
        setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
            state.filters = {
                ...state.filters,
                ...action.payload,
            };
        },
    },
});

export const { addPayment, removePayment, setFilters } = paymentsSlice.actions;
export const paymentsReducer = paymentsSlice.reducer;
