import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import {TextField} from '@mui/material'

function Home() {
  return (
    <>
    <h1>Escribe tu diario </h1>
    <Stack spacing={2}>
      
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <TextField label="Escribe aquí"/>
      <Button variant="contained">Send</Button>
      
    </Stack>
    
    
    </>
  )
}

export { Home };
