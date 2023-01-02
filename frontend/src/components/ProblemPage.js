import { useParams } from 'react-router-dom'
import { useSol } from '../containers/hook/useSol'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Editor from "@monaco-editor/react";
import Button from '@mui/material/Button';

const ProblemPage = () => {

  const { id } = useParams()
  const { problemSet, setCode, code } = useSol();
  

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
  
  const handleSubmit = () => {
    console.log("code:", code);
  }
  const handleOnChange = (value) => {
    setCode(value)
  }
  return(
    <Main>
      <DrawerHeader/>
      <Typography variant='h4'> {`Problem ${id}`} </Typography>
      <br/>
      <Typography paragraph>
        {problemSet[id-1].description}
      </Typography>
      <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
        <Editor
          height="50vh"
          width={`150%`}
          language={"javascript"}
          value={code}
          theme={"black"}
          defaultValue="///SPDX-License-Identifier:MIT"
          onChange={() => handleOnChange}
        />
        <Button variant="outlined" color="error" onClick={() => handleSubmit()}>
          SUBMIT
        </Button>
      </div>
    </Main>
    
  )
}

export default ProblemPage