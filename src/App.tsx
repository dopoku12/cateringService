import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import Home from "./Home";
const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

function App() {
   return (
      <ThemeProvider theme={darkTheme}>
         <Container>
            <Box bgcolor={"black"}>
               <Home />
            </Box>
         </Container>
      </ThemeProvider>
   );
}

export default App;
