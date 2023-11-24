import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Stack,
  Button,
  Avatar,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TablePagination from '@mui/material/TablePagination';
import SearchBar from './SearchBar';
import {} from '@mui/material';
import DeleteMessageDialog from './DeleteMessageDialog';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SendMessageDialog from './SendMessageDialog';
import { Message, AnchorElMap } from '../index';

interface MessageTableProps {
  messageData: Message[];
  searchText: string;
  onSearchChange: (searchText: string) => void;
  onSelectMessage: (messageId: string) => void;
  anchorElMap: AnchorElMap;
  isMenuOpen: (messageId: string) => boolean;
  handleMenuClick: (
    event: React.MouseEvent<HTMLElement>,
    messageId: string
  ) => void;
  handleMenuClose: (messageId: string) => void;
  page: number;
  rowsPerPage: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text?.length <= maxLength) {
    return text;
  } else {
    const truncatedText = text?.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');

    if (lastSpaceIndex === -1) {
      return truncatedText + '...';
    } else {
      return truncatedText?.slice(0, lastSpaceIndex) + '...';
    }
  }
};

const MessageTable: React.FC<MessageTableProps> = ({
  messageData,
  searchText,
  onSearchChange,
  onSelectMessage,
  anchorElMap,
  isMenuOpen,
  handleMenuClick,
  handleMenuClose,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  const filteredMessages = messageData
    ? messageData.filter((message) =>
        message.message.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];
  const emptyRows = Math.max(0, rowsPerPage - filteredMessages.length);

  const slicedMessages = filteredMessages?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteMessageId, setDeleteMessageId] = useState<string | null>(null);
  const [sendMessageDialogOpen, setSendMessageDialogOpen] = useState(false);
  const openDeleteConfirmation = (messageId: string) => {
    setDeleteMessageId(messageId);
    setDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setDeleteMessageId(null);
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteMessage = () => {
    closeDeleteConfirmation();
  };

  const openSendMessageDialog = () => {
    setSendMessageDialogOpen(true);
  };

  const closeSendMessageDialog = () => {
    setSendMessageDialogOpen(false);
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={4} style={{ padding: '16px 0px' }}>
              <Stack
                width={'100%'}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <SearchBar
                  searchText={searchText}
                  onSearchChange={onSearchChange}
                />
                <Button
                  variant="outlined"
                  sx={{ fontSize: '12px' }}
                  startIcon={<AiOutlinePlusCircle fontSize="inherit" />}
                  onClick={openSendMessageDialog}
                >
                  Send Message
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredMessages.length === 0
            ? [
                <TableRow key="no-results" style={{ height: '480px' }}>
                  <TableCell
                    colSpan={4}
                    style={{
                      textAlign: 'center',
                      backgroundColor: '#f4f7fe61',
                    }}
                  >
                    No results found.
                  </TableCell>
                </TableRow>,
              ]
            : slicedMessages?.map((message: Message) => (
                <TableRow
                  key={message.id}
                  style={{ cursor: 'pointer', backgroundColor: 'inherit' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'inherit';
                  }}
                >
                  <TableCell
                    onClick={() => onSelectMessage(message.id)}
                    sx={{ padding: '5px', width: '70px' }}
                  >
                    <Box
                      display={'flex'}
                      width={'100%'}
                      justifyContent={'center'}
                    >
                      <Avatar
                        sx={{
                          width: '30px',
                          height: '30px',
                          fontSize: '1rem',
                          borderRadius: '50%',
                        }}
                        src={message.imageUrl || 'placeholder.jpg'}
                        alt={message.fromUserName}
                      />
                    </Box>
                  </TableCell>
                  <TableCell
                    onClick={() => onSelectMessage(message.id)}
                    sx={{ padding: '5px', width: '150px' }}
                  >
                    <Typography fontSize={'12px'}>
                      {message.fromUserName}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => onSelectMessage(message.id)}
                    sx={{ padding: '5px' }}
                  >
                    <Typography fontSize={'12px'}>
                      {truncateText(message.message, 40)}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ padding: '5px' }}>
                    <Box display={'flex'} width={'100%'} justifyContent={'end'}>
                      <IconButton
                        aria-label="more"
                        id={`long-button-${message.id}`}
                        onClick={(e) => handleMenuClick(e, message.id)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorElMap[message.id]}
                        open={isMenuOpen(message.id)}
                        onClose={() => handleMenuClose(message.id)}
                        PaperProps={{
                          style: {
                            width: '20ch',
                          },
                        }}
                      >
                        <MenuItem
                          onClick={() => onSelectMessage(message.id)}
                          style={{
                            fontSize: '12px',
                          }}
                        >
                          View
                        </MenuItem>
                        <hr
                          style={{
                            margin: '4px 0',
                            borderColor: 'rgba(0, 0, 0, 0.12)',
                          }}
                        />
                        <MenuItem
                          onClick={() => openDeleteConfirmation(message.id)}
                          style={{
                            fontSize: '12px',
                            color: 'red',
                          }}
                        >
                          Delete
                        </MenuItem>
                      </Menu>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          {/* Render empty rows if needed */}
          {emptyRows > 0 &&
            Array.from({ length: emptyRows }).map((_, index) => (
              <TableRow key={`empty-${index}`}></TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredMessages?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <DeleteMessageDialog
        open={deleteConfirmationOpen}
        onClose={closeDeleteConfirmation}
        onConfirm={handleDeleteMessage}
      />
      <SendMessageDialog
        open={sendMessageDialogOpen}
        onClose={closeSendMessageDialog}
        recipients={filteredMessages}
      />
    </TableContainer>
  );
};

export default MessageTable;
