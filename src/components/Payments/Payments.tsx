import { useAppSelector } from "../../store/store";
import { Payment } from "../Payment/Payment";

export const Payments = () => {
    const payments = useAppSelector((state) => state.payments.payments);
    return (
        <>
            {payments.map((payment) => (
                <Payment key={payment.id} {...payment} />
            ))}

            {payments.length === 0 && (
                <div>
                    <div>Вы не добавили платежей</div>
                    <div>Нажмите Добавить, чтобы начать</div>
                </div>
            )}
        </>
    );
};
