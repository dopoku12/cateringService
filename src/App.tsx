import { Box, Container, ThemeProvider, createTheme ,IconButton, Drawer,Tooltip,Link as MuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

function App() {
   return (
      <ThemeProvider theme={darkTheme}>
         <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
               <Nav/>
               <Outlet/>
                <Box component='footer'>
               <Tooltip title="call us!">
                  <MuiLink href="tel:+1 301-675-3848">
                     <PhoneIcon />
                  </MuiLink>
               </Tooltip>
               <IconButton>
                  <MuiLink
                     href="https://www.instagram.com/deescateringservices/"
                     target="_blank"
                  >
                     <InstagramIcon />
                  </MuiLink>
               </IconButton>
               <IconButton>
                  <MuiLink
                     href="https://www.facebook.com/people/Dees-Catering-Services/100063473123483/"
                     target="_blank"
                  >
                     <FacebookIcon />
                  </MuiLink>
               </IconButton>
            </Box>
      
         </Container>
      </ThemeProvider>
   );
}

export default App;
