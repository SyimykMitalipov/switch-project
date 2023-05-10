import { useState } from "react";
import classes from './ToggleElement.module.scss'
import { PercentVariants } from "common/helpers/totalsumHelper";
import { classNames } from "common/helpers/classNames";

const ToggleSwitch = ({ setTogglePit}: { setTogglePit: React.Dispatch<React.SetStateAction<PercentVariants>>}) => { 

  const [switchState, setSwitchState] = useState<boolean>(true);  

  const handleOnChange = () => {
    setSwitchState(!switchState)
    const newVariantToggle = switchState ? 'pit' : 'default';
    setTogglePit(newVariantToggle);

  };

  return (
    <div className={classNames(classes.toggleWrapper, {}, [])}>
      <span className={classNames(classes.span, { [classes.disabled]: switchState }, [])}>Указать с НДФЛ</span>
      <label className={classNames(classes.toggle, {},[])} htmlFor="checkboxId"> 
        <input 
          id="checkboxId" 
          type="checkbox" 
          checked={switchState}
          onChange={handleOnChange} />   
          <span className={classNames(classes.slider, {}, [])} />
      </label>
      <span className={classNames(classes.span, { [classes.disabled]: !switchState }, [])}>БЕЗ НДФЛ</span>
    </div> 
  );
}
export default ToggleSwitch;