import { Button, Divider, Input, Select, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useState } from "react";
import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";
import {
    addCategory,
    removeCategory,
} from "../../store/categories/categoriesSlice";

type Props = {
    onChange: (name: string) => void;
};

export const NoCategoryText = "Без категории";
export const NoCategoryColor = "#808080";

export const CategorySelect: React.FC<Props> = ({ onChange }) => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categories.categories);

    const [value, setValue] = useState(NoCategoryText);
    const [name, setName] = useState("");
    const [selectLocked, setSelectLocked] = useState(false);

    const handleAddCategory = () => {
        dispatch(addCategory({ name }));
        setName("");
    };

    const handleRemoveCategory = (name: string) => {
        dispatch(removeCategory(name));
    };

    const handleChange = (name: string) => {
        if (!selectLocked) {
            setValue(name);
            onChange(name);
        }
    };

    return (
        <Select
            placeholder="Выберите категорию..."
            showSearch
            value={value}
            filterOption={(inputValue, option) =>
                (option?.label as string)
                    ?.toLowerCase()
                    .includes(inputValue.toLowerCase()) || false
            }
            onChange={(value) => handleChange(value)}
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Divider style={{ margin: "8px 0" }} />
                    <Space.Compact block>
                        <Input
                            placeholder="Добавить категорию"
                            value={name}
                            width={"100%"}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Button
                            icon={<PlusOutlined />}
                            disabled={!name}
                            onClick={handleAddCategory}
                        />
                    </Space.Compact>
                </>
            )}
        >
            <Select.Option
                key={NoCategoryText}
                value={NoCategoryText}
                label={NoCategoryText}
            >
                {NoCategoryText}
            </Select.Option>
            {categories.map((category) => (
                <Select.Option
                    key={category.name}
                    value={category.name}
                    label={category.name}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div>{category.name}</div>
                        <ConfirmModal
                            message={`Вы уверены что хотите удалить категорию ${category.name}?`}
                            description="Все платежи переведутся в статус Без категории"
                            onConfirm={() =>
                                handleRemoveCategory(category.name)
                            }
                            afterOpenChange={(open) => setSelectLocked(open)}
                        >
                            <CloseCircleFilled />
                        </ConfirmModal>
                    </div>
                </Select.Option>
            ))}
        </Select>
    );
};
