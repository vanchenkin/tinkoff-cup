import { useAppSelector } from "../../store/store";
import { Payment } from "../Payment/Payment";
import { getFilteredPayments } from "../../store/payments/getFilteredPayments";

export const Payments = () => {
    const payments = useAppSelector((state) => state.payments.payments);
    const filteredPayments = useAppSelector(getFilteredPayments);

    if (payments.length === 0) {
        return (
            <div>
                <div>Вы не добавили платежей</div>
                <div>Нажмите Добавить, чтобы начать</div>
            </div>
        );
    }

    return (
        <>
            {filteredPayments.map((payment) => (
                <Payment key={payment.id} {...payment} />
            ))}

            {filteredPayments.length === 0 && (
                <div>
                    <div>Ничего не найдено</div>
                </div>
            )}
        </>
    );
};
