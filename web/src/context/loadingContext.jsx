import { createContext, useState } from 'react';
import { CircularProgress } from '@mui/material';

export const LoadingContext = createContext(null);

export function LoadingProvider({ children }) {
  const [show, setShow] = useState(false);

  function handleOnOpenLoading() {
    setShow(true);
  }

  function handleOnCloseAlert() {
    setShow(false);
  }

  return (
    <LoadingContext.Provider
      value={{ handleOnOpenLoading, handleOnCloseAlert }}
    >
      {children}

      {show && (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 100,
            top: 0,
            left: 0,
          }}
        >
          <CircularProgress />
        </div>
      )}
    </LoadingContext.Provider>
  );
}
