import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { useSol } from '../containers/hook/useSol';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {

  const { problemSet } = useSol();
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

  const MyBox = styled(Box)(({ theme }) => ({
    width: '14%',
    cursor:'pointer',
    height: '14%',
    padding: '8px',
    gap: '2px',
    backgroundColor: theme.palette.primary.dark,
    fontSize: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#eee',
    transition: '0.4s all',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',
    '&:hover': {
      backgroundColor: '#eee',
      color: "grey",
      transform: 'translateY(-8px)'
    }
  }))

  const navigate = useNavigate();
  const ToProblem = (id) => {
    console.log("to Problem");
    navigate('/quiz/'+ id)
  }

  return(
    <Main>
    <Typography variant='h4'> What is Solidibility ? </Typography>
    <Box sx={{
      height: '100vh',
      width: { xs: "100%", sm: '55%' },
      bgcolor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    }}
    >
      <Box gap={7}
        sx={{
          height: '80%',
          width: "80%",
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignContent: 'space-evenly',
          marginLeft: '10%'
        }}
        >
        {
          problemSet.map((problem) => {
            return(
              <MyBox key={problem.id} onClick={() => ToProblem(problem.id)}>  
                <Typography variant='h5'>{`Q${problem.id}`}</Typography>
              </MyBox>
            )
          })
        }
        </Box>
      </Box>
    </Main>
  )

}

export default Quiz;