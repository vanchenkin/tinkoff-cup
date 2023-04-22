import { useState } from "react";
import { Button, Form, Modal } from "antd";
import { AddPaymentForm } from "../AddPaymentForm/AddPaymentForm";

export const AddPaymentButton = () => {
    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

    const handleOk = () => {
        form.submit();
    };

    return (
        <>
            <Button onClick={showModal}>Добавить</Button>
            <Modal
                closable={false}
                open={isModalOpen}
                onCancel={hideModal}
                onOk={handleOk}
                okText="Добавить"
                cancelText="Отмена"
            >
                <AddPaymentForm form={form} onFinish={hideModal} />
            </Modal>
        </>
    );
};
