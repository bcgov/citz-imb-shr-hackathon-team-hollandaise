import { useState } from 'react';
import { useViewportSize, useDisclosure } from '@mantine/hooks';
import { Box } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { columns } from '@/components/utils/columns';
import ProductTableHeader from '@/components/products/ProductTableHeader';
import AddProductModal from '@/components/modals/AddProductModal';
import { mockData } from '@/components/utils/records';
import ProductTableFooter from '@/components/products/ProductTableFooter';

const ProductTable = () => {
  // Declare necessary state variables
  const [records, setRecords] = useState(mockData);
  const [query, setQuery] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const [addNewOpened, { open: openAddNew, close: closeAddNew }] = useDisclosure(false);

  // Get the viewport height to set the table container height
  const { height: height } = useViewportSize();
  const containerHeight = height * 0.6;

  return (
    <>
      {/* Render the AddProductModal component */}
      <AddProductModal opened={addNewOpened} onClose={closeAddNew} />
      <ProductTableHeader
        query={query}
        setQuery={setQuery}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
        openAddNew={openAddNew}
      />
      <Box sx={{ height: containerHeight }}>
        {/* Render the DataTable component */}
        <DataTable
          withBorder
          borderRadius="md"
          withColumnBorders
          striped
          highlightOnHover
          verticalSpacing="xs"
          columns={columns}
          records={records}
          minHeight={150}
          noRecordsText="No records to show"
          loaderVariant="oval"
          loaderSize="lg"
          loaderColor="blue"
          loaderBackgroundBlur={1}
        />
        <ProductTableFooter records={records} />
      </Box>
    </>
  );
};

export default ProductTable;
