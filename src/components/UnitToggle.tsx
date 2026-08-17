
import { UnitSystem } from '../types/bmi.types';

interface UnitToggleProps {
  unitSystem: UnitSystem;
  onChange: (unit: UnitSystem) => void;
}

export const UnitToggle: React.FC<UnitToggleProps> = ({ unitSystem, onChange }) => {
  return (
    <div className="flex w-full mb-6 bg-gray-100 rounded-lg p-1" role="group" aria-label="Unit system toggle">
      <button
        type="button"
        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          unitSystem === 'metric'
            ? 'bg-white shadow text-gray-900'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onChange('metric')}
        aria-pressed={unitSystem === 'metric'}
      >
        Metric
      </button>
      <button
        type="button"
        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          unitSystem === 'imperial'
            ? 'bg-white shadow text-gray-900'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => onChange('imperial')}
        aria-pressed={unitSystem === 'imperial'}
      >
        Imperial
      </button>
    </div>
  );
};
