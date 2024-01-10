import { useEffect, useState } from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { SalaryTable } from '@/components/SalaryTable/SalaryTable';

export function HomePage() {
  const [salaryData, setSalaryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data/salary/2023.json');
      const data = await response.json();
      setSalaryData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {salaryData.length !== 0 && <SalaryTable data={salaryData} />}
      <ColorSchemeToggle />
    </>
  );
}
