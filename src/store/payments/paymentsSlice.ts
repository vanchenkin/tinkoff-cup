import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentType } from "./types/Payment";

type StateType = {
    payments: PaymentType[];
};

const initialState: StateType = {
    payments: JSON.parse(localStorage.getItem("payments") || "[]"),
};

const paymentsSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        sortAndSave: (state) => {
            state.payments = state.payments.sort(
                (payment1, payment2) =>
                    Number(payment1.date) - Number(payment2.date)
            );
            localStorage.setItem("payments", JSON.stringify(state.payments));
        },
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
    },
});

export const { addPayment, removePayment, sortAndSave } = paymentsSlice.actions;
export const paymentsReducer = paymentsSlice.reducer;
