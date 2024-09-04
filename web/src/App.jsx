import { Taks } from './pages/Task';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DialogProvider } from './context/dialogContext';
import { AlertProvider } from './context/alertContext';
import { LoadingProvider } from './context/loadingContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DialogProvider>
        <AlertProvider>
          <LoadingProvider>
            <Taks />
          </LoadingProvider>
        </AlertProvider>
      </DialogProvider>
    </ThemeProvider>
  );
}

export default App;
