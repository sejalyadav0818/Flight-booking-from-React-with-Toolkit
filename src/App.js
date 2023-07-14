import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FlightBookingForm from "./Components/form/FlightBookingForm";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
import {Typography} from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Showdata from './Components/Pages/Showdata';
import Summary from './Components/Pages/Summary';
import Header from "./Components/Pages/Header";

const App = () => {
  return (
    <>
      <Header />
      <>
        {" "}
        <Typography variant="h5" align="center">
          Flight Booking Form With Redux Toolkit
        </Typography>
        <CssBaseline />
        <Container component={Box} p={4}>
          <Paper component={Box} p={3}>
            <Routes>
              <Route path="/" element={<FlightBookingForm />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/show" element={<Showdata />} />
            </Routes>
          </Paper>
        </Container>
      </>
    </>
  );
};

export default App;
  