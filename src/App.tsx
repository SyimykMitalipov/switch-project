import { ChangeEvent, useState } from "react";
import classes from './App.module.scss'
import { RadioButton } from "./components/RadioButton";
import { IRadioButton, options, CheckedVariant, VariantValue } from "common/constants";
import { TotalSumComponent } from "components/TotalSumComponent";
import ToggleElement from "components/ToggleElement/ToggleElement";
import { PercentVariants } from "common/helpers/totalsumHelper";
import { classNames } from "common/helpers/classNames";



type TextVariants = Record<VariantValue, string>

const textVariants: TextVariants = { // константа чтобы не использовать тернарки
  [CheckedVariant.HOUR]: 'В час',
  [CheckedVariant.DAY]: 'В день',
}

const App = () => {

  const [selectedOption, setSelectedOption] = useState<number>(+options[0].value);

  const [ togglePit, setTogglePit ] = useState<PercentVariants>('pit')

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {    
    
    setSelectedOption(+event.target.value);

  }

  return (
    <div className={classNames(classes.wrapper ,{},[])}>
      <div className={classNames(classes.radioGroup, {}, [])}>  
      <p>Сумма</p>

        {options.map((option: IRadioButton) => <label key={option.id}>
            <RadioButton
              id={String(option.id)}
              type="radio"
              value={option.value}
              checked={selectedOption === option.value} 
              option={option} 
              onChange={handleOptionChange}
            />

          </label>
        )}
        { selectedOption !== CheckedVariant.MROT && <ToggleElement  setTogglePit={setTogglePit} /> }

      {selectedOption !== CheckedVariant.MROT && 
       <div className={classNames(classes.sumInput, {}, [])}>
        <input type="text" disabled value={selectedOption} />
        <span>₽ {textVariants[selectedOption]}</span>
      </div>}

      </div>
      {selectedOption === CheckedVariant.MONTH && <TotalSumComponent type={togglePit} count={selectedOption} />}
    </div>
  );
}

export default App;
