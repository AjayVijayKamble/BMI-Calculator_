
import { useBMICalculator } from './hooks/useBMICalculator';
import { BMIForm } from './components/BMIForm';
import { BMIResult } from './components/BMIResult';

function App() {
  const { unitSystem, setUnitSystem, metricInputs, imperialInputs, result } = useBMICalculator();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 px-6 py-8 text-center">
          <h1 className="text-3xl font-extrabold text-white">BMI Calculator</h1>
          <p className="mt-2 text-blue-100 text-sm">
            Calculate your Body Mass Index
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <BMIForm
            unitSystem={unitSystem}
            setUnitSystem={setUnitSystem}
            metricInputs={metricInputs}
            imperialInputs={imperialInputs}
          />
          <BMIResult result={result} />
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">BMI Categories:</h3>
          <ul className="text-xs text-gray-600 space-y-1">
            <li><span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Underweight: &lt; 18.5</li>
            <li><span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>Normal weight: 18.5 – 24.9</li>
            <li><span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>Overweight: 25 – 29.9</li>
            <li><span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>Obese: ≥ 30</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
