import { Button, Modal, TextInput, Textarea, ScrollArea } from '@mantine/core';
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
      title="Create New"
      size="md"
      padding="md"
      scrollAreaComponent={ScrollArea.Autosize}
    >
      <TextInput placeholder="Name" label="Name" />
      <TextInput placeholder="Current Classification" label="Current Classification" />
      <TextInput placeholder="Current Job Title" label="Current Job Title" />
      <TextInput placeholder="Hiring Manager" label="Hiring Manager" />
      <TextInput placeholder="Position Number" label="Position Number" />
      <TextInput placeholder="Current Salary" label="Current Salary" />
      <TextInput placeholder="Current Organization" label="Current Organization" />
      <TextInput placeholder="Education Experience" label="Education Experience" />
      <TextInput placeholder="Proposed Job Title" label="Proposed Job Title" />
      <TextInput placeholder="Proposed Classification" label="Proposed Classification" />
      <TextInput placeholder="Proposed Appointment" label="Proposed Appointment" />
      <TextInput placeholder="Proposed Salary" label="Proposed Salary" />
      <Textarea placeholder="Comments" label="Comments" />
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
