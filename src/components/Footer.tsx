import { Box,IconButton,Link as MuiLink, Typography,Stack } from "@mui/material";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import logo from "../assets/imgs/dees_logo.png"

const footerIcons=[
   {icons:FacebookIcon,links:"https://www.facebook.com/people/Dees-Catering-Services/100063473123483/"},
   {icons:InstagramIcon,links:"https://www.instagram.com/deescateringservices/"},
]
const Footer = () => {
    return ( 
        <Box component='footer' bgcolor="black" color="white"  sx={{display:"flex",flexDirection:'column'}} >
         
         <Box>
            <Stack direction="column" spacing={1.5}>
               <Link to="/">
                  <img style={{borderRadius:'50%'}} width={60} src={logo} alt="logo" />
               </Link>
               <Stack direction="column" spacing={1}>
                  <Typography fontWeight="bold" children="CONTACT US"/>
                  {/* <Typography children='DeesCateringservices try us and you will be back'/> */}
                  <Typography children='Silver Spring MD,20904  301-675-3848'/>
               </Stack>
               <Box>
                  <Typography fontWeight="bold" children="FOLLOW US"/>
                  <Stack direction="row">
                     {footerIcons.map(
                        (i,id)=>(
                           <IconButton key={id}>
                           <MuiLink href={i.links} target="_blank">
                              <i.icons/>
                           </MuiLink>
                        </IconButton>
                        )
                     )}
                  </Stack>
                  <Typography  children=' ©2024 by David Opoku.'/>
               </Box>
            </Stack>
         </Box>
      </Box>
     );
}
 
export default Footer;