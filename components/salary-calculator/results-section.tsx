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
}

export const ResultsSection = ({ results, showStockOptions }: ResultsSectionProps) => (
  <div className="p-4 bg-gray-50 rounded">
    <h3 className="font-semibold mb-4">Results</h3>
    <div className="space-y-2">
      <p>New Salary: ${results.newSalary.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
      {showStockOptions && (
        <p>Total Stock Value: ${results.totalStockValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
      )}
      <p>Hourly Wage Before: ${results.hourlyWageBefore.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
      <p>Hourly Wage After: ${results.hourlyWageAfter.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
      <p>Hourly Wage Increase: {results.hourlyWageIncrease.toLocaleString(undefined, { maximumFractionDigits: 2 })}%</p>
      <p>Value of Additional Free Time: ${results.freeTimeValueAfter.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
      <p>Total Compensation Before: ${results.totalCompBefore.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
      <p>Total Compensation After: ${results.totalCompAfter.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
    </div>
  </div>
); 