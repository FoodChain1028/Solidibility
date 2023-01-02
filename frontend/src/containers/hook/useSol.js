import { useState, createContext, useContext } from 'react';

const SolContext = createContext({
	navOpen:false,
  setNavOpen: () => {},
  signedIn: false,
  setSignedIn: () => {},
  account: "",
  setAccount: () => {},
  problemSet: [],
  code:"",
  setCode: () => {},

});

const SolProvider = (props) => {

  //States comes here
  const [navOpen, setNavOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [account, setAccount] = useState("");
  const [code, setCode] = useState("")

  const problemSet = [
    {
      id:1,
      description:"problem 1"
    },
    {
      id:2,
      description:"problem 2"
    },
    {
      id:3,
      description:"problem3"
    }
  ]


  return (
	  <SolContext.Provider
		value={
			{
        navOpen,
        setNavOpen,
        signedIn,
        setSignedIn,
        account,
        setAccount,
        problemSet,
        code,
        setCode,
        

			}
		}
		{...props}
	  />
  )
}

const useSol = () => useContext(SolContext);
export { SolProvider, useSol };