import { DatePicker, Form, FormInstance, Input } from "antd";
import { PaymentType } from "../../store/payments/types/Payment";
import { nanoid } from "@reduxjs/toolkit";
import { CategorySelect } from "../CategorySelect/CategorySelect";
import { useAppDispatch } from "../../store/store";
import { addPayment } from "../../store/payments/paymentsSlice";
import styles from "./AddPaymentForm.module.scss";
import dayjs from "dayjs";

type Props = {
    form: FormInstance;
    onFinish: () => void;
};

export const AddPaymentForm: React.FC<Props> = ({ form, onFinish }) => {
    const dispatch = useAppDispatch();

    const handleSubmit = (payment: PaymentType) => {
        dispatch(
            addPayment({
                ...payment,
                id: nanoid(),
                date: payment.date.toString(),
                amount: +payment.amount,
            })
        );
        form.resetFields();
        onFinish();
    };

    const handleSelectChange = (name: string) => {
        form.setFieldValue("category", name);
    };

    return (
        <Form
            name="resource"
            labelCol={{ span: 8 }}
            initialValues={{ remember: true, date: dayjs() }}
            onFinish={handleSubmit}
            autoComplete="off"
            form={form}
        >
            <h2 className={styles.title}>Добавить платеж </h2>

            <Form.Item
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
                name="date"
                rules={[
                    {
                        required: true,
                        message: "Введите дату платежа",
                    },
                ]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Введите имя платежа",
                    },
                ]}
            >
                <Input placeholder="Имя платежа*" />
            </Form.Item>

            <Form.Item name="description">
                <Input placeholder="Описание" />
            </Form.Item>

            <Form.Item name="category">
                <CategorySelect onChange={handleSelectChange} />
            </Form.Item>

            <Form.Item
                name="amount"
                rules={[
                    {
                        required: true,
                        message: "Введите сумму платежа",
                    },
                ]}
            >
                <Input type="number" placeholder="Сумма*" />
            </Form.Item>
        </Form>
    );
};
