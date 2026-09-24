import React from 'react';
import type { SystemUnit } from '../types/bmi.types';

interface UnitToggleProps {
  unit: SystemUnit;
  onUnitChange: (unit: SystemUnit) => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ unit, onUnitChange }) => {
  return (
    <div className="flex bg-gray-100 p-1 rounded-lg w-full max-w-sm mx-auto mb-6 shadow-sm">
      <button
        type="button"
        onClick={() => onUnitChange('metric')}
        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
          unit === 'metric'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-500 hover:text-gray-900'
        }`}
        aria-pressed={unit === 'metric'}
      >
        Metric
      </button>
      <button
        type="button"
        onClick={() => onUnitChange('imperial')}
        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
          unit === 'imperial'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-500 hover:text-gray-900'
        }`}
        aria-pressed={unit === 'imperial'}
      >
        Imperial
      </button>
    </div>
  );
};

export default UnitToggle;
