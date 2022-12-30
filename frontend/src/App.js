import './App.css';
import Navbar from './container/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const navbarTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#FFC78E',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
  
    <ThemeProvider theme={navbarTheme}>
      <Navbar />
    </ThemeProvider>
    
  );
}

export default App;
