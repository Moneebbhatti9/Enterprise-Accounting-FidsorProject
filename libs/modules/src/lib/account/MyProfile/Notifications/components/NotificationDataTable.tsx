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
  Avatar,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TablePagination from '@mui/material/TablePagination';
import SearchBar from './SearchBar';
import DeleteNotificationDialog from './DeleteNotificationDialogue';
import { Notification, AnchorElMap } from '../index';

interface NotificationTableProps {
  notificationData: Notification[];
  searchText: string;
  onSearchChange: (searchText: string) => void;
  onSelectNotification: (notificationId: string) => void;
  anchorElMap: AnchorElMap;
  isMenuOpen: (notificationId: string) => boolean;
  handleMenuClick: (
    event: React.MouseEvent<HTMLElement>,
    notificationId: string
  ) => void;
  handleMenuClose: (notificationId: string) => void;
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

const NotificationTable: React.FC<NotificationTableProps> = ({
  notificationData,
  searchText,
  onSearchChange,
  onSelectNotification,
  anchorElMap,
  isMenuOpen,
  handleMenuClick,
  handleMenuClose,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  const filteredNotifications = notificationData
    ? notificationData.filter((notification) =>
        notification.message.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];
  const emptyRows = Math.max(0, rowsPerPage - filteredNotifications.length);

  const slicedNotifications = filteredNotifications?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteNotificationId, setDeleteNotificationId] = useState<
    string | null
  >(null);
  const openDeleteConfirmation = (notificationId: string) => {
    setDeleteNotificationId(notificationId);
    setDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setDeleteNotificationId(null);
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteNotification = () => {
    closeDeleteConfirmation();
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={4} style={{ padding: '16px 0px' }}>
              <Box
                width={'100%'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <SearchBar
                  searchText={searchText}
                  onSearchChange={onSearchChange}
                />
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredNotifications.length === 0
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
            : slicedNotifications?.map((notification: Notification) => (
                <TableRow
                  key={notification.id}
                  style={{ cursor: 'pointer', backgroundColor: 'inherit' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'inherit';
                  }}
                >
                  <TableCell
                    onClick={() => onSelectNotification(notification.id)}
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
                        src={notification.imageUrl || 'placeholder.jpg'}
                        alt={notification.fromUserName}
                      />
                    </Box>
                  </TableCell>
                  <TableCell
                    onClick={() => onSelectNotification(notification.id)}
                    sx={{ padding: '5px', width: '150px' }}
                  >
                    <Typography fontSize={'12px'}>
                      {notification.fromUserName}
                    </Typography>
                  </TableCell>
                  <TableCell
                    onClick={() => onSelectNotification(notification.id)}
                    sx={{ padding: '5px' }}
                  >
                    <Typography fontSize={'12px'}>
                      {truncateText(notification.message, 40)}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ padding: '5px' }}>
                    <Box display={'flex'} width={'100%'} justifyContent={'end'}>
                      <IconButton
                        aria-label="more"
                        id={`long-button-${notification.id}`}
                        onClick={(e) => handleMenuClick(e, notification.id)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorElMap[notification.id]}
                        open={isMenuOpen(notification.id)}
                        onClose={() => handleMenuClose(notification.id)}
                        PaperProps={{
                          style: {
                            width: '20ch',
                          },
                        }}
                      >
                        <MenuItem
                          onClick={() => onSelectNotification(notification.id)}
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
                          onClick={() =>
                            openDeleteConfirmation(notification.id)
                          }
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
          {emptyRows > 0 &&
            Array.from({ length: emptyRows }).map((_, index) => (
              <TableRow key={`empty-${index}`}></TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredNotifications?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <DeleteNotificationDialog
        open={deleteConfirmationOpen}
        onClose={closeDeleteConfirmation}
        onConfirm={handleDeleteNotification}
      />
    </TableContainer>
  );
};

export default NotificationTable;
