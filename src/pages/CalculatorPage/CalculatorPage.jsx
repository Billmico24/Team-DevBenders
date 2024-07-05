import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import UserInfo from 'components/UserInfo/UserInfo';
import scss from './CalculatorPage.module.scss';

function CalculatorPage() {
  return (
    <div className={scss.calculatorPage}>
      <div className={scss.btnContainer}>
        <UserInfo className={scss.navigation__list} />
      </div>
      <DailyCaloriesForm />
    </div>
  );
}

export default CalculatorPage;
