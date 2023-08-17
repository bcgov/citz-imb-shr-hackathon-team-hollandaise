import { useSalaryAssessment } from '@/hooks';
import ProductTable from '@/components/products/ProductTable';

const Table = () => {
  // const { data, isError, isLoading } = useSalaryAssessment();

  // if (isLoading) {
  //   return (
  //     <div className="w-full">
  //       <p className="text-4xl text-center text-gray-500">Loading...</p>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="w-full">
  //       <p className="text-4xl text-center text-gray-500">Error while Loading data</p>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full">
      <ProductTable />
    </div>
  );
};

export default Table;
