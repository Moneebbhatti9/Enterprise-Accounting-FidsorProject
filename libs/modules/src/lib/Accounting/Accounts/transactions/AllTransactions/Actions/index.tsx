import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Delete from '../../../customer/Actions/Delete';
import { TiDocumentText } from 'react-icons/ti';
import EditButton from '../../../chartsOfAccounts/AllAccount/CreateAccountOptions/';
import CheckIcon from '@mui/icons-material/Check';import { Link } from 'react-router-dom';
const options = [ 'Upload receipt',  'Copy','Delete'];
export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [showCopy, setShowCopy] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showDocumentText, setShowDocumentText] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
const [isClicked, setIsClicked] = useState(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOptionClick = (option: any) => {
    if (option === 'Upload receipt') {
     
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.png, .pdf';
      fileInput.addEventListener('change', (event) => {
        const inputElement = event.target as HTMLInputElement;
        if (inputElement.files && inputElement.files[0]) {
          const file = inputElement.files[0];
          setSelectedFile(file);
          setShowDocumentText(true); 
          handleClose(); 
        }
      });

      fileInput.click();
    } else if (option === 'Edit more details') {
      setShowUpload(true);
    } else if (option === 'Delete') {
      setShowDelete(true);
    } else if (option === 'Copy') {
      setShowCopy(true);
    }
    setAnchorEl(null); 
  };
  const handleUploadReciept = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.png, .pdf';
    fileInput.addEventListener('change', (event) => {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files[0]) {
        const file = inputElement.files[0];
        setSelectedFile(file);
        setShowDocumentText(true); 
        handleClose(); 
      }
    });

    fileInput.click();
  };
  const openFileInNewWindow = () => {
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      window.open(fileUrl, '_blank');
    }
  };
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['gray','#007bff',  'green'];

  const handleIconClick = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };
  const openDeleteModal = () => {
    setShowDelete(true);
  };
  const handleDelete = () => {
    handleClose();
    setShowDelete(true);
  };
  const closeDeleteModal = () => {
    setShowDelete(false);
  };
  const handleCloseModals = () => {
   
    setShowDelete(false);
  };
  const currentColor = colors[colorIndex];
  return (
    <div>
       {selectedFile && showDocumentText && ( 
        <IconButton style={{padding:'0px', paddingTop:'3px', paddingRight:'3px'}}>
          <TiDocumentText
            style={{
              color: '#007bff',
              fontSize: '20px',
              border: 'solid 1px #007bff',
              borderRadius: '50%',
              padding: '4px',
              cursor: 'pointer',
            }}
            onClick={openFileInNewWindow}
          />
        </IconButton>
      )}
        <IconButton style={{padding:'0px', paddingTop:'3px'}} onClick={handleIconClick}>
        <CheckIcon
          style={{
            color: currentColor,
            fontSize: '20px',
            border: `solid 1px ${currentColor}`,
            borderRadius: '50%',
            padding: '4px',
            cursor: 'pointer',
          }}
        />
      </IconButton>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{padding:'0px'}}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
         <Link
          to="edit"
          style={{ textDecoration: 'none', color: '#111827',fontSize:'12px' }}
        >
          <MenuItem style={{ fontSize:'12px' }}>
            Edit more details
          </MenuItem>
        </Link>
        <MenuItem style={{ fontSize:'12px' }} onClick={() => handleUploadReciept()}>
           Upload receipt
          </MenuItem>
        <MenuItem style={{ fontSize:'12px' }}>
          Copy
          </MenuItem>
          <MenuItem style={{color: 'red', fontSize:'12px' }}  onClick={() => handleDelete()}>
          Delete
          </MenuItem>
        {/* {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={() => handleMenuOptionClick(option)}
            style={{
              fontSize: '12px',
              color: option === 'Delete' ? 'red' : undefined
            }}
            
          >
            {option}
          </MenuItem>
        ))} */}
      </Menu>
      {/* {showDelete && <Delete isOpen={showDelete} onClose={closeDeleteModal} />} */}

    </div>
  );
}
