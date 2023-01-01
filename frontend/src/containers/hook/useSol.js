import { useState, createContext, useContext } from 'react';

const SolContext = createContext({
	navOpen:false,
  setNavOpen: () => {},
  signedIn: false,
  setSignedIn: () => {},
  account: "",
  setAccount: () => {}
});

const SolProvider = (props) => {

  //States comes here
  const [navOpen, setNavOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [account, setAccount] = useState("");

  return (
	  <SolContext.Provider
		value={
			{
        navOpen,
        setNavOpen,
        signedIn,
        setSignedIn,
        account,
        setAccount
			}
		}
		{...props}
	  />
  )
}

const useSol = () => useContext(SolContext);
export { SolProvider, useSol };