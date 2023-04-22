import { PaymentType } from "../../store/payments/types/Payment";
import dayjs from "dayjs";
import "./Payment.scss";
import { useAppSelector } from "../../store/store";
import {
    NoCategoryColor,
    NoCategoryText,
} from "../CategorySelect/CategorySelect";

export const Payment: React.FC<PaymentType> = ({
    name,
    description,
    date,
    category,
    amount,
}) => {
    const categoryStored = useAppSelector((state) =>
        state.categories.categories.find((i) => i.name === category)
    );

    return (
        <div className="card">
            <div className="name">{name}</div>
            <div className="description">{description ?? "-"}</div>
            <div className="category">
                <div
                    className="category circle"
                    style={{
                        backgroundColor:
                            categoryStored?.color ?? NoCategoryColor,
                    }}
                ></div>
                {categoryStored ? categoryStored.name : NoCategoryText}
            </div>
            <div className="date">{dayjs(date).format("DD.MM.YYYY")}</div>
            <div className="amount">{amount} ₽</div>
        </div>
    );
};
