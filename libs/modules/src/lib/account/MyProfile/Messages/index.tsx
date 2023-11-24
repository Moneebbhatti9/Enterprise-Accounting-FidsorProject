import React, { useState, useEffect } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import MessageDialog from './components/MessageDialog';
import MessageTable from './components/MessageDataTable';
import { getAllMessages } from '../../../../../../services/MessageService/MessageService';
import { BiChat } from 'react-icons/bi';
import IntlMessages from '@crema/helpers/IntlMessages';

export interface AnchorElMap {
  [key: string]: HTMLElement | null;
}

export interface Message {
  id: string;
  message: string;
  fromUserName: string;
  imageUrl?: string | null;
  status: string;
}

export type MessageCount = {
  totalCount: number;
  data: Message[];
};

const Messages: React.FC = () => {
  const [anchorElMap, setAnchorElMap] = useState<AnchorElMap>({});
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [messagesData, setMessagesData] = useState<MessageCount | undefined>();

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    messageId: string
  ) => {
    setAnchorElMap((prev) => ({
      ...prev,
      [messageId]: event.currentTarget,
    }));
  };

  const handleMenuClose = (messageId: string) => {
    setAnchorElMap((prev) => ({
      ...prev,
      [messageId]: null,
    }));
  };

  const isMenuOpen = (messageId: string) => Boolean(anchorElMap[messageId]);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (messageId: string) => {
    const message = messagesData?.data.find(
      (message) => message.id === messageId
    );
    if (message) {
      setSelectedMessage(message);
      setOpenPopup(true);
      handleMenuClose(messageId);
    }
  };

  const handleClosePopup = () => {
    setSelectedMessage(null);
    setOpenPopup(false);
  };

  const handleSearchChange = (searchText: string) => {
    setSearchText(searchText);
  };

  const filteredMessages = messagesData?.data.filter((message) =>
    message.fromUserName.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    async function fetchMessages() {
      try {
        const data = await getAllMessages();

        setMessagesData(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    }

    fetchMessages();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography fontSize={'18px'} fontWeight={'bold'} mb={'2%'}>
        Messages
      </Typography>
      {messagesData?.data.length === 0 ? (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
          }}
        >
          <Stack
            direction={'column'}
            width={'100%'}
            spacing={4}
            alignItems={'center'}
            padding={'5px'}
          >
            <BiChat fontSize={'70px'} color="#6b7280" />
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'center',
              }}
            >
              <IntlMessages id="messages.noMessages.Heading" />
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                color: 'text.secondary',
                textAlign: 'center',
              }}
            >
              <IntlMessages id="messages.noMessages.subHeading" />
            </Typography>
          </Stack>
        </Box>
      ) : (
        <MessageTable
          messageData={messagesData?.data as Message[]}
          searchText={searchText}
          onSearchChange={handleSearchChange}
          onSelectMessage={handleRowClick}
          anchorElMap={anchorElMap}
          isMenuOpen={isMenuOpen}
          handleMenuClick={handleMenuClick}
          handleMenuClose={handleMenuClose}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}

      {selectedMessage !== null && (
        <MessageDialog
          open={openPopup}
          onClose={handleClosePopup}
          selectedMessage={selectedMessage}
          messages={filteredMessages as Message[]}
        />
      )}
    </Box>
  );
};

export default Messages;
