import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const Home = () => {

  const drawerWidth = 240;
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
    marginRight: drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    }),
    }),
  );

  return(
    <Main>
      <DrawerHeader />
      <Typography variant='h4'> What is Solidibility ? </Typography>
      <br/>

      <Typography paragraph>
        Solidibility is a leetcode-like web application. We hope you can learn plenty of knowledge and skills of solidity progarmming from here.
      </Typography>

      <br/>
      <Typography variant='h5'> What is Solidity ? </Typography>
      <br/>
      <Typography paragraph>  
        Solidity is a smart-contract langauage which can be compiled and recorded in Ethereum or other related blockchain network. We can use IDE like <Link href="https://remix.ethereum.org/" underline='none'>Remix</Link> to connect with the smart contracts on the blockchain.
      </Typography> 
    </Main>
  )
}
export default Home;