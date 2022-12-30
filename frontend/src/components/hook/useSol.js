import { useState, createContext, useContext } from 'react';

const SolContext = createContext({
	navOpen:false,
  setNavOpen: () => {},
  signedIn: false,
  setSignedIn: () => {},

});

const SolProvider = (props) => {

  //States comes here
  const [navOpen, setNavOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  return (
	  <SolContext.Provider
		value={
			{
        navOpen,
        setNavOpen,
        signedIn,
        setSignedIn,
        
			}
		}
		{...props}
	  />
  )
}

const useSol = () => useContext(SolContext);
export { SolProvider, useSol };