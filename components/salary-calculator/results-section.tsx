import { calculateAvailableTime } from "@/utils/calculations";

interface ResultsSectionProps {
  results: {
    newSalary: number;
    totalStockValue: number;
    hourlyWageBefore: number;
    hourlyWageAfter: number;
    hourlyWageIncrease: number;
    freeTimeValueAfter: number;
    totalCompBefore: number;
    totalCompAfter: number;
  };
  showStockOptions: boolean;
  inputs: {
    currentHours: number;
    newHours: number;
  };
}

const IncreaseCard = ({ 
  label, 
  value, 
  percentage, 
  variant = 'green' 
}: { 
  label: string; 
  value: number; 
  percentage?: number;
  variant?: 'green' | 'blue' | 'purple' | 'amber';
}) => {
  const variants = {
    green: 'bg-green-50 border-green-200 text-green-800 text-green-900 dark:bg-green-950 dark:border-green-900 dark:text-green-100',
    blue: 'bg-blue-50 border-blue-200 text-blue-800 text-blue-900 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-100',
    purple: 'bg-purple-50 border-purple-200 text-purple-800 text-purple-900 dark:bg-purple-950 dark:border-purple-900 dark:text-purple-100',
    amber: 'bg-amber-50 border-amber-200 text-amber-800 text-amber-900 dark:bg-amber-950 dark:border-amber-900 dark:text-amber-100',
  };

  return (
    <div className={`border rounded-lg p-3 mb-2 ${variants[variant]}`}>
      <div className="text-sm font-medium">{label}</div>
      <div className="flex justify-between items-baseline">
        <span className="text-lg font-semibold">
          ${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </span>
        {percentage && (
          <span className="text-sm font-medium">
            +{percentage.toLocaleString(undefined, { maximumFractionDigits: 2 })}%
          </span>
        )}
      </div>
    </div>
  );
};

const TimeAvailabilityCard = ({ currentHours, newHours }: { currentHours: number; newHours: number }) => {
  const currentTime = calculateAvailableTime(currentHours);
  const newTime = calculateAvailableTime(newHours);
  const hoursDifference = newTime.weeklyAvailableHours - currentTime.weeklyAvailableHours;
  
  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 mb-2 dark:bg-indigo-950 dark:border-indigo-900 dark:text-indigo-100">
      <div className="text-sm font-medium">Available Free Time</div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div>
          <div className="text-xs text-indigo-600 dark:text-indigo-300">Current</div>
          <div className="font-semibold">
            {currentTime.dailyAvailableHours.toFixed(1)} hours/day
          </div>
          <div className="text-sm">
            {currentTime.weeklyAvailableHours.toFixed(1)} hours/week
          </div>
        </div>
        <div>
          <div className="text-xs text-indigo-600 dark:text-indigo-300">New</div>
          <div className="font-semibold">
            {newTime.dailyAvailableHours.toFixed(1)} hours/day
          </div>
          <div className="text-sm">
            {newTime.weeklyAvailableHours.toFixed(1)} hours/week
          </div>
        </div>
      </div>
      {hoursDifference > 0 && (
        <div className="mt-2 text-sm text-indigo-700 dark:text-indigo-200 font-medium">
          +{hoursDifference.toFixed(1)} extra hours per week for personal projects & family
        </div>
      )}
    </div>
  );
};

export const ResultsSection = ({ results, showStockOptions, inputs }: ResultsSectionProps) => (
  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded">
    <h3 className="font-semibold mb-4 dark:text-gray-100">Results</h3>
    
    <TimeAvailabilityCard 
      currentHours={inputs.currentHours}
      newHours={inputs.newHours}
    />
    
    <IncreaseCard 
      label="New Salary"
      value={results.newSalary}
      percentage={(results.newSalary - results.totalCompBefore) / results.totalCompBefore * 100}
      variant="green"
    />
    
    {showStockOptions && (
      <IncreaseCard 
        label="Total Stock Value"
        value={results.totalStockValue}
        variant="blue"
      />
    )}
    
    <IncreaseCard 
      label="Hourly Wage Change"
      value={results.hourlyWageAfter}
      percentage={results.hourlyWageIncrease}
      variant="purple"
    />
    
    <IncreaseCard 
      label="Value of Additional Free Time"
      value={results.freeTimeValueAfter}
      variant="amber"
    />
    
    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-sm">
          <div className="text-gray-600 dark:text-gray-400">Total Comp Before</div>
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            ${results.totalCompBefore.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>
        </div>
        <div className="text-sm">
          <div className="text-gray-600 dark:text-gray-400">Total Comp After</div>
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            ${results.totalCompAfter.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>
    </div>
  </div>
); 