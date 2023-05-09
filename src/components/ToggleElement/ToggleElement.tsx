import { useState } from "react";
import classes from './ToggleElement.module.scss'
import { PercentVariants } from "common/helpers";


const ToggleSwitch = ({ setTogglePit}: { setTogglePit: React.Dispatch<React.SetStateAction<PercentVariants>>}) => { 

  const [switchState, setSwitchState] = useState<boolean>(true);  

  const handleOnChange = () => {
    setSwitchState(!switchState)
    const newVariantToggle = switchState ? 'pit' : 'default';
    setTogglePit(newVariantToggle);

  };

  return (
    <div className={classes.toggleWrapper}>
      <span className={`${switchState ? classes['disabled'] : ''}`}>Указать с НДФЛ</span>
      <label className={classes.toggle} htmlFor="checkboxId"> 
        <input 
          id="checkboxId" 
          type="checkbox" 
          checked={switchState}
          onChange={handleOnChange} />   
          <span className={classes.slider} />
      </label>
      <span className={`${!switchState ? classes['disabled'] : ''}`}>БЕЗ НДФЛ</span>
    </div> 
  );
}
export default ToggleSwitch;