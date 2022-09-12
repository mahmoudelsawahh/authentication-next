import { Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";

 const login = () => {
  return (
    <Box>
    <Grid align={'center'} sx={{position: 'absolute' , left: '50%', top:' 50%', transform: 'translate(-50%, -50%)'}}>
    <Paper  sx={{width : '400px' , margin : 'auto' , padding : '30px 20px'}} elevation={20}>
      <Box mb={1}>
        <Avatar/>
      </Box>
       <Box mb={3}>
        <Typography mb={1} sx={{fontWeight : 'bold' , marginTop : '5px'}} variant="h4">Rest Password</Typography>
       </Box>

    <Box>
    <form>
    <TextField type={'email'} label="E-Mail" variant="standard" fullWidth placeholder="Inter Your E-Mail" sx={{marginBottom : '20px'}}/>         
    <Button variant={'contained'} fullWidth>Rest Password</Button>
   <Link href={'/login'}>
    <a style={{color : '#1565c0' , fontSize : '18px' ,display: 'flex', marginTop: '10px'}}>Login In</a>
   </Link>
    </form>

    </Box>
    </Paper>
  </Grid>
   </Box>
  )
}
export default login