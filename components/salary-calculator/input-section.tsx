import { Switch } from '@/components/ui/switch';

interface InputSectionProps {
  inputs: {
    currentSalary: number;
    salaryIncreasePercentage: number;
    stockOptions: number;
    stockOptionValue: number;
    currentHours: number;
    newHours: number;
    weeksPerYear: number;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showStockOptions: boolean;
  setShowStockOptions: (value: boolean) => void;
}

// Sub-components
const SalaryInputs = ({ inputs, handleInputChange }: Pick<InputSectionProps, 'inputs' | 'handleInputChange'>) => (
  <>
    <div>
      <label className="block text-sm font-medium mb-1">Current Salary ($)</label>
      <input
        type="number"
        name="currentSalary"
        value={inputs.currentSalary}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Salary Increase (%)</label>
      <input
        type="number"
        name="salaryIncreasePercentage"
        value={inputs.salaryIncreasePercentage}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
    </div>
  </>
);

const StockOptionsInputs = ({ inputs, handleInputChange }: Pick<InputSectionProps, 'inputs' | 'handleInputChange'>) => (
  <>
    <div>
      <label className="block text-sm font-medium mb-1">Number of Stock Options</label>
      <input
        type="number"
        name="stockOptions"
        value={inputs.stockOptions}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Stock Option Value ($)</label>
      <input
        type="number"
        name="stockOptionValue"
        value={inputs.stockOptionValue}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
    </div>
  </>
);

const HoursInputs = ({ inputs, handleInputChange }: Pick<InputSectionProps, 'inputs' | 'handleInputChange'>) => (
  <>
    <div>
      <label className="block text-sm font-medium mb-1">Current Hours/Week</label>
      <input
        type="number"
        name="currentHours"
        value={inputs.currentHours}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">New Hours/Week</label>
      <input
        type="number"
        name="newHours"
        value={inputs.newHours}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
    </div>
  </>
);

export const InputSection = ({ inputs, handleInputChange, showStockOptions, setShowStockOptions }: InputSectionProps) => (
  <div className="space-y-4">
    <SalaryInputs inputs={inputs} handleInputChange={handleInputChange} />

    <HoursInputs inputs={inputs} handleInputChange={handleInputChange} />

    <div className="flex items-center space-x-2 py-4">
      <Switch 
        checked={showStockOptions}
        onCheckedChange={setShowStockOptions}
      />
      <label className="text-sm font-medium">Include Stock Options</label>
    </div>

    {showStockOptions && (
      <StockOptionsInputs inputs={inputs} handleInputChange={handleInputChange} />
    )}
  </div>
); 