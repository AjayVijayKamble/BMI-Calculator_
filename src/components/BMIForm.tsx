
import { UnitSystem } from '../types/bmi.types';
import { UnitToggle } from './UnitToggle';

interface BMIFormProps {
  unitSystem: UnitSystem;
  setUnitSystem: (u: UnitSystem) => void;
  metricInputs: {
    heightCm: string;
    setHeightCm: (v: string) => void;
    weightKg: string;
    setWeightKg: (v: string) => void;
  };
  imperialInputs: {
    heightFt: string;
    setHeightFt: (v: string) => void;
    heightIn: string;
    setHeightIn: (v: string) => void;
    weightLbs: string;
    setWeightLbs: (v: string) => void;
  };
}

export const BMIForm: React.FC<BMIFormProps> = ({
  unitSystem,
  setUnitSystem,
  metricInputs,
  imperialInputs
}) => {
  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <UnitToggle unitSystem={unitSystem} onChange={setUnitSystem} />

      <div className="space-y-4">
        {unitSystem === 'metric' ? (
          <>
            <div>
              <label htmlFor="heightCm" className="block text-sm font-medium text-gray-700 mb-1">
                Height (cm)
              </label>
              <input
                id="heightCm"
                type="number"
                min="50"
                max="300"
                value={metricInputs.heightCm}
                onChange={(e) => metricInputs.setHeightCm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block shadow-sm sm:text-sm"
                placeholder="e.g. 175"
                aria-describedby="heightCm-description"
              />
              <span id="heightCm-description" className="sr-only">Enter height in centimeters between 50 and 300</span>
            </div>
            <div>
              <label htmlFor="weightKg" className="block text-sm font-medium text-gray-700 mb-1">
                Weight (kg)
              </label>
              <input
                id="weightKg"
                type="number"
                min="2"
                max="500"
                value={metricInputs.weightKg}
                onChange={(e) => metricInputs.setWeightKg(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block shadow-sm sm:text-sm"
                placeholder="e.g. 70"
                aria-describedby="weightKg-description"
              />
              <span id="weightKg-description" className="sr-only">Enter weight in kilograms between 2 and 500</span>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Height (ft & in)
              </label>
              <div className="flex space-x-2">
                <input
                  id="heightFt"
                  type="number"
                  min="1"
                  max="9"
                  value={imperialInputs.heightFt}
                  onChange={(e) => imperialInputs.setHeightFt(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block shadow-sm sm:text-sm"
                  placeholder="ft"
                  aria-label="Height in feet"
                />
                <input
                  id="heightIn"
                  type="number"
                  min="0"
                  max="11"
                  value={imperialInputs.heightIn}
                  onChange={(e) => imperialInputs.setHeightIn(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block shadow-sm sm:text-sm"
                  placeholder="in"
                  aria-label="Height in inches"
                />
              </div>
            </div>
            <div>
              <label htmlFor="weightLbs" className="block text-sm font-medium text-gray-700 mb-1">
                Weight (lbs)
              </label>
              <input
                id="weightLbs"
                type="number"
                min="4"
                max="1102"
                value={imperialInputs.weightLbs}
                onChange={(e) => imperialInputs.setWeightLbs(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block shadow-sm sm:text-sm"
                placeholder="e.g. 150"
                aria-describedby="weightLbs-description"
              />
              <span id="weightLbs-description" className="sr-only">Enter weight in pounds</span>
            </div>
          </>
        )}
      </div>
    </form>
  );
};
