import DrawerHeader from './DrawerHeader';
import { useParams } from 'react-router-dom'
import { useSol } from '../containers/hook/useSol'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Editor from "@monaco-editor/react";
import Button from '@mui/material/Button';
import { border, margin, sizing, width } from '@mui/system';

const ProblemPage = () => {

  const { id } = useParams()
  const { problemSet, setCode, code, navOpen } = useSol();

  // deal with css
  let drawerWidth = 290;
  let eWidth = 290;
  let width = `75%`;

  if (navOpen) {
    drawerWidth = 440;
    eWidth = 440;
    width = `78%`;
  }

  const handleOnChange = (e) => {
    setCode(e)
  }
  const handleSubmit = () => {
    console.log(code);
  }

  
  return(
    <>
    <div style={{
      width: '50%',
      marginTop: '35px',
      marginLeft: drawerWidth,
      marginRight: drawerWidth,
      alignItems: 'center'
    }}>
      <DrawerHeader/>
      <Typography variant='h4'> {`Problem ${id}`} </Typography>
      <br/>
      <Typography paragraph>
        {problemSet[id-1].description}
      </Typography>
    </div>

    <div style={{
      marginTop: '40px',
      marginLeft: eWidth
      }}
    >
      <Editor
        height="65vh"
        width={width}
        language={"javascript"}
        value={code}
        theme="vs-dark"
        defaultValue="123"
        onChange={(e) => {
          handleOnChange(e)
        }}
      />
      <br />
      <Button variant="outlined" color="error" onClick={() => handleSubmit()}>
        SUBMIT
      </Button>
    </div>
    </>

    
  )
}

export default ProblemPage