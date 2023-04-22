import React from "react";
import { useAppSelector } from "../../store/store";
import { getFilteredPayments } from "../../store/payments/getFilteredPayments";

export const TotalAmount: React.FC = () => {
    const payments = useAppSelector(getFilteredPayments);

    const amount = payments.reduce((prev, cur) => {
        return prev + cur.amount;
    }, 0);

    return <div>Потрачено: {amount} ₽</div>;
};
