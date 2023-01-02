import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const About = () => {

  const drawerWidth = 500;
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
    marginRight: drawerWidth-100,
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
    <>
    <Main>
      <DrawerHeader />
      <Typography paragraph>
        <h1>About Us</h1>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Yanlong Chen"
            src="https://lh3.googleusercontent.com/tVB8MUKVHssxIcqsmN122kIOHZK_VsxFcQ1TTmHDq0RUTTIm2tMke3U2fcmm0sMNcYLV_2CzE4iui0bJI8MnWevH=w640-h400-e365-rj-sc0x00ffffff"
            sx={{ width: 85, height: 85, border: '0.1px solid lightgray' }}
          />
          <Avatar
            alt="FuChuan Chung"
            src="https://media.istockphoto.com/id/1305490985/vector/aquatic-food-web-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=un3y61Oh3MYVDKmA2MxfNn_-Z9J-iMM3kgsACQt6Hkk="
            sx={{ width: 85, height: 85, border: '0.1px solid lightgray' }}
          />
        </Stack>
        <p>We are two senior students from NTU who suffered from Web Programming and at last published this app. </p>

      </Typography>
      <Typography paragraph>
      </Typography> 
    </Main>
    </>
    
  )

}
export default About;