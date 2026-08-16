import { useState, useMemo } from 'react';
import { UnitSystem, BMIResultData } from '../types/bmi.types';
import { calculateBMIFromMetric, calculateBMIFromImperial, getBMICategory } from '../utils/bmiUtils';

export const useBMICalculator = () => {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric');

  // Metric State
  const [heightCm, setHeightCm] = useState<string>('');
  const [weightKg, setWeightKg] = useState<string>('');

  // Imperial State
  const [heightFt, setHeightFt] = useState<string>('');
  const [heightIn, setHeightIn] = useState<string>('');
  const [weightLbs, setWeightLbs] = useState<string>('');

  const result: BMIResultData | null = useMemo(() => {
    let bmi: number | null = null;

    if (unitSystem === 'metric') {
      const h = parseFloat(heightCm);
      const w = parseFloat(weightKg);
      if (!isNaN(h) && h >= 50 && h <= 300 && !isNaN(w) && w >= 2 && w <= 500) {
         bmi = calculateBMIFromMetric({ heightCm: h, weightKg: w });
      }
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inch = parseFloat(heightIn) || 0;
      const wLbs = parseFloat(weightLbs);

      const totalInches = (ft * 12) + inch;
      // ~1'8" to 9'10" is ~20 to 118 inches
      // 4.4 to 1102 lbs
      if (totalInches >= 20 && totalInches <= 118 && !isNaN(wLbs) && wLbs >= 4.4 && wLbs <= 1102) {
         bmi = calculateBMIFromImperial({ heightFt: ft, heightIn: inch, weightLbs: wLbs });
      }
    }

    if (bmi !== null) {
      return {
        bmi,
        category: getBMICategory(bmi)
      };
    }
    return null;
  }, [unitSystem, heightCm, weightKg, heightFt, heightIn, weightLbs]);

  return {
    unitSystem,
    setUnitSystem,
    metricInputs: {
      heightCm, setHeightCm,
      weightKg, setWeightKg
    },
    imperialInputs: {
      heightFt, setHeightFt,
      heightIn, setHeightIn,
      weightLbs, setWeightLbs
    },
    result
  };
};
