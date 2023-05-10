import { FC, InputHTMLAttributes } from 'react'
import { IRadioButton } from 'common/constants'
import classes from './RadioButton.module.scss'
import { TooltipComponent } from 'components/TooltipComponent'
import { classNames } from 'common/helpers/classNames'

interface IRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    option: IRadioButton
}

const RadioButton: FC<IRadioButtonProps> = ({ option, id,  ...attributes }) => {
  return (
    <div className={classNames(classes.radioButton, {}, [])}>
     <input
     id={id}
          {...attributes}
          />
          <label htmlFor={id}>
          {option.variant} {option.tooltip &&  <TooltipComponent  /> }
        </label>
    </div>
  )
}

export default RadioButton