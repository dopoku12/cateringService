import { Box, Container,IconButton, Drawer,Tooltip,Link as MuiLink, Typography } from "@mui/material";

import {useMediaQuery,useTheme} from "@mui/material";

import {ThemeProvider,createTheme }from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Outlet } from "react-router-dom";

import '@fontsource/pacifico/400.css'
import '@fontsource/inter/100.css'

import Nav from "./components/Nav";

const darkTheme = createTheme({
   typography: {
   fontFamily:'inter,arial',
    subtitle2: {
    color:'#B0B0B0',
    },
   }
});
const theme = useTheme();
const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

const footerIcons=[
   {icons:InstagramIcon,
   links:"https://www.instagram.com/deescateringservices/"},
   {icons:FacebookIcon,
   links:"https://www.facebook.com/people/Dees-Catering-Services/100063473123483/"}
]

function App() {
   return (
      <ThemeProvider theme={darkTheme}>
         <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
               <Nav/>
               <Outlet/>
                <Box  component='footer' sx={{display:"flex",flexDirection:'column'}} >
             {
isDesktop&&(
< Box >
   <Typography sx={{borderTop:.5,}}>
            ©2024 by David Opoku.
                  </Typography>
                  <Typography>
DeesCateringservices try us and you will be back
                  </Typography>
                  <Typography>
Silver Spring MD.20904 Tel: 301-675-3848
                  </Typography>
</Box>
                  )
                  }
<Box>
  {
     footerIcons.map((i,id)=>(
        <IconButton key={id}>
                  <MuiLink
                     href={i.links}
                     target="_blank"
                     >
                     <i.icons/>
                  </MuiLink>
               </IconButton>
                  ))
               }
               </Box>
            </Box>
         </Container>
      </ThemeProvider>
   );
}

export default App;
