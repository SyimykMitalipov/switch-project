import { ChangeEvent, useState } from "react";
import classes from './App.module.scss'
import { RadioButton } from "./components/RadioButton";
import { IRadioButton, options, CheckedVariant } from "common/constants";
import { TotalSumComponent } from "components/TotalSumComponent";
import ToggleElement from "components/ToggleElement/ToggleElement";
import { PercentVariants } from "common/helpers";



const App = () => {

  const [selectedOption, setSelectedOption] = useState<number>(+options[0].value);

  const [ togglePit, setTogglePit ] = useState<PercentVariants>('pit')

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {    
    
    setSelectedOption(+event.target.value);

  }

  return (
    <div className={classes.wrapper}>

      <div className={classes.radioGroup}>  

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
       <div className={classes.sumInput}>
        <input type="text" disabled value={selectedOption} />

        <span>₽ {selectedOption === CheckedVariant.DAY ? 'в день' : selectedOption === CheckedVariant.HOUR ? 'в час' : ''}</span>

      </div>}

      </div>
      {selectedOption === CheckedVariant.MONTH && <TotalSumComponent type={togglePit} count={selectedOption} />}
    </div>
  );
}

export default App;
