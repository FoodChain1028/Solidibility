import { forwardRef, useEffect, useState } from 'react';
import DrawerHeader from './DrawerHeader';
import { useParams, useNavigate } from 'react-router-dom'
import { useSol } from '../containers/hook/useSol'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Editor from "@monaco-editor/react";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { border, margin, sizing, width } from '@mui/system';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const typoStyle = {
  marginLeft: '20px',
  marginTop: '10px'
};

const ProblemPage = () => {

  const [open, setOpen] = useState(false);
  const [correct, setCorrect] = useState(false);

  const { id } = useParams();
  const { problemSet, setCode, code, navOpen } = useSol();
  const navigate = useNavigate();
  const answer = "124";
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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // 提交題目
  const handleClick = () => {
    console.log(code);
    if (code !== answer) {
      setCorrect(false);
      // TO_DO 更新題目回答
    }
    else {
      setCorrect(true);
      // TO_DO 更新題目回答
    }
    setOpen(true);
  };



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
      <Button onClick={() => {navigate('/quiz')}}>
          <ArrowBackIosIcon />
      </Button>
      <Typography variant='h4' style={typoStyle}> {`Problem ${id}`} </Typography>
      <Typography paragraph style={typoStyle}>
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
      <Button variant="outlined" color="error" onClick={() => handleClick()} style={typoStyle}>
        SUBMIT
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {
          correct ? 
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            You Are Correct!
          </Alert> :
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            You Are Wrong!
          </Alert>
        }
      </Snackbar>
    </div>
    </>

    
  )
}

export default ProblemPage