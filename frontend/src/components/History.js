import { Box, Typography, styled, Button, Modal } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react'
import { useSol } from '../containers/hook/useSol';
import { useNavigate, useParams } from 'react-router-dom';
import DrawerHeader from './DrawerHeader';
import Main from './Main';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const History = () => {

  const { id } = useParams()
  const { problemSet, setCode, code, navOpen } = useSol();
  const [open, setOpen] = useState("false");
  const [historyId, setHistoryId] = useState(1);

  const navigate = useNavigate();
  const ToProblem = () => {
    console.log("to Problem");
    navigate('/quiz/'+ id)
  }

  const handleOpen = (id) => {
    setOpen(true);
    // setHistoryId(id)
    };
  const handleClose = () => setOpen(false);

  let width = 300;
  if (navOpen) width = 450;
  return(
    <>
      <Main open={navOpen} style={{
        marginLeft: width
      }}>
        <DrawerHeader/>
        <Typography variant='h4'> { "Quiz " + id + " History" } </Typography>
        <p></p>
        <Typography variant='paragraph'> ✔️  You can checkout your answer history here! </Typography>
      <Box sx={{
        height: '100vh',
        width: { xs: "100%", sm: '100%' },
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        marginTop: '10vh'
      }}
      >
        <TableContainer component={Paper} sx={{
          height: '50vh',
          width: {xs: '100%', sm: '100%'},
          bgcolor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
        }}>
          <Table sx={{ minWidth: `100%` }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>History Id</StyledTableCell>
                <StyledTableCell align="center">Checkout</StyledTableCell>
                <StyledTableCell align="right"> </StyledTableCell>
                <StyledTableCell align="right"> </StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {problemSet.map((problem) => (
                <StyledTableRow key={problem.id}>
                  <StyledTableCell component="th" scope="row">
                      <Button>{problem.id}</Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button color={ problem.isCorrect ? 'success' : 'warning'} onClick={() => handleOpen()}>
                      Press To Check Your History Answer 
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="center">
                        {  
                            problem.isCorrect ? 
                            <CheckCircleSharpIcon color='success' fontSize='large'/> : 
                            <CancelSharpIcon color='warning' fontSize='large'/>
                        }
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
      </Main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default History;