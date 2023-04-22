import { DatePicker, Select } from "antd";
import { TotalAmount } from "../TotalAmount/TotalAmount";

import "./Filters.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setFilters } from "../../store/payments/paymentsSlice";
import dayjs from "dayjs";
import { NoCategoryText } from "../CategorySelect/CategorySelect";

export const Filters: React.FC = () => {
    const filters = useAppSelector((state) => state.payments.filters);
    const categories = useAppSelector((state) => state.categories.categories);

    const dispatch = useAppDispatch();

    const handleDatePickerChange = (arr: any) => {
        if (arr === null) {
            dispatch(
                setFilters({
                    startDate: undefined,
                    endDate: undefined,
                })
            );
        } else {
            dispatch(
                setFilters({
                    startDate: arr[0]?.toString() || null,
                    endDate: arr[1]?.toString() || null,
                })
            );
        }
    };

    const handleSelectChange = (categories: string[]) => {
        dispatch(
            setFilters({
                categories,
            })
        );
    };

    return (
        <div className="filters">
            <DatePicker.RangePicker
                value={[
                    filters.startDate ? dayjs(filters.startDate) : null,
                    filters.endDate ? dayjs(filters.endDate) : null,
                ]}
                onChange={(e) => handleDatePickerChange(e)}
                allowEmpty={[true, true]}
            />
            <Select
                mode="multiple"
                placeholder="Выберите категории"
                value={filters.categories}
                onChange={handleSelectChange}
            >
                <Select.Option label={NoCategoryText} key={NoCategoryText}>
                    {NoCategoryText}
                </Select.Option>
                {categories.map((category) => (
                    <Select.Option label={category.name} key={category.name}>
                        {category.name}
                    </Select.Option>
                ))}
            </Select>
            <TotalAmount />
        </div>
    );
};
