import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useSol } from '../containers/hook/useSol';

import { Box, Avatar } from '@mui/material'
import React from 'react'
import { EmojiEvents } from '@mui/icons-material'
import Fade from 'react-reveal/Fade';

const Profile = () => {
  const { account } = useSol();
  const drawerWidth = 450;
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
    <Box id="aboutme"
      sx={{ height: { xs: '200vh', sm: '100vh' }, width: '110%', display: 'flex', flexWrap: 'wrap'
      }}
    >
      <Box
        sx={{height: { xs: '100vh', sm: '100%' }, width: { xs: '100%', sm: "40%" }, bgcolor: 'white',
          display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'
        }}
      >
        <Box
          sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',
            height: '50%',width: '80%',justifyContent: 'space-between'
          }}
        >
          <Fade left>
            <Avatar sx={{width: '250px',height: '250px',marginBottom:"30px"
            }} />
            <Typography variant={'h6'} sx={{marginBottom: '10vh',textAlign: 'center',
              color: 'black',fontSize: '18px',fontWeight: '500'
            }}>
              {account}
            </Typography>
          </Fade>
        </Box>
      </Box>
      <Box
        sx={{height: { xs: '100vh', sm: '100%' }, width: { xs: '100%', sm: "55%" }, bgcolor: 'grey',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
      >
        <Box sx={{
          width: '80%',
          height: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}>
          {/* Achievement */}
          <Fade right>
            <Typography variant='h4' color={'white'} fontSize="40px" fontWeight={800}>
              Achievement
            </Typography>
            <Box gap={3} sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'}}>

              <EmojiEvents sx={{
                color: 'yellow',
                fontSize: '30px'
              }} />
              <Typography fontSize={'18px'} color="white" fontWeight={600}>
                Problem 1 Solved
              </Typography>
            </Box>
          </Fade>
          {/* Record */}
          <Fade right>
            <Typography variant='h4' color={'white'} fontSize="40px" fontWeight={800}>
              Record
            </Typography>

            <Box gap={3} sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'}}>

              <EmojiEvents sx={{
                color: 'yellow',
                fontSize: '30px'
              }} />
              <Typography fontSize={'18px'} color="white" fontWeight={600}>
                Problem 1 Solved
              </Typography>

            </Box>
            

          </Fade>
        
        </Box>
        
      </Box>
    </Box>

    </Main>
    
  )

}
export default Profile;