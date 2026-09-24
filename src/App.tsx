import UnitToggle from './components/UnitToggle';
import BMIForm from './components/BMIForm';
import BMIResult from './components/BMIResult';
import { useBMICalculator } from './hooks/useBMICalculator';

function App() {
  const { 
    input, 
    setInput, 
    handleUnitChange, 
    bmi, 
    category,
    healthyWeightRange,
    ponderalIndex 
  } = useBMICalculator();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <main className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden my-8">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">BMI Calculator</h1>
            <p className="text-gray-500 mt-2 text-sm">Check your Body Mass Index quickly</p>
          </div>

          <UnitToggle unit={input.unit} onUnitChange={handleUnitChange} />
          
          <BMIForm input={input} onChange={setInput} />

          <BMIResult 
            bmi={bmi} 
            category={category} 
            healthyWeightRange={healthyWeightRange}
            ponderalIndex={ponderalIndex}
            unit={input.unit}
            age={input.age}
          />
        </div>
        
        {/* Info Footer */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            What is BMI?
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-3">
            Body Mass Index (BMI) is a measure of body fat based on height and weight. 
            It is calculated by dividing weight in kilograms by height in meters squared (kg/m²).
          </p>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Limitations
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            BMI is a useful screening tool but does not diagnose body fatness or health. 
            It cannot distinguish between muscle mass and fat, so athletes may have a high BMI despite low body fat.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
