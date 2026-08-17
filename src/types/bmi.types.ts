export type UnitSystem = 'metric' | 'imperial';

export interface MetricInput {
  heightCm: number;
  weightKg: number;
}

export interface ImperialInput {
  heightFt: number;
  heightIn: number;
  weightLbs: number;
}

export type BMICategory = 'Underweight' | 'Normal' | 'Overweight' | 'Obese';

export interface BMIResultData {
  bmi: number;
  category: BMICategory;
}
