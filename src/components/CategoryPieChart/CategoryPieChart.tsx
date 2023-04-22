import { Pie } from "@ant-design/charts";
import { getFilteredPayments } from "../../store/payments/getFilteredPayments";
import { useAppSelector } from "../../store/store";
import {
    NoCategoryColor,
    NoCategoryText,
} from "../CategorySelect/CategorySelect";

import "./CategoryPieChart.scss";

export const CategoryPieChart = () => {
    const payments = useAppSelector(getFilteredPayments);

    const categories = useAppSelector((state) => state.categories.categories);

    const allCategories =
        categories.map((category) => ({
            ...category,
            amount: 0,
        })) || [];

    allCategories.push({
        name: NoCategoryText,
        color: NoCategoryColor,
        amount: 0,
    });

    payments.forEach((payment) => {
        const categoryData = allCategories.find(
            (category) => category.name === payment.category
        );

        if (categoryData) categoryData.amount += payment.amount;
        else allCategories[allCategories.length - 1].amount += payment.amount;
    });

    const config = {
        appendPadding: 10,
        data: allCategories,
        angleField: "amount",
        colorField: "name",
        radius: 0.9,
        color: ({ name }: any) => {
            const foundCategory = allCategories.find(
                (category) => category.name === name
            );
            return foundCategory?.color || NoCategoryColor;
        },
        label: {
            type: "inner",
            offset: "-30%",
            content: ({ amount }: any) => `${amount} ₽`,
            style: {
                fontSize: 14,
                textAlign: "center",
            },
        },
        interactions: [
            {
                type: "element-active",
            },
        ],
    };

    return (
        <div className="pieChart">
            <div>График по категориям</div>

            <Pie {...config} />
        </div>
    );
};
