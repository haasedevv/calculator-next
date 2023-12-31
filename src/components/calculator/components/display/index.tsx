import { useEffect, useRef } from 'react';
import { CalculatorDisplayProps } from '../../@types';
import styles from './styles.module.scss';

export default function CalculatorDisplay({
  displayView,
  historic
}: CalculatorDisplayProps): JSX.Element {
  const historicWrapperRef = useRef<HTMLDivElement>(null);
  const historicContainerRef = useRef<HTMLDivElement>(null);
  const historicComponent: JSX.Element[] = historic.map((expression: string, i: number) => (
    <div
      key={`expression-${i}`}
      className={styles.historicItem}
    >
      {expression}
    </div>
  ));

  useEffect(() => {
    historicWrapperRef.current &&
      historicWrapperRef.current.scrollTo(0, historicContainerRef.current?.offsetHeight || 0);
  }, [historic]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.historicWrapper}
          ref={historicWrapperRef}
        >
          <div
            className={styles.historicContainer}
            ref={historicContainerRef}
          >
            {historicComponent}
          </div>
        </div>

        <div className={styles.visorContainer}>
          {displayView.expression}
          <br />
          {!!displayView.result && `=${displayView.result}`}
        </div>
      </div>
    </div>
  );
}
