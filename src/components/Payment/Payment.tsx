import { Card } from "antd";
import { PaymentType } from "../../store/payments/types/Payment";
import dayjs from "dayjs";

export const Payment: React.FC<PaymentType> = ({ name, description, date }) => {
    return (
        <Card title={name} extra={<>{dayjs(date).format("DD.MM.YYYY")}</>}>
            {description}
        </Card>
    );
};
