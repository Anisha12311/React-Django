import React from 'react'
import Formhandle from './Formhandle'
import { ThemeProvider } from '@material-ui/core/styles';


const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  };


 const Enquiry = () => {
    return (

        <ThemeProvider theme={theme}>
      <Formhandle/>
    </ThemeProvider>
           
        
    )
}
export default Enquiry






