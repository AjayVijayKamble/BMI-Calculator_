import { useState, useEffect } from 'react';
import type { SystemUnit, BMIInput, BMICategory } from '../types/bmi.types';
import { 
  calculateBMI, 
  getBMICategory, 
  heightToMeters, 
  weightToKg,
  calculateHealthyWeightRange,
  calculatePonderalIndex
} from '../utils/bmiUtils';

interface UseBMICalculatorResult {
  input: BMIInput;
  bmi: number | null;
  category: BMICategory | null;
  healthyWeightRange: [number, number] | null;
  ponderalIndex: number | null;
  setInput: React.Dispatch<React.SetStateAction<BMIInput>>;
  handleUnitChange: (unit: SystemUnit) => void;
}

export const useBMICalculator = (): UseBMICalculatorResult => {
  const [input, setInput] = useState<BMIInput>({
    age: '25',
    gender: 'male',
    height: '',
    weight: '',
    unit: 'metric',
  });

  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<BMICategory | null>(null);
  const [healthyWeightRange, setHealthyWeightRange] = useState<[number, number] | null>(null);
  const [ponderalIndex, setPonderalIndex] = useState<number | null>(null);

  useEffect(() => {
    const heightNum = parseFloat(input.height);
    const weightNum = parseFloat(input.weight);

    // Basic validation
    if (isNaN(heightNum) || isNaN(weightNum) || heightNum <= 0 || weightNum <= 0) {
      setBmi(null);
      setCategory(null);
      setHealthyWeightRange(null);
      setPonderalIndex(null);
      return;
    }

    // Convert to metric for calculation
    const heightM = heightToMeters(heightNum, input.unit);
    const weightK = weightToKg(weightNum, input.unit);

    const calculatedBmi = calculateBMI(weightK, heightM);
    setBmi(calculatedBmi);
    setCategory(getBMICategory(calculatedBmi));
    setHealthyWeightRange(calculateHealthyWeightRange(heightM, input.unit));
    setPonderalIndex(calculatePonderalIndex(weightK, heightM));
  }, [input]);

  const handleUnitChange = (newUnit: SystemUnit) => {
    setInput(prev => {
      if (prev.unit === newUnit) return prev;
      
      return {
        ...prev,
        unit: newUnit,
        height: '',
        weight: '',
      };
    });
  };

  return {
    input,
    bmi,
    category,
    healthyWeightRange,
    ponderalIndex,
    setInput,
    handleUnitChange,
  };
};
