
import { BMIResultData } from '../types/bmi.types';
import { getCategoryColor, getCategoryBgColor } from '../utils/bmiUtils';

interface BMIResultProps {
  result: BMIResultData | null;
}

export const BMIResult: React.FC<BMIResultProps> = ({ result }) => {
  if (!result) {
    return (
      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center text-gray-500">
        Enter your height and weight to see your BMI result.
      </div>
    );
  }

  const { bmi, category } = result;
  const colorClass = getCategoryColor(category);
  const bgClass = getCategoryBgColor(category);

  return (
    <div className={`mt-8 p-6 rounded-xl border border-gray-200 text-center transition-all ${bgClass}`}>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Your BMI is</h2>
      <div className={`text-5xl font-bold mb-3 ${colorClass}`} aria-live="polite">
        {bmi}
      </div>
      <p className="text-gray-600 font-medium">
        Category: <span className={`font-bold ${colorClass}`}>{category}</span>
      </p>
    </div>
  );
};
