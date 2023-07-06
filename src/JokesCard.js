import React,{ useState} from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Modal from 'react-modal';
import axios from "axios";
import "./jokeCard.css";

const customStyles = {
    content: {
      top: '14rem',
      left: '50%',
      right: 'auto',
      width: "400",
      height:"400",
      bottom: 'auto',
    //   marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      
    },
  };


function JokesCard({categorie}) {
    // state of component that store joke and model-open-state
    const [modalIsOpen, setIsOpen] =useState(false);
    const[joke,setJoke]=useState([])

    // a function which is going to change the state of modelOpen 
    function openModal() {
      setIsOpen(true);
    }
  
//   this function id going to execute on the button click so that the modal is remove
    function closeModal() {
      setIsOpen(false);
    }

    // here making api call to get joke
    const fetchJokes = () => {
 
        axios.get(`https://api.chucknorris.io/jokes/random?category=${categorie}`)
        .then(res=> setJoke(res.data?.value))
        .then((eror)=>console.log(eror))  
    }
   

    
  return (
    <div>
      <Card sx={{ maxWidth: 345,width:300,borderRadius:2,margin:3}} onClick={() => {openModal(); fetchJokes()}}>
        <CardActionArea>
          <CardContent sx={{textAlign:"center",color:"blue",}}>
            <Typography gutterBottom variant="h4" component="div" >
             {categorie.charAt(0).toUpperCase()+categorie.slice(1)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Unlimeted Jokes On {categorie.charAt(0).toUpperCase()+categorie.slice(1)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* creating the modal to show the joke on pop-up screen */}
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        
        
        <div className="joke-modal">
            <div className="modal-head">
            <h2 className="joke-heading">{categorie.charAt(0).toUpperCase()+categorie.slice(1)}</h2>
            <button onClick={closeModal}>X</button>
            </div>
            
            
            <p className="joke">{joke}</p>
            <button onClick={fetchJokes} className="next-Joke">Next Jokes</button>

        </div>
        
      </Modal>
    </div>
  );
}

export default JokesCard;
