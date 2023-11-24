import React, { ReactNode, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Currency from '../../dashboards/Configuration/Currency';
import { Button, FormControl, MenuItem, Paper, Select } from '@mui/material';

type Option = {
  value: string;
  label: string;
  currency: string;
  category?: string;
};

export default function AccountDropdown() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for controlling pop-up visibility

  const customCategories = [
    {
      category: 'Category B',
      items: [
        { name: 'Item 1', currency: '$12' },
        { name: 'Item 2', currency: '$10' },
        { name: 'Item 3', currency: '$15' },
      ],
    },
    {
      category: 'Category A',
      items: [
        { name: 'Item 4', currency: '$18' },
        { name: 'Item 5', currency: '$20' },
      ],
    },
    {
      category: 'Category C',
      items: [
        { name: 'Item 6', currency: '$25' },
        { name: 'Item 7', currency: '$30' },
        { name: 'Item 8', currency: '$22' },
      ],
    },
  ];

  const options: Option[] = customCategories.flatMap((category) => {
    const categoryOptions = category.items.map((item) => ({
      value: item.name,
      label: item.name,
      category: category.category,
      currency: item.currency,
    }));
    return categoryOptions;
  });
  const renderOption = (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLLIElement> &
      React.LiHTMLAttributes<HTMLLIElement>,
    option: Option // Corrected type
  ) => (
    <li {...props}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1">{option.label}</Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: 'right', marginLeft: '120px' }}
        >
          {option.currency}
        </Typography>
      </div>
    </li>
  );
  //   const renderOption = (
  //     props: JSX.IntrinsicAttributes &
  //       React.ClassAttributes<HTMLLIElement> &
  //       React.LiHTMLAttributes<HTMLLIElement>,
  //     option: {
  //       currency: ReactNode;
  //       label:
  //         | string
  //         | number
  //         | boolean
  //         | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  //         | React.ReactFragment
  //         | React.ReactPortal
  //         | null
  //         | undefined;
  //     }
  //   ) => (
  //     <li {...props}>
  //       <div
  //         style={{
  //           display: 'flex',
  //           justifyContent: 'space-between',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <Typography variant="body1">{option.label}</Typography>
  //         <Typography
  //           variant="body2"
  //           sx={{ textAlign: 'right', marginLeft: '120px' }}
  //         >
  //           {option.currency}
  //         </Typography>
  //       </div>
  //     </li>
  //   );
  const renderButton = () => (
    <li>
      <Button variant="outlined" color="primary" onClick={handleButtonClick}>
        Custom Button
      </Button>
    </li>
  );

  const handleButtonClick = () => {
    console.log('ButtonClicked');
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the pop-up
  };
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };
  interface CustomMenuItemProps {
    leftText: string;
    rightText: string;
  }

  const CustomMenuItem: React.FC<CustomMenuItemProps> = ({
    leftText,
    rightText,
  }) => (
    <MenuItem value={leftText}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <span style={{ textAlign: 'left' }}>{leftText}</span>
        <span style={{ textAlign: 'right' }}>{rightText}</span>
      </div>
    </MenuItem>
  );
  return (
    <FormControl fullWidth size="small">
      <Select value={selectedValue} onChange={handleSelectChange}>
        <MenuItem disabled value="">
          <em>Cash on Bank </em>
        </MenuItem>
        <CustomMenuItem leftText="Cash 1" rightText="Cash 1" />
        <CustomMenuItem leftText="Cash 2" rightText="Cash 2" />
        <MenuItem disabled value="">
          <em>Money In Transit</em>
        </MenuItem>
        <CustomMenuItem leftText="Money 1" rightText="Money 1" />
        <CustomMenuItem leftText="Money 2" rightText="Money 2" />
      </Select>
    </FormControl>
    // <div>
    // <Autocomplete
    //   id="grouped-demo"
    //   options={options}
    //   groupBy={(option) => option.category || ''}
    //   getOptionLabel={(option) => option.label}
    //   sx={{ width: 300 }}
    //   renderInput={(params) => <TextField {...params} />}
    //   value={selectedOption}
    //   onChange={(_, newValue) => setSelectedOption(newValue)}
    //   onInputChange={(event, newInputValue) => {
    //     const matchedOption = options.find(
    //       (option) => option.label === newInputValue
    //     );
    //     if (matchedOption) {
    //       setSelectedOption(matchedOption);
    //     }
    //   }}
    //   inputValue={
    //     selectedOption
    //       ? selectedOption.label + ' - ' + selectedOption.currency
    //       : ''
    //   }
    //   renderOption={renderOption}
    //   renderTags={() => [
    //       <Button
    //         key="custom-button"
    //         variant="outlined"
    //         color="primary"
    //         onClick={handleButtonClick}
    //       >
    //         Custom Button
    //       </Button>,
    //     ]}
    //   PaperComponent={({ children, ...popperProps }) => (
    //     <Paper {...popperProps}>
    //       <div>
    //         {children}

    //         <Button
    //            onClick={handleButtonClick}
    //           sx={{
    //             display: 'flex',

    //             justifyContent: 'center',

    //             alignItems: 'center',

    //             gap: '5px',

    //             marginTop: '5px',

    //             marginBottom: '5px',
    //           }}
    //         >
    //         Add new
    //         </Button>
    //       </div>
    //     </Paper>
    //   )}
    // />
    // {isPopupOpen && (
    //     <div className="popup">
    //       {/* Pop-up content */}
    //       <div className="popup-content">
    //         <Typography>Add new customer form here</Typography>
    //         <Button onClick={handleClosePopup}>Close</Button>
    //       </div>
    //     </div>
    //   )}
    //   </div>
  );
}

// import React, { useState } from 'react';
// import { FormControl, MenuItem, Paper, Popper } from '@material-ui/core';
// interface CustomSelectProps {
//   options: string[];
// }
// const CustomSelect: React.FC<CustomSelectProps> = ({ options }) => {
//   const [selectedValue, setSelectedValue] = useState('');

//   const [anchorEl, setAnchorEl] = useState<
//     (EventTarget & HTMLDivElement) | null
//   >(null);

//   const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     setAnchorEl(anchorEl ? null : event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleOptionSelect = (value: string) => () => {
//     setSelectedValue(value);
//     handleClose();
//   };

//   return (
//     <div>
//       <div onClick={handleClick} style={{ cursor: 'pointer' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <span style={{ textAlign: 'left' }}>{selectedValue}</span>
//           <span style={{ textAlign: 'right' }}>{selectedValue}</span>
//         </div>
//       </div>
//       <Popper
//         open={Boolean(anchorEl)}
//         anchorEl={anchorEl}
//         placement="bottom-start"
//         style={{ zIndex: 1000 }}
//       >
//         <Paper style={{ maxHeight: '200px', overflowY: 'auto' }}>
//           <MenuItem onClick={handleOptionSelect('')}>Clear</MenuItem>
//           {options.map((option) => (
//             <MenuItem key={option} onClick={handleOptionSelect(option)}>
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <span style={{ textAlign: 'left' }}>{option}</span>
//                 <span style={{ textAlign: 'right' }}>{option}</span>
//               </div>
//             </MenuItem>
//           ))}
//         </Paper>
//       </Popper>
//     </div>
//   );
// };

// export default function AccountDropdown() {
//   const options = ['Cash 1', 'Cash 2', 'Money 1', 'Money 2'];

//   return (
//     <>

//     <FormControl fullWidth size="small">
//       <CustomSelect options={options} />
//     </FormControl>
//     </>
//   );
// }
// import React, { useState } from 'react';

// import {
//   Menu,
//   MenuItem,
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
// } from '@mui/material';

// import SearchIcon from '@mui/icons-material/Search';

// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// interface ItemDropdownProps {
//   options: string[];

//   onSelectItem: (item: string) => void;

//   onAddNewProduct: () => void;
// };

// const AccountDropdown: React.FC<ItemDropdownProps> = ({
//   options,

//   onSelectItem,

//   onAddNewProduct,
// }) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const [searchQuery, setSearchQuery] = useState('');

//   const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseDropdown = () => {
//     setAnchorEl(null);
//   };

//   const handleItemChange = (option: string) => {
//     onSelectItem(option);

//     handleCloseDropdown();
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredOptions = options.filter((option) =>
//     option.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <Button
//         onClick={handleOpenDropdown}
//         variant="outlined"
//         endIcon={<ArrowDropDownIcon />}

//       >
//         Items
//       </Button>

//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleCloseDropdown}
//         sx={{ marginTop: '10px' }}
//       >
//         <MenuItem>
//           <TextField
//             value={searchQuery}
//             onChange={handleSearchChange}
//             variant="outlined"
//             fullWidth
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton>
//                     <SearchIcon />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </MenuItem>

//         {searchQuery &&
//           filteredOptions.map((option) => (
//             <MenuItem key={option} onClick={() => handleItemChange(option)}>
//               {option}
//             </MenuItem>
//           ))}

//         <MenuItem>
//           <Button
//             onClick={onAddNewProduct}
//             sx={{
//               display: 'flex',

//               justifyContent: 'center',

//               alignItems: 'center',

//               gap: '5px',
//             }}
//           >
//             <AddCircleOutlineIcon fontSize="small" />
//             Add new Product
//           </Button>
//         </MenuItem>
//       </Menu>
//     </>
//   );
// };

// export default AccountDropdown;
