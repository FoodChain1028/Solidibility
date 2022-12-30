import { useState, createContext, useContext } from 'react';

const SolContext = createContext({
	navOpen:false,
  setNavOpen: () => {},

});

const SolProvider = (props) => {

  //States comes here
  const [navOpen, setNavOpen] = useState(false);
  
  return (
	  <SolContext.Provider
		value={
			{
        navOpen,
        setNavOpen,
			}
		}
		{...props}
	  />
  )
}

const useSol = () => useContext(SolContext);
export { SolProvider, useSol };