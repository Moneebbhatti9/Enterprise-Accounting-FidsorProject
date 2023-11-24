import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import customVError from './customVError';

interface RegionSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  regions: string[];
  disabled?: boolean;
  error?: boolean;
}

const RegionSelect: React.FC<RegionSelectProps> = ({
  value,
  onChange,
  regions,
  disabled,
  error,
}) => {
  return (
    <FormControl fullWidth size="small">
      <Select
        value={value}
        onChange={onChange}
        disabled={disabled}
        displayEmpty
        error={error}
        style={disabled ? { backgroundColor: '#f1f1f1' } : {}}
      >
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Region</em>
        </MenuItem>
        {regions.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </Select>
      {error && customVError()}
    </FormControl>
  );
};

export default RegionSelect;
