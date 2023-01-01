import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
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

import NavigationBar from '../containers/navigationBar';
import SolRoutes from './SolRoutes';

import { useSol } from '../containers/hook/useSol';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
    marginLeft: drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }),
  }),
);

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

export default function PersistentDrawerRight() {

  const theme = useTheme();
  const { navOpen, setNavOpen } = useSol();


  
  const handleDrawerClose = () => {
    setNavOpen(false);
  };

  const handleOnClick = (i) => {
    switch(i){
      case 0: return "/"
      case 1: return "/profile"
      case 2: return "/quiz"
      case 3: return "/about-us"
    }
  }

  return (
    <ThemeProvider theme={navbarTheme}>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        
      <NavigationBar />
      <SolRoutes/>
          
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
              let icon = <HomeIcon/>
              if (i === 1) icon = (<AccountCircleIcon/>);
              else if (i === 2) icon = (<QuizIcon/>);
              else if (i === 3) icon = (<InfoIcon/>);
              return (
                <ListItem disablePadding>
                <ListItemButton href={handleOnClick(i)}>
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
      </Box>
    </ThemeProvider>
  );
}