import { Payments } from "../../components/Payments/Payments";
import { AddPaymentButton } from "../../components/AddPaymentButton/AddPaymentButton";
import "./MainPage.css";
import { Filters } from "../../components/Filters/Filters";
import { CategoryPieChart } from "../../components/CategoryPieChart/CategoryPieChart";

const MainPage = () => {
    return (
        <div className="main">
            <div className="header">
                <h3 className="header title">Учет расходов</h3>
                <AddPaymentButton />
            </div>
            <Filters />
            <Payments />
            <CategoryPieChart />
        </div>
    );
};

export default MainPage;
