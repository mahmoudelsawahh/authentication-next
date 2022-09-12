import { Alert, Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";
import { LoginUser , useAuth , Logout, SignInWithGoogle} from "../Firebase/Firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
 const login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [loading , setLoading] = useState(false);
  const [userAlert , setUserAlert] = useState('')
  const userData = useAuth();
  const router = useRouter();
  // useEffect(()=>{
  //   userData != null ? router.replace('/mainApp') : ''
  // },)
  const handelSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    if(email && password){
       try {
         await LoginUser(email, password);
         setLoading(false);
         setUserAlert('success')
         setEmail('');
         setPassword('');
       } catch (error) {
        setLoading(false);
        setUserAlert('error')

       }
      }else{
        setLoading(false);
        setUserAlert('empty')

      }
   }
   const alertMethod = ()=>{
    if(userAlert == 'success' && userData != null){
      return (
        <Alert severity="success" color="info">
        Success Login In , Enjoy
       </Alert>
      )
    }else if (userAlert == 'error'){
      return (
        <Alert variant="filled" severity="error">
         Not Found In Database ... Please Sign Up
      </Alert>
      )
    }else if (userAlert == 'empty'){
      return (
        <Alert severity="warning">Please Check Your Data, And try Again</Alert>

      )
    }else{
      return false
    }
  }
  const handelSignOut = async()=>{
    setLoading(true);
    try {
      await Logout();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
   }
   const logOut = ()=>{
    return (
      <Button type="submit" color={'error'} variant={'contained'} fullWidth onClick={handelSignOut}>Logout</Button>
    )
   }
  return (
    <Box>
    <Grid align={'center'} sx={{position: 'absolute' , left: '50%', top:' 50%', transform: 'translate(-50%, -50%)'}}>
    {loading ? <Alert variant="filled" severity="info"> Loading..... </Alert> : false}
    {userData !=null ? logOut() : false}
    <Paper  sx={{width : '400px' , margin : 'auto' , padding : '30px 20px'}} elevation={20}>
      <Box mb={1}>
        <Avatar/>
      </Box>
       <Box mb={3}>
        <Typography mb={1} sx={{fontWeight : 'bold'}} variant="h4">Login In</Typography>
        <Typography variant="p">Please File This Form to Continue..!</Typography>
       </Box>
       {alertMethod()}

    <Box>
    <form onSubmit={handelSubmit}>
    <TextField type={'email'} label="E-Mail" variant="standard" fullWidth placeholder="Inter Your E-Mail" sx={{marginBottom : '20px'}} onChange={(e)=> setEmail(e.target.value)}/>         
    <TextField type={'password'} label="Password" variant="standard" fullWidth placeholder="Inter Your Password" sx={{marginBottom : '20px'}} onChange={(e)=> setPassword(e.target.value)}/>
    <FormControlLabel align={'left'} sx={{display : 'flex' , marginBottom : '20px'}}
      value="end"
      control={<Checkbox />}
      label="I Accept The Terms And Conditions"
      labelPlacement="end"
    />
    <Button type="submit" variant={'contained'} fullWidth>Login</Button>
   <Link href={'/forgetPassword'}>
    <a style={{color : '#1565c0' , fontSize : '18px' ,display: 'flex', marginTop: '10px'}}>Forget Password</a>
   </Link>
   <span style={{display : 'flex' , marginTop:'10px' }} >Do you already have an account? <Link href={'/signUp'}> 
   <a style={{color : '#1565c0' , marginLeft : '5px'}}>Sign Up</a>
   </Link></span>

    </form>
    </Box>
    <Button onClick={SignInWithGoogle} sx={{marginTop : '20px'}} variant="contained" color="secondary">
          Sign In With Google
        </Button>
    </Paper>
  </Grid>
   </Box>
  )
}
export default login