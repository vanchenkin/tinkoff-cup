import { Payments } from "../../components/Payments/Payments";
import { AddPaymentButton } from "../../components/AddPaymentButton/AddPaymentButton";
import "./MainPage.css";
import { Filters } from "../../components/Filters/Filters";

const MainPage = () => {
    return (
        <div className="main">
            <div className="left">
                <div className="header">
                    <h3 className="header title">Учет расходов</h3>
                    <AddPaymentButton />
                </div>
                <Filters />
                <Payments />
            </div>
            <div className="right"></div>
        </div>
    );
};

export default MainPage;
