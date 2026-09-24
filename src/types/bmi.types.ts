export type SystemUnit = 'metric' | 'imperial';
export type Gender = 'male' | 'female';

export interface BMIInput {
  age: string;
  gender: Gender;
  height: string;
  weight: string;
  unit: SystemUnit;
}

export type BMICategoryName = 
  | 'Severe Thinness'
  | 'Moderate Thinness'
  | 'Mild Thinness'
  | 'Normal'
  | 'Overweight'
  | 'Obese Class I'
  | 'Obese Class II'
  | 'Obese Class III';

export interface BMICategory {
  name: BMICategoryName;
  min: number;
  max: number;
  color: string;
  barColor: string; // for the visual scale
}

// Keep the old categories const name, but update its content to the 8-tier system
export const BMI_CATEGORIES: BMICategory[] = [
  { name: 'Severe Thinness', min: 0, max: 16, color: 'text-red-700 bg-red-100 border-red-300', barColor: 'bg-red-700' },
  { name: 'Moderate Thinness', min: 16, max: 17, color: 'text-red-500 bg-red-50 border-red-200', barColor: 'bg-red-500' },
  { name: 'Mild Thinness', min: 17, max: 18.5, color: 'text-yellow-600 bg-yellow-100 border-yellow-300', barColor: 'bg-yellow-400' },
  { name: 'Normal', min: 18.5, max: 25, color: 'text-green-600 bg-green-50 border-green-200', barColor: 'bg-green-500' },
  { name: 'Overweight', min: 25, max: 30, color: 'text-yellow-600 bg-yellow-100 border-yellow-300', barColor: 'bg-yellow-400' },
  { name: 'Obese Class I', min: 30, max: 35, color: 'text-red-500 bg-red-50 border-red-200', barColor: 'bg-red-500' },
  { name: 'Obese Class II', min: 35, max: 40, color: 'text-red-600 bg-red-100 border-red-300', barColor: 'bg-red-600' },
  { name: 'Obese Class III', min: 40, max: Infinity, color: 'text-red-700 bg-red-200 border-red-400', barColor: 'bg-red-700' }
];
