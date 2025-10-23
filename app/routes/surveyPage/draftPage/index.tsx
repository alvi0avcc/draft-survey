// import { useAppSelector } from '@/store';
// import type { SurveyState } from '@/types';
// import React from 'react';
// import type { WritableDraft } from '@reduxjs/toolkit';
import clsx from 'clsx';
// import { useSelector } from 'react-redux';
// import Input from '@/components/ui/input';
// import InputNumber from '@/components/ui/input/Number';
import DraftInput from '../../../components/draftInput';
import styles from './draftPage.module.css';

// import { useAppSelector } from '@/store';
// import DensityInput from '../components/DensityInput';
// import ResourcesInput from '../components/ResourcesInput';
// import ResultsDisplay from '../components/ResultsDisplay';
// import ShipDataLoader from '../components/ShipDataLoader';
// import { useCalculation } from '../hooks/useCalculation';

const SurveyPage = () => {
  // const {
  //   currentShip,
  //   initialMeasurements,
  //   finalMeasurements,
  //   initialResources,
  //   finalResources,
  //   waterDensity,
  //   results,
  //   isLoading,
  //   error,
  // } = useAppSelector(state => state.survey);
  // const { currentShip, isLoading, error } = useAppSelector((state) => state.survey);
  // const { performCalculation } = useCalculation();

  // const [number, setNumber] = React.useState<number>(0);

  return (
    <main>
      <h1 className="">Calculation</h1>

      <section className={styles.draftSurveyContainer}>
        <section className={clsx(styles.draftSurveyInitial, 'blockLineVert')}>
          <DraftInput state="Initial" />
          <DraftInput state="Intermeddle" />
          <DraftInput state="Final" />
        </section>
      </section>
    </main>
  );
};

export default SurveyPage;
