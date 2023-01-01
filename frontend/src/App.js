import './App.css';
import Navbar from './components/Navbar';
import { useSol } from './containers/hook/useSol';
import SignIn from './containers/Signin';

// for wallets

function App() {
  const { signedIn } = useSol();
  return (
    <>
      { signedIn ? <Navbar /> : <SignIn /> }
    </>   
  );
}

export default App;
