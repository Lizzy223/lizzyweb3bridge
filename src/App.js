import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {Routes, Route} from 'react-router-dom'
import Form from "./components/Form"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/dashboard' exact element={<Dashboard/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
