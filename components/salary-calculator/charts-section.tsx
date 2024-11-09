import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  BarChart, 
  Bar 
} from 'recharts';

interface ChartsSectionProps {
  comparisonData: Array<{
    name: string;
    Base: number;
    Stock: number;
    'Free Time Value': number;
  }>;
  hourlyWageData: Array<{
    name: string;
    'Hourly Wage': number;
  }>;
  showStockOptions: boolean;
}

export const ChartsSection = ({ comparisonData, hourlyWageData, showStockOptions }: ChartsSectionProps) => (
  <div className="space-y-12">
    <div className="h-72">
      <h4 className="text-sm font-medium mb-4 dark:text-gray-100">Total Compensation Comparison</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={comparisonData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="Base" fill="#8884d8" stackId="a" name="Base Salary" />
          {showStockOptions && (
            <Bar dataKey="Stock" fill="#82ca9d" stackId="a" name="Stock Value" />
          )}
          <Bar dataKey="Free Time Value" fill="#ffc658" stackId="a" name="Free Time Value" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="h-72">
      <h4 className="text-sm font-medium mb-4 dark:text-gray-100">Hourly Wage Comparison</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={hourlyWageData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="Hourly Wage" fill="#8884d8" name="Hourly Wage" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
); 