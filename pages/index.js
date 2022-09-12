import { Grid, Button } from "@mui/material"
import Link from "next/link"

const Home =()=> {
  return (
    <Grid>
     <Button href="/login" variant="contained" sx={{width : '50%'}}>
       Login In
     </Button>
     <Button href="/signUp" variant="contained" color="secondary" sx={{width : '50%'}}>
       Sign Up
     </Button>
    </Grid>
  )
}
export default Home