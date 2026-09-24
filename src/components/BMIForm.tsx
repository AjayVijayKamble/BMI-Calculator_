import React, { useEffect, useState } from 'react';
import type { BMIInput } from '../types/bmi.types';

interface BMIFormProps {
  input: BMIInput;
  onChange: React.Dispatch<React.SetStateAction<BMIInput>>;
}

const BMIForm: React.FC<BMIFormProps> = ({ input, onChange }) => {
  const isMetric = input.unit === 'metric';

  // Local state for imperial height parsing (feet and inches)
  const [feet, setFeet] = useState<string>('');
  const [inches, setInches] = useState<string>('');

  // Sync local imperial state with main input state when switching units
  useEffect(() => {
    if (input.unit === 'imperial' && input.height === '') {
      setFeet('');
      setInches('');
    }
  }, [input.unit, input.height]);

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...input, height: e.target.value });
  };

  const handleImperialHeightChange = (type: 'feet' | 'inches', value: string) => {
    const parsedValue = value.replace(/[^0-9.]/g, '');
    let newFeet = feet;
    let newInches = inches;

    if (type === 'feet') {
      newFeet = parsedValue;
      setFeet(newFeet);
    } else {
      newInches = parsedValue;
      setInches(newInches);
    }

    const totalInches = (parseFloat(newFeet || '0') * 12) + parseFloat(newInches || '0');
    onChange({ ...input, height: totalInches > 0 ? totalInches.toString() : '' });
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...input, weight: e.target.value });
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...input, age: e.target.value });
  };

  const handleGenderChange = (gender: 'male' | 'female') => {
    onChange({ ...input, gender });
  };

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-4">
        {/* Age Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="number"
              min="2"
              max="120"
              value={input.age}
              onChange={handleAgeChange}
              className="block w-full rounded-md border-gray-300 pl-4 pr-12 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm border"
              placeholder="e.g. 25"
              aria-label="Age"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">yrs</span>
            </div>
          </div>
        </div>

        {/* Gender Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <div className="flex bg-gray-50 p-1 rounded-md border border-gray-200 h-[46px]">
            <button
              type="button"
              onClick={() => handleGenderChange('male')}
              className={`flex-1 rounded text-sm font-medium transition-colors ${
                input.gender === 'male' ? 'bg-white text-blue-600 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => handleGenderChange('female')}
              className={`flex-1 rounded text-sm font-medium transition-colors ${
                input.gender === 'female' ? 'bg-white text-pink-600 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Female
            </button>
          </div>
        </div>
      </div>

      {/* Height Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Height
        </label>
        {isMetric ? (
          <div className="relative rounded-md shadow-sm">
            <input
              type="number"
              min="50"
              max="300"
              step="any"
              value={input.height}
              onChange={handleHeightChange}
              className="block w-full rounded-md border-gray-300 pl-4 pr-12 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm border"
              placeholder="e.g. 175"
              aria-label="Height in centimeters"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">cm</span>
            </div>
          </div>
        ) : (
          <div className="flex space-x-4">
            <div className="relative rounded-md shadow-sm flex-1">
              <input
                type="number"
                min="1"
                max="9"
                value={feet}
                onChange={(e) => handleImperialHeightChange('feet', e.target.value)}
                className="block w-full rounded-md border-gray-300 pl-4 pr-10 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm border"
                placeholder="e.g. 5"
                aria-label="Height in feet"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 sm:text-sm">ft</span>
              </div>
            </div>
            <div className="relative rounded-md shadow-sm flex-1">
              <input
                type="number"
                min="0"
                max="11"
                step="any"
                value={inches}
                onChange={(e) => handleImperialHeightChange('inches', e.target.value)}
                className="block w-full rounded-md border-gray-300 pl-4 pr-10 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm border"
                placeholder="e.g. 9"
                aria-label="Height in inches"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 sm:text-sm">in</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Weight Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Weight
        </label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="number"
            min={isMetric ? "2" : "4"}
            max={isMetric ? "500" : "1100"}
            step="any"
            value={input.weight}
            onChange={handleWeightChange}
            className="block w-full rounded-md border-gray-300 pl-4 pr-12 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm border"
            placeholder={isMetric ? "e.g. 70" : "e.g. 150"}
            aria-label={`Weight in ${isMetric ? 'kilograms' : 'pounds'}`}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm">{isMetric ? 'kg' : 'lbs'}</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BMIForm;
