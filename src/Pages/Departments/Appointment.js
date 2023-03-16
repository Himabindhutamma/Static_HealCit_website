// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function FormDialog({open,handleClose}) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
     
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <DialogContent>
         <div class="popup-form">
        <div class="inner-block">
            <span class="popup-form-close"onClick={handleClose} id="popup-form-close">&times;</span>
            {/* <div class="img">
                <img src="./Assets/images/jpg/popup-form.jpg"/>
            </div> */}
            <form>
                <h1 class="section-title">make an appointment</h1>
                <div class="input-box">
                    <label for="popup-name"></label>
                    <input type="date" id="popup-name" required/>
                </div>
                <div class="input-box">
                    <label for="popup-name">Name *</label>
                    <input type="text" id="popup-name" required/>
                </div>

                <div class="input-box">
                    <label for="popup-email">Email *</label>
                    <input type="text" id="popup-email" required/>
                </div>

                <div class="input-box">
                    <label for="popup-phone">Phone *</label>
                    <input type="tel" id="popup-phone" required/>
                </div>

                <div class="select-box">
                    <i class="fa fa-angle-down"></i>
                    <select>
                        <option select>Senior Citizens</option>
                        <option select>Adults</option>
                        <option select>Youth</option>
                        <option select>Children</option>
                    </select>
                </div>
                <div class="select-box">
                    <i class="fa fa-angle-down"></i>
                    <select>
                        <option select>1</option>
                        <option select>2</option>
                        <option select>3</option>
                        <option select>4</option>
                        <option select>5</option>
                        <option select>6</option>
                        <option select>7</option>
                        <option select>8</option>
                        <option select>9</option>
                        <option select>10</option>
                        <option select>1</option>
                        <option select>12</option>
                        <option select>13</option>
                        <option select>14</option>
                        <option select>15</option>
                        <option select>16</option>
                        <option select>17</option>
                        <option select>18</option>
                        <option select>19</option>
                        <option select>20</option>
                        <option select>21</option>
                        <option select>22</option>
                        <option select>23</option>
                        <option select>24</option>
                        <option select>25</option>
                        
                    </select>
                </div>
                <button type="submit" class="btn btn-2_pink">Book</button>
            </form>
        </div>
    </div>
     
        </DialogContent>
      </Dialog>
    </div>
  );
}