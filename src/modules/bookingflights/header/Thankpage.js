import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Logo from '../../../Assets/images/logo.png'
import Last from "../../../Assets/images/last.jpg"
import { Link } from 'react-router-dom';
 
export default function Thankpage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            display="block"
            background-attachment="fixed"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <img src={Logo} alt="G" style={{width:'70px',height:"50px",borderRadius:"5px"}}></img>
          <Typography variant="h6" component="div" sx={{ marginLeft:1,fontFamily:"roboto",fontWeight:"bold",fontSize:"1.5rem"}}>
              Happy Trip
          </Typography>
        </Toolbar>
      </AppBar><div sx={{ flexDirection: 'column' }}>
         <img src={Last} alt="G"  width="100%" height="auto " />
           <Container sx={{align:"value"}}> 
           <Button><Typography variant="h6" component="div" sx={{ marginLeft:"30vh" ,marginTop:"-200vh",fontSize:50}}> Thank yoU For choosing Us...</Typography></Button>
           <Link to="/"><Button  sx={{ marginLeft:"70vh" ,marginTop:"-180vh",fontSize:30}} variant="contained">Go To Home</Button></Link>
 </Container>
      
      
      </div>
    </Box>
  );
}
