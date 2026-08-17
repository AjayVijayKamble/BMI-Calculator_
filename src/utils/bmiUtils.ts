import { BMICategory, ImperialInput, MetricInput } from '../types/bmi.types';

export const calculateBMIFromMetric = ({ heightCm, weightKg }: MetricInput): number | null => {
  if (heightCm <= 0 || weightKg <= 0) return null;
  const heightM = heightCm / 100;
  // BMI = weight (kg) / [height (m)]²
  return Number((weightKg / (heightM * heightM)).toFixed(1));
};

export const calculateBMIFromImperial = ({ heightFt, heightIn, weightLbs }: ImperialInput): number | null => {
  if (heightFt < 0 || heightIn < 0 || weightLbs <= 0) return null;
  const totalInches = (heightFt * 12) + heightIn;
  if (totalInches <= 0) return null;
  const heightCm = totalInches * 2.54;
  const weightKg = weightLbs * 0.453592;
  return calculateBMIFromMetric({ heightCm, weightKg });
};

export const getBMICategory = (bmi: number): BMICategory => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

export const getCategoryColor = (category: BMICategory): string => {
  switch (category) {
    case 'Underweight': return 'text-blue-500';
    case 'Normal': return 'text-green-500';
    case 'Overweight': return 'text-yellow-500';
    case 'Obese': return 'text-red-500';
    default: return 'text-gray-500';
  }
};

export const getCategoryBgColor = (category: BMICategory): string => {
  switch (category) {
    case 'Underweight': return 'bg-blue-100';
    case 'Normal': return 'bg-green-100';
    case 'Overweight': return 'bg-yellow-100';
    case 'Obese': return 'bg-red-100';
    default: return 'bg-gray-100';
  }
};
