import { Box, Container} from "@mui/material";
import {useMediaQuery,useTheme} from "@mui/material";
import {ThemeProvider,createTheme }from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import '@fontsource/pacifico/400.css'
import '@fontsource/inter/100.css'
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const fontTheme = createTheme({
   typography: {
   fontFamily:'inter,arial',
    subtitle2: {
    color:'#B0B0B0',
    },
   },
});

function App() {
const theme = useTheme();
const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
// {
//             isDesktop&&(
//             <Stack>
//                <Typography sx={{borderTop:.5,}} children=' ©2024 by David Opoku.'/>
//                <Typography children='DeesCateringservices try us and you will be back'/>
//                <Typography children='Silver Spring MD.20904 Tel: 301-675-3848'/>
//             </Stack>)
//          }

   return (
<ThemeProvider theme={fontTheme}>
   <Container sx={{display:'flex',flexDirection:'column'}}>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"center"}} >
       <Nav/>
      </Box>
   <Outlet/>
      <Footer/>
   </Container>
</ThemeProvider>
   );
}

export default App;
