import {  useEffect, useRef, useState } from 'react'
import classes from './TooltipComponent.module.scss'

const TooltipComponent = () => {
  
    const [ visible, setVisible ] = useState<boolean>(false)

    const tooltipRef = useRef(null);

  useEffect(() => {

    window.addEventListener('click', (event: MouseEvent) => {
      
      if(tooltipRef.current && tooltipRef.current !== event.target as Node ) {
        setVisible(false)
      }
    })
  }, [ tooltipRef ])
  return (
    
    <label className={classes.tooltipContainer}
    onMouseEnter={() => setVisible(true)}
    >   
  <span ref={tooltipRef} onClick={() => setVisible(prev => !prev)} className='material-symbols-outlined'>{visible ? 'cancel': 'info'}</span>
    {visible && <div className={classes.tooltip}>
        <p>МРОТ - минимальная размер оплаты труда. Разный для разных регионов.</p>
      </div>}
    </label>
  )
}

export default TooltipComponent