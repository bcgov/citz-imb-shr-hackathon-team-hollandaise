import { Button, Modal, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useState } from 'react';

const AddProductModal = ({ opened, onClose }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    // Modal component to display the form
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={true}
      title="Create New Product"
      size="md"
      padding="md"
    >
      <TextInput placeholder="Position Number" label="Position Number" />
      <TextInput placeholder="Hiring Manager" label="Hiring Manager" />
      <TextInput placeholder="Position Number" label="Position Number" />
      <TextInput placeholder="Hiring Manager" label="Hiring Manager" />
      <TextInput placeholder="Position Number" label="Position Number" />
      <TextInput placeholder="Hiring Manager" label="Hiring Manager" />
      <DatePickerInput
        valueFormat="YYYY-MM-DD"
        label="Date Submitted"
        placeholder="Date Submitted"
        allowDeselect
        size="sm"
        value={startDate}
        onChange={setStartDate}
      />
      <Button mt="xl" fullWidth={true} variant="outline" type="submit" onClick={onClose}>
        Create
      </Button>
    </Modal>
  );
};

export default AddProductModal;
