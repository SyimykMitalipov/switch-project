import { FC } from 'react'
import classes from './TotalSumComponent.module.scss'
import { percentSum } from 'common/helpers/totalsumHelper'
import { PercentVariants } from 'common/helpers/totalsumHelper'
import { classNames } from 'common/helpers/classNames'
interface ITotalSumComponent {
  count: number,
  type: PercentVariants
}
  const TotalSumComponent: FC<ITotalSumComponent> = ({ count, type }) => {

  const { firstLine, withPercent, lastLine } = percentSum(count,type); 
  
  return (
    <div className={classNames(classes.totalSum, {} , [])}>
          <p><span>{firstLine}</span> сотрудник будет получать на руки</p>
          <p><span>{withPercent}</span> НДФЛ от оклада</p>
          <p><span>{lastLine}</span>За сотрудника в месяц</p>
      </div>
  )
}

export default TotalSumComponent;