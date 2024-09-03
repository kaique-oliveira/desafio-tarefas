import { ThemeProvider } from 'styled-components';
import { Taks } from './pages/Task';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Taks />
    </ThemeProvider>
  );
}

export default App;
