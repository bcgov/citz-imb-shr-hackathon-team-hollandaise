import { useSalaryAssessment } from '@/hooks';

const Table = () => {
  const { data, isError, isLoading } = useSalaryAssessment();

  if (isLoading) {
    return (
      <div className="w-full">
        <p className="text-4xl text-center text-gray-500">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full">
        <p className="text-4xl text-center text-gray-500">Error: Loading data</p>
      </div>
    );
  }

  console.log('data:', data);

  return (
    <div className="w-full">
      <p className="text-4xl text-center text-gray-500">You are logged in.</p>
    </div>
  );
};

export default Table;
