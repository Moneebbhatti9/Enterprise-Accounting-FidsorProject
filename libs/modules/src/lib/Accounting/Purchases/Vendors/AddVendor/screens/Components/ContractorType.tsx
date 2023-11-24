import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface ContractorTypeProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  cTypes: string[];
}

const ContractorType: React.FC<ContractorTypeProps> = ({
  value,
  onChange,
  cTypes,
}) => {
  return (
    <FormControl variant="outlined" size="small">
      <Select value={value} onChange={onChange} displayEmpty>
        {cTypes.map((cType) => (
          <MenuItem key={cType} value={cType}>
            {cType}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ContractorType;
