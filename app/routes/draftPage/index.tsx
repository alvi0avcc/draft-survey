import React from 'react';
import { useSelector } from 'react-redux';
import DraftInput from '../../components/draftInput';
import type { WritableDraft } from '@reduxjs/toolkit';
import type { SurveyState } from '@/types';
import { useAppSelector } from '@/store';
// import { useAppSelector } from '@/store';
// import DensityInput from '../components/DensityInput';
// import ResourcesInput from '../components/ResourcesInput';
// import ResultsDisplay from '../components/ResultsDisplay';
// import ShipDataLoader from '../components/ShipDataLoader';
// import { useCalculation } from '../hooks/useCalculation';

const SurveyPage: React.FC = () => {
  const {currentShip, initialMeasurements, finalMeasurements,initialResources, finalResources, waterDensity, results, isLoading, error } = useAppSelector((state) => state.survey);
  // const { currentShip, isLoading, error } = useAppSelector((state) => state.survey);
  // const { performCalculation } = useCalculation();

  return (
    <main className="">
      <h1 className="">Расчет драфт-сюрвея</h1>
      
      {/* <ShipDataLoader /> */}

      <section>
        <h2>Initial</h2>
        
      </section>
      
      {!currentShip && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Начальное состояние</h2>
              {/* <DraftInput type="initial" /> */}
              {/* <ResourcesInput type="initial" /> */}
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Конечное состояние</h2>
              {/* <DraftInput type="final" /> */}
              {/* <ResourcesInput type="final" /> */}
            </div>
          </div>
          
          {/* <DensityInput /> */}
          
          <div className="flex justify-center">
            {/* <button
              onClick={performCalculation}
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Расчет...' : 'Рассчитать'}
            </button> */}
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          {/* <ResultsDisplay /> */}
        </>
      )}
    </main>
  );
};

export default SurveyPage;
