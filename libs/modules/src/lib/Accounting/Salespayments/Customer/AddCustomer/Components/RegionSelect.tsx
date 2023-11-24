import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface RegionSelectProps {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
  regions: { id: number; name: string }[];
  disabled?: boolean;
}

const RegionSelect: React.FC<RegionSelectProps> = ({
  value,
  onChange,
  regions,
  disabled,
}) => {
  return (
    <FormControl fullWidth size="small">
      <Select
        value={value}
        onChange={onChange}
        disabled={disabled}
        displayEmpty
        style={disabled ? { backgroundColor: '#f1f1f1' } : {}}
      >
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Region</em>
        </MenuItem>
        {regions.map((region) => (
          <MenuItem key={region.id} value={region.id}>
            {region.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RegionSelect;
