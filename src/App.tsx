import React from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
import Dashboard from './components/Dashboard'
import Charts from './components/Charts'

function App() {
  return (
    <Box w="90%" mx="auto">
      <Dashboard/>
      <Charts/>
    </Box>
  );
}

export default App;
