import React from 'react';
import type { BMICategory, SystemUnit } from '../types/bmi.types';

interface BMIResultProps {
  bmi: number | null;
  category: BMICategory | null;
  healthyWeightRange: [number, number] | null;
  ponderalIndex: number | null;
  unit: SystemUnit;
  age: string;
}

const BMIResult: React.FC<BMIResultProps> = ({ 
  bmi, 
  category, 
  healthyWeightRange, 
  ponderalIndex, 
  unit,
  age 
}) => {
  if (bmi === null || category === null) {
    return (
      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center">
        <p className="text-gray-500">Enter your height and weight to see your BMI result.</p>
      </div>
    );
  }

  const ageNum = parseInt(age, 10);
  const showDisclaimer = !isNaN(ageNum) && ageNum < 20;
  
  // Calculate marker position on the 15 to 40 scale
  const minScale = 15;
  const maxScale = 40;
  const range = maxScale - minScale;
  const clampedBmi = Math.max(minScale, Math.min(bmi, maxScale));
  const markerPosition = ((clampedBmi - minScale) / range) * 100;

  return (
    <div className={`mt-8 p-6 rounded-xl border-2 transition-all duration-500 ease-in-out ${category.color} shadow-sm`}>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1 opacity-80">Your BMI is</h3>
        <div className="text-5xl font-bold mb-2 tracking-tight">
          {bmi.toFixed(1)}
        </div>
        <div className="inline-block px-4 py-1 rounded-full bg-white bg-opacity-70 font-semibold tracking-wide text-sm">
          {category.name}
        </div>
      </div>
      
      {/* Visual Indicator Bar (Real-time Scale) */}
      <div className="mt-8 relative pt-2 pb-6">
        {/* Scale Track */}
        <div className="flex h-3 rounded-full overflow-hidden shadow-inner">
          <div className="bg-red-700" style={{ width: '4%' }} title="Severe Thinness (<16)"></div>
          <div className="bg-red-500" style={{ width: '4%' }} title="Moderate Thinness (16-17)"></div>
          <div className="bg-yellow-400" style={{ width: '6%' }} title="Mild Thinness (17-18.5)"></div>
          <div className="bg-green-500" style={{ width: '26%' }} title="Normal (18.5-25)"></div>
          <div className="bg-yellow-400" style={{ width: '20%' }} title="Overweight (25-30)"></div>
          <div className="bg-red-500" style={{ width: '20%' }} title="Obese Class I (30-35)"></div>
          <div className="bg-red-600" style={{ width: '20%' }} title="Obese Class II (35-40)"></div>
        </div>
        
        {/* Labels */}
        <div className="absolute top-[20px] left-0 right-0 flex justify-between text-[10px] text-gray-500 font-bold px-1">
          <span>15</span>
          <span>18.5</span>
          <span>25</span>
          <span>30</span>
          <span>40</span>
        </div>

        {/* Marker */}
        <div 
          className="absolute top-0 w-3 h-7 bg-white border-2 border-gray-800 rounded-sm shadow-md transition-all duration-700 ease-out z-10"
          style={{ left: `calc(${markerPosition}% - 6px)` }}
        ></div>
      </div>

      {/* Additional Metrics */}
      <div className="mt-6 space-y-3 pt-4 border-t border-black/10">
        {healthyWeightRange && (
          <div className="flex justify-between text-sm">
            <span className="opacity-80">Healthy Weight Range:</span>
            <span className="font-medium">
              {healthyWeightRange[0]} - {healthyWeightRange[1]} {unit === 'metric' ? 'kg' : 'lbs'}
            </span>
          </div>
        )}
        {ponderalIndex && (
          <div className="flex justify-between text-sm">
            <span className="opacity-80">Ponderal Index:</span>
            <span className="font-medium">{ponderalIndex} kg/m³</span>
          </div>
        )}
      </div>

      {/* Pediatric Disclaimer */}
      {showDisclaimer && (
        <div className="mt-4 p-3 bg-white/60 rounded text-xs text-gray-700 leading-relaxed">
          <strong>Note:</strong> For children and teens under 20, the standard adult BMI categorization may not be fully accurate. Healthcare providers typically use age- and gender-specific CDC growth charts (percentiles) instead.
        </div>
      )}
    </div>
  );
};

export default BMIResult;
