import './App.css';
import Navbar from './container/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSol } from './components/hook/useSol';
import SignIn from './components/Signin';

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
  const { signedIn } = useSol();
  return (
    <>
    { signedIn ?
        <ThemeProvider theme={navbarTheme}>
          <Navbar />
        </ThemeProvider>
      : <SignIn />
    }
    </>

    
  );
}

export default App;
