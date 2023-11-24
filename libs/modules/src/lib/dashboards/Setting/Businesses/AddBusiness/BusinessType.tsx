import React, { useState, useEffect } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  FormHelperText,
} from '@mui/material';
import { getBusinessType } from 'libs/services/BusinessService/BusinessService';

interface BusinessTypeSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>, id: number) => void;
  btypes: string[];
  error: boolean;
  id: number;
}

const BusinessTypeSelect: React.FC<BusinessTypeSelectProps> = ({
  value,
  onChange,
  btypes,
  error,
  id,
}) => {
  interface BusinessType {
    id: number;
    name: string;
    businessClassId: number;
  }

  const [businessClassData, setBusinessClassData] = useState<BusinessType[]>(
    []
  );

  useEffect(() => {
    async function fetchBusinessClass() {
      try {
        const data = await getBusinessType();
        console.log(data);
        setBusinessClassData(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    }

    fetchBusinessClass();
  }, []);

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    // Find the BusinessClass object that matches the selected name
    const selectedBusinessClass = businessClassData.find(
      (bc) => bc.name === event.target.value
    );

    if (selectedBusinessClass) {
      // Call the onChange function with the selected name and its ID
      onChange(event, selectedBusinessClass.id);
    }
  };

  // Filter the business class data based on the received id
  const filteredBusinessClassData = businessClassData.filter(
    (bc) => bc.businessClassId === id
  );

  return (
    <FormControl variant="outlined" size="small">
      <Select
        value={value}
        onChange={handleSelectChange}
        error={error}
        displayEmpty
      >
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Type</em>
        </MenuItem>
        {filteredBusinessClassData.map((businessclass) => (
          <MenuItem key={businessclass.id} value={businessclass.name}>
            {businessclass.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BusinessTypeSelect;
