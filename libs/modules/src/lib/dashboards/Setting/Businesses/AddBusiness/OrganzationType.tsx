import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface OrganizationTypeSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  organizationtypes: string[];
  error: boolean;
}

const OrganizationTypeSelect: React.FC<OrganizationTypeSelectProps> = ({
  value,
  onChange,
  organizationtypes,
  error,
}) => {
  return (
    <FormControl variant="outlined" size="small">
      <Select value={value} onChange={onChange} error={error} displayEmpty>
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Organization Type</em>
        </MenuItem>
        {organizationtypes.map((organizationtype) => (
          <MenuItem key={organizationtype} value={organizationtype}>
            {organizationtype}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OrganizationTypeSelect;
