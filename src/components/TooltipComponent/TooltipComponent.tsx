import { useEffect, useRef, useState } from 'react';
import classes from './TooltipComponent.module.scss';
import { classNames } from 'common/helpers/classNames';

const TooltipComponent = () => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && tooltipRef.current !== event.target) {
        setVisible(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [tooltipRef]);

  return (
    <label
      className={classNames(classes.tooltipContainer, {}, [])}
      onMouseEnter={() => setVisible(true)}
    >
      <span
        ref={tooltipRef}
        onClick={() => setVisible(prev => !prev)}
        className="material-symbols-outlined"
      >
        {visible ? 'cancel' : 'info'}
      </span>
      {visible && (
        <div className={classNames(classes.tooltip, {}, [])}>
          <p>МРОТ - минимальная размер оплаты труда. Разный для разных регионов.</p>
        </div>
      )}
    </label>
  );
};

export default TooltipComponent;
