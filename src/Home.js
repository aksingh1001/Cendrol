import React, { useEffect, useState } from 'react';
import axios from "axios";
import JokesCard from './JokesCard';
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';

function Home() {
    const[categories,setCategories]=useState([]);
    
    useEffect(()=>{
        axios.get("https://api.chucknorris.io/jokes/categories")
        .then((res)=>setCategories(res.data))
        .catch((err)=>console.log(err))

    },[])
  return (
    <>
    <Container maxWidth="xl" sx={{backgroundColor:"rgba(74,182,211,255)"}}>
    <h1 style={{paddingLeft:"45%",margin:0}}>Chuck Norries</h1>
      <Grid container spacing={1} sx={{width:"100%"}}>
        
        {
          categories.map((categorie)=>{
            return(
              <Grid item md={3} sx={{}} >
                 <JokesCard categorie={categorie} />
              </Grid>
              
            )
          })
        }  
      </Grid>
      </Container>
    </>
  )
}

export default Home