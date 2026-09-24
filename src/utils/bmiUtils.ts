import { BMI_CATEGORIES } from '../types/bmi.types';
import type { SystemUnit, BMICategory } from '../types/bmi.types';

/**
 * Converts height to meters.
 */
export const heightToMeters = (height: number, unit: SystemUnit): number => {
  if (unit === 'metric') {
    return height / 100;
  }
  return height * 0.0254;
};

/**
 * Converts weight to kilograms.
 */
export const weightToKg = (weight: number, unit: SystemUnit): number => {
  if (unit === 'metric') {
    return weight;
  }
  return weight * 0.453592;
};

/**
 * Calculates BMI using the formula: weight(kg) / (height(m))^2
 */
export const calculateBMI = (weightKg: number, heightM: number): number => {
  if (heightM <= 0 || weightKg <= 0) return 0;
  const bmi = weightKg / (heightM * heightM);
  return Math.round(bmi * 10) / 10;
};

/**
 * Determines the BMI category based on the BMI value.
 */
export const getBMICategory = (bmi: number): BMICategory => {
  const category = BMI_CATEGORIES.find(c => bmi >= c.min && bmi < c.max);
  if (category) return category;
  
  // Handle edge case exactly on the line
  const exactMatch = BMI_CATEGORIES.find(c => bmi === c.max);
  if (exactMatch) return exactMatch;

  // Fallback (e.g. extremely high)
  return BMI_CATEGORIES[BMI_CATEGORIES.length - 1];
};

/**
 * Calculates Healthy Weight Range (based on normal BMI of 18.5 - 25)
 * Returns a tuple of [minWeight, maxWeight] in the appropriate unit.
 */
export const calculateHealthyWeightRange = (heightM: number, unit: SystemUnit): [number, number] => {
  const minWeightKg = 18.5 * (heightM * heightM);
  const maxWeightKg = 25 * (heightM * heightM);

  if (unit === 'metric') {
    return [Math.round(minWeightKg * 10) / 10, Math.round(maxWeightKg * 10) / 10];
  } else {
    // Convert kg back to lbs
    const minWeightLbs = minWeightKg / 0.453592;
    const maxWeightLbs = maxWeightKg / 0.453592;
    return [Math.round(minWeightLbs * 10) / 10, Math.round(maxWeightLbs * 10) / 10];
  }
};

/**
 * Calculates Ponderal Index: weight(kg) / height(m)^3
 */
export const calculatePonderalIndex = (weightKg: number, heightM: number): number => {
  if (heightM <= 0 || weightKg <= 0) return 0;
  const pi = weightKg / (heightM * heightM * heightM);
  return Math.round(pi * 100) / 100;
};
