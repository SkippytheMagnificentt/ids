import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store';


export default function Messages() {
  const messages = useSelector((state: RootState) => state.manageMessages.messages)
  // let formattedMessages = [];
  // for (const message of messages ) {
  //   if (typeof message === String) {
  //     formattedMessages.push(message)
  //   }
  // }
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      {messages}
    </Paper>
  );
}
