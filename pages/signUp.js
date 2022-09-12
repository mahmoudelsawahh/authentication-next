import { NewUser , useAuth , Logout , fullData} from "../Firebase/Firebase";
import { useEffect, useState } from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography , Alert } from "@mui/material"
import { Box } from "@mui/system"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";
import { useRouter } from "next/router";
const SignUp =()=> {
  const userData = useAuth();
 const [loading , setLoading] = useState(false);
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  // const [gender , setGender] = useState('');
  const [image , setImage] = useState('');
  const [phone , setPhone] = useState('');
  const [password , setPassword] = useState('');
  const [passwordVaild , setPasswordVaild] = useState('');
  const [newAcc , setNewAcc] = useState('')
  // const [accept , setAccept] = useState(false);
  const router = useRouter();

  // useEffect(()=>{
  // userData != null ? router.replace('/mainApp') : ''
  // },)
  console.log(userData)

   const handelSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    if(name && email && phone && password && password === passwordVaild){
       try {
         await NewUser(email, password );
          fullData(name , image , phone.toString());
         setLoading(false);
         setName('');
         setEmail('');
         setImage('');
         setPhone('');
         setPassword('');
         setPasswordVaild('')
         setNewAcc('success')
       } catch (error) {
        setLoading(false);

       }
      }else{
        setLoading(false);
        setNewAcc('empty');

      }
   }
    const alertMethod = ()=>{
      if(newAcc == 'success' && userData != null){
        return (
          <Alert severity="success" color="info">
          Success SignUp , Enjoy
         </Alert>
        )
      }else if (newAcc == 'error'){
        return (
          <Alert variant="filled" severity="error">
          Error , This Account is already Used ... Please Login In
        </Alert>
        )
      }else if (newAcc == 'empty'){
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
        {loading ? <Alert variant="filled" severity="info"> Loading..... </Alert> : console.log('its false loading')}
        {userData !=null ? logOut() : false}
        <Paper sx={{width : '450px' , margin : 'auto' , padding : '30px 20px'}} elevation={20}>
          <Box mb={1}>
            <Avatar/>

          </Box>
           <Box mb={3}>
            <Typography mb={1} sx={{fontWeight : 'bold'}} variant="h4">Sign Up</Typography>
            <Typography variant="p">Please File This Form To Create An Account...!</Typography>
           </Box>
           {alertMethod()}

        <Box>
        <form onSubmit={handelSubmit}>
        <TextField type={'text'} label="Name" variant="standard" fullWidth placeholder="Inter Your Name" value={name} sx={{marginBottom : '10px'}} onChange={(e)=> setName(e.target.value)}/>
        <TextField type={'email'} label="E-Mail" variant="standard" fullWidth placeholder="Inter Your E-Mail"  value={email} sx={{marginBottom : '10px'}} onChange={(e)=> setEmail(e.target.value)}/>

        <FormControl align={'left'} sx={{display : 'flex', marginBottom : '5px'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>      
      <TextField  type={'file'} value={image} align={'left'} sx={{display : 'flex', marginBottom : '5px'}} onChange={(e)=> setImage(e.target.value)}/>  
        <TextField type={'number'} value={phone} label="Phone Number" variant="standard" fullWidth placeholder="Inter Your Phone Number" sx={{marginBottom : '10px'}} onChange={(e)=> setPhone(e.target.value)}/>
        <TextField type={'password'} value={password} label="Password" variant="standard" fullWidth placeholder="Inter Your Password" sx={{marginBottom : '10px'}} onChange={(e)=> setPassword(e.target.value)}/>
        <TextField type={'password'} value={passwordVaild} label="Confirm Password" variant="standard" fullWidth placeholder="Confirm Your Password" sx={{marginBottom : '10px'}} onChange={(e)=> setPasswordVaild(e.target.value)}/>
        <FormControlLabel align={'left'} sx={{display : 'flex' , marginBottom : '10px'}}
          value="end"
          control={<Checkbox />}
          label="I Accept The Terms And Conditions"
          labelPlacement="end"
        />
        <Button type="submit"variant={'contained'} fullWidth disabled={userData !=null} >Sign Up</Button>

        <span style={{display : 'flex' , marginTop:'10px' }} >Do you already have an account? <Link href={'/login'}> 
        <a style={{color : '#1565c0' , marginLeft : '5px'}}>Login In</a>
        </Link></span>
        </form>
       
        </Box>
        </Paper>
      </Grid>
       </Box>
    )
  }
  export default SignUp