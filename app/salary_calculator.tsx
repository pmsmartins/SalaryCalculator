'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { InputSection } from '@/components/salary-calculator/input-section';
import { ResultsSection } from '@/components/salary-calculator/results-section';
import { ChartsSection } from '@/components/salary-calculator/charts-section';

const SalaryCalculator = () => {
  const [showStockOptions, setShowStockOptions] = useState(false);
  
  const [inputs, setInputs] = useState({
    currentSalary: 80000,
    salaryIncreasePercentage: 5,
    stockOptions: 100,
    stockOptionValue: 100,
    currentHours: 40,
    newHours: 35,
    weeksPerYear: 52
  });

  const [results, setResults] = useState({
    newSalary: 0,
    totalStockValue: 0,
    hourlyWageBefore: 0,
    hourlyWageAfter: 0,
    hourlyWageIncrease: 0,
    totalCompBefore: 0,
    totalCompAfter: 0,
    freeTimeValueBefore: 0,
    freeTimeValueAfter: 0
  });

  const calculate = () => {
    const {
      currentSalary,
      salaryIncreasePercentage,
      stockOptions,
      stockOptionValue,
      currentHours,
      newHours,
      weeksPerYear
    } = inputs;

    // Calculate new salary
    const newSalary = currentSalary * (1 + salaryIncreasePercentage / 100);

    // Calculate total stock value
    const totalStockValue = showStockOptions ? stockOptions * stockOptionValue : 0;

    // Calculate hourly wages
    const hourlyWageBefore = currentSalary / (currentHours * weeksPerYear);
    const hourlyWageAfter = newSalary / (newHours * weeksPerYear);

    // Calculate percentage increase in hourly wage
    const hourlyWageIncrease = ((hourlyWageAfter - hourlyWageBefore) / hourlyWageBefore) * 100;

    // Calculate free time value (based on hourly wage)
    const freeTimeValueBefore = 0; // Reference point
    const freeTimeValueAfter = hourlyWageAfter * ((currentHours - newHours) * weeksPerYear);

    // Calculate total compensation
    const totalCompBefore = currentSalary;
    const totalCompAfter = newSalary + totalStockValue;

    setResults({
      newSalary,
      totalStockValue,
      hourlyWageBefore,
      hourlyWageAfter,
      hourlyWageIncrease,
      totalCompBefore,
      totalCompAfter,
      freeTimeValueBefore,
      freeTimeValueAfter
    });
  };

  useEffect(() => {
    calculate();
  }, [inputs, showStockOptions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const comparisonData = [
    {
      name: 'Before',
      Base: results.totalCompBefore,
      Stock: 0,
      'Free Time Value': results.freeTimeValueBefore
    },
    {
      name: 'After',
      Base: results.newSalary,
      Stock: results.totalStockValue,
      'Free Time Value': results.freeTimeValueAfter
    }
  ];

  const hourlyWageData = [
    {
      name: 'Before',
      'Hourly Wage': results.hourlyWageBefore
    },
    {
      name: 'After',
      'Hourly Wage': results.hourlyWageAfter
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Salary Increase Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputSection 
              inputs={inputs}
              handleInputChange={handleInputChange}
              showStockOptions={showStockOptions}
              setShowStockOptions={setShowStockOptions}
            />
            <div className="space-y-4">
              <ResultsSection 
                results={results}
                showStockOptions={showStockOptions}
              />
              <ChartsSection 
                comparisonData={comparisonData}
                hourlyWageData={hourlyWageData}
                showStockOptions={showStockOptions}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalaryCalculator;