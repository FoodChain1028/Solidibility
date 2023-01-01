import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import InfoIcon from '@mui/icons-material/Info';

import { useNavigate } from 'react-router-dom';
import NavigationBar from '../containers/navigationBar';
import SolRoutes from './SolRoutes';

import { useSol } from '../containers/hook/useSol';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


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

export default function Navbar() {
  const { navOpen, setNavOpen } = useSol();
  const navigate = useNavigate();
 
  const handleDrawerClose = () => {
    setNavOpen(false);
  };

  const handleOnClick = (i) => {

    switch(i){
      case 0: {navigate("/"); break;}
      case 1: {navigate("/profile"); break}
      case 2: {navigate("/quiz"); break}
      case 3: {navigate("/about-us"); break}
    }
  }


  const handleIcon = (i) => {
    
    switch(i){
      case 0: return <HomeIcon/>
      case 1: return <AccountCircleIcon/>
      case 2: return <QuizIcon/>
      case 3: return <InfoIcon/>
    }
  }

  return (
    <ThemeProvider theme={navbarTheme}>
      <NavigationBar />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={navOpen}
        >

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <List>
          {
            ["Home", "Profile", "Quiz", "About us"].map((text, i) => {
              const icon = handleIcon(i)
              return (
                <ListItem disablePadding key={i}>
                  <ListItemButton onClick={() => handleOnClick(i)}>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton >
              </ListItem>
            )
          })
        }
        </List>
      </Drawer>
    </ThemeProvider>
  );
}