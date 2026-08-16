# BMI Calculator

A lightweight, client-side BMI (Body Mass Index) calculator built with React, TypeScript, and Tailwind CSS. Supports both Metric and Imperial units, with real-time validation and category classification.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Package Manager | npm |
| Backend | None (fully client-side) |

## Features

- Toggle between Metric (cm / kg) and Imperial (ft-in / lbs) units
- Input validation with sensible min/max ranges
- Instant BMI calculation with one-decimal precision
- Color-coded BMI category display (Underweight, Normal, Overweight, Obese)
- Responsive layout (mobile-first, 320px+)
- Accessible form controls (labels, ARIA attributes, keyboard navigation)

## Project Structure

```
bmi-calculator/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BMIForm.tsx          # Input form (height, weight, unit toggle)
│   │   ├── BMIResult.tsx        # Displays calculated BMI + category
│   │   └── UnitToggle.tsx       # Metric/Imperial switch
│   ├── hooks/
│   │   └── useBMICalculator.ts  # Custom hook housing BMI calc logic
│   ├── utils/
│   │   └── bmiUtils.ts          # Pure functions: calculateBMI, getBMICategory, unit conversions
│   ├── types/
│   │   └── bmi.types.ts         # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .eslintrc.cjs
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

```bash
# Clone or navigate into the project folder
cd bmi-calculator

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

### Lint

```bash
npm run lint
```

## BMI Formula & Categories

BMI is calculated as:

```
BMI = weight (kg) / [height (m)]²
```

For imperial inputs, height and weight are converted to metric before calculation.

| Category | BMI Range |
|---|---|
| Underweight | < 18.5 |
| Normal weight | 18.5 – 24.9 |
| Overweight | 25.0 – 29.9 |
| Obese | ≥ 30.0 |

## Validation Rules

| Field | Metric Range | Imperial Range |
|---|---|---|
| Height | 50 – 300 cm | ~1'8" – 9'10" |
| Weight | 2 – 500 kg | ~4.4 – 1102 lbs |

## Notes

- This tool is for general informational purposes only and does not constitute medical advice.
- All calculations happen client-side; no user data is stored or transmitted.

## License

MIT
