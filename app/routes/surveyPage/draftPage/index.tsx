import React from 'react';
import { useSelector } from 'react-redux';
import DraftInput from '../../../components/draftInput';
import type { WritableDraft } from '@reduxjs/toolkit';
import type { SurveyState } from '@/types';
import { useAppSelector } from '@/store';
import styles from './draftPage.module.css'
import clsx from 'clsx';
import Input from '@/components/ui/input';
import InputNumber from '@/components/ui/input/Number';
// import { useAppSelector } from '@/store';
// import DensityInput from '../components/DensityInput';
// import ResourcesInput from '../components/ResourcesInput';
// import ResultsDisplay from '../components/ResultsDisplay';
// import ShipDataLoader from '../components/ShipDataLoader';
// import { useCalculation } from '../hooks/useCalculation';

const SurveyPage = () => {
  const {currentShip, initialMeasurements, finalMeasurements,initialResources, finalResources, waterDensity, results, isLoading, error } = useAppSelector((state) => state.survey);
  // const { currentShip, isLoading, error } = useAppSelector((state) => state.survey);
  // const { performCalculation } = useCalculation();

  const [number, setNumber] = React.useState<number>(0);

  return (
    <main>
      <h1 className="">Calculation</h1>

      <section className={styles.draftSurveyContainer}>

        <section className={clsx(styles.draftSurveyInitial, 'blockLineVert')}>
          <DraftInput state='Initial'/>
          <DraftInput state='Intermeddle'/>
          <DraftInput state='Final'/>
        </section>

      </section>
    </main>
  );
};

export default SurveyPage;
