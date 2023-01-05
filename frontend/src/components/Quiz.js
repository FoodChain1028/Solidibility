import { Box, Typography, styled, Button } from '@mui/material'
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
import React from 'react'
import { useSol } from '../containers/hook/useSol';
import { useNavigate } from 'react-router-dom';
import DrawerHeader from './DrawerHeader';
import Main from './Main';
import { GET_ALL_QUESTION_DATA_QUERY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

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

const Quiz = () => {
  const { navOpen } = useSol();
  const navigate = useNavigate();
  const ToProblem = (id) => {
    console.log("to Problem");
    navigate('/quiz/'+ id)
  }

  const ToHistory = (id) => {
    navigate('/quiz/' + id + "/history")
  }

  // query data when rendering
  const { loading, data: data } = useQuery(GET_ALL_QUESTION_DATA_QUERY)
  console.log(data);
  if (loading) return <p>loading...</p>
  const { problemSet } = data;

  let width = 300;
  if (navOpen) width = 450;
  return(
    <>
      <Main open={navOpen} style={{
        marginLeft: width
      }}>
        <DrawerHeader/>
        <Typography variant='h4'> Quiz List</Typography>
        <p></p>
        <Typography variant='paragraph'> You can browse and choose the quiz you want to challenge here.</Typography>
        <p></p>
        <Typography variant='paragraph'> ✔️  Press the quiz id (left) to enter quizing page. </Typography>
        <br />
        <Typography variant='paragraph'> ✔️  Press the status (right) to enter quizing page. </Typography>
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
                <StyledTableCell>Quiz Id</StyledTableCell>
                <StyledTableCell align="center">Quiz Name</StyledTableCell>
                <StyledTableCell align="right"> </StyledTableCell>
                <StyledTableCell align="right"> </StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {problemSet.map((problem, i) => (
                <StyledTableRow key={problem.questionId}>
                  <StyledTableCell component="th" scope="row">
                    <Tooltip title={"Enter Quiz " + problem.questionId}>
                      <Button onClick={() => ToProblem(problem.questionId)}>{problem.questionId}</Button>
                    </Tooltip>
                  </StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="center">
                  <Tooltip title={"View Quiz " + problem.questionId + " Answer History"} >
                    <Button color={ problem.isCorrect ? 'success' : 'warning'} onClick={() => ToHistory(problem.questionId)}>
                      { 
                      problem.isCorrect ? 
                      <CheckCircleSharpIcon color='success' fontSize='large'/>: 
                      <CancelSharpIcon color='warning' fontSize='large'/>}
                    </Button>
                  </Tooltip>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
      </Main>
    </>
  )

}

export default Quiz;