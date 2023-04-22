import dayjs from "dayjs";
import { RootStateType } from "../store";

export const getFilteredPayments = (state: RootStateType) => {
    const payments = [...state.payments.payments];
    const filters = state.payments.filters;

    const sortedPayments = payments.sort(
        (payment1, payment2) =>
            Number(dayjs(payment1.date)) - Number(dayjs(payment2.date))
    );

    const startDateParsed = filters.startDate
        ? Number(dayjs(filters.startDate))
        : 0;

    const startFilteredPayments = sortedPayments.filter(
        (payment) => Number(dayjs(payment.date)) > startDateParsed
    );

    const endDateParsed = filters.endDate
        ? Number(dayjs(filters.endDate))
        : Number(dayjs());

    const endFilteredPayments = startFilteredPayments.filter(
        (payment) => Number(dayjs(payment.date)) < endDateParsed
    );

    return filters.categories.length
        ? endFilteredPayments.filter(
              (payment) =>
                  filters.categories.includes(payment.category) ||
                  !payment.category
          )
        : endFilteredPayments;
};
