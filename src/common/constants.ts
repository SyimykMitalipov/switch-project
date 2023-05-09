export enum CheckedVariant {
  MONTH  = 40000,
  MROT = 0,
  DAY = 1500,
  HOUR = 400
}


export interface IRadioButton {
    id: number,
    variant: string,
    tooltip?: boolean,
    value: number | string,
  }
  
  
export const options: IRadioButton[] = [
    {
      id: 1,
      variant: 'Оклад за месяц',
      value: CheckedVariant.MONTH,
    },
    {
      id: 2,
      variant: 'МРОТ',
      tooltip: true,
      value: CheckedVariant.MROT,
    },
    {
      id: 3,
      variant: 'Оплата за день',
      value: CheckedVariant.DAY,
    },
    {
      id: 4,
      variant: 'Оплата за час',
      value: CheckedVariant.HOUR,
    },
    
  ]
