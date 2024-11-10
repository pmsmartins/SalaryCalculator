export const calculateAvailableTime = (workHours: number) => {
  const WEEKDAY_HOURS = 24;
  const SLEEP_HOURS = 8;
  const COMMUTE_HOURS = 1.5;
  const MEALS_AND_FAMILY_ROUTINE = 2.5;
  
  const availableHoursPerDay = WEEKDAY_HOURS - (
    SLEEP_HOURS + 
    COMMUTE_HOURS + 
    MEALS_AND_FAMILY_ROUTINE + 
    workHours
  );
  
  // Calculate weekly available hours (considering only weekdays)
  const weeklyAvailableHours = availableHoursPerDay * 5;
  
  return {
    dailyAvailableHours: availableHoursPerDay,
    weeklyAvailableHours: weeklyAvailableHours,
    monthlyAvailableHours: weeklyAvailableHours * 4,
    yearlyAvailableHours: weeklyAvailableHours * 52,
  };
}; 