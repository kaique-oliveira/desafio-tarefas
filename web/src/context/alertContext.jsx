import { createContext, useState } from 'react';
import { Snackbar } from '@mui/material';

export const AlertContext = createContext(null);

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState(null);
  const [show, setShow] = useState(false);

  function handleOnOpenAlert(alert) {
    setAlert(alert);
    setShow(true);
  }

  function handleOnCloseAlert() {
    setShow(false);
    setAlert(null);
  }

  return (
    <AlertContext.Provider value={{ handleOnOpenAlert }}>
      {children}

      {alert && (
        <Snackbar
          open={show}
          autoHideDuration={4000}
          onClose={handleOnCloseAlert}
          action={handleOnCloseAlert}
          message={alert.text}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        />
      )}
    </AlertContext.Provider>
  );
}
