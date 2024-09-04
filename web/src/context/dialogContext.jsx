import { createContext, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

const WrapperButtons = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

export const DialogContext = createContext(null);

export function DialogProvider({ children }) {
  const [dialog, setDialog] = useState(null);
  const [show, setShow] = useState(false);

  function handleOnOpenDialog(dialog) {
    setDialog(dialog);
    setShow(true);
  }

  function handleOnCloseDialog() {
    setShow(false);
    setDialog(null);
  }

  return (
    <DialogContext.Provider value={{ handleOnOpenDialog, handleOnCloseDialog }}>
      {children}

      {dialog && (
        <Dialog
          key={1}
          open={show}
          onClose={handleOnCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialog.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={WrapperButtons}>
            <Button onClick={handleOnCloseDialog}>Não</Button>
            <Button color="error" onClick={dialog.onConfirm} autoFocus>
              sim
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </DialogContext.Provider>
  );
}
