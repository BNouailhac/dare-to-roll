import styles from './Contact.module.css';
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import AnimatedGamePage from '../AnimatedPage/AnimatedGamePage';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Contact = props => {
  const {
    cartAmount,
    cart,
    handleHome,
    handleGame,
    handleMap,
    handleCalendar,
    handleContact,
    handleOpenCart,
    handleCloseCart,
  } = props;

  const [type, settype] = useState(true);

  const chooseType = (e) => {
    if (e.target.id === '1') {
      settype(true);
    } else {
      settype(false);
    }
  }

  return (
    <>
      <NavBar
        handleHome={handleHome}
        handleGame={handleGame}
        handleMap={handleMap}
        handleCalendar={handleCalendar}
        handleContact={handleContact}
        cart={cart}
        cartAmount={cartAmount}
        handleOpenCart={handleOpenCart}
        handleCloseCart={handleCloseCart}
      />
      <video autoPlay muted loop className={styles.video}>
        <source src={require("../../Resources/image/HomePageVideo.webm")} type="video/webm" />
      </video>
      <div>
      <AnimatedGamePage>
        <div className={styles.right}>
          <div className={styles.homeRight}>
            <div className={styles.head}>
              <div style={{ justifyContent: "center", display: 'flex', gap: '20px' }} >
                <Button id={1} variant={type ? "contained" : "outlined" } onClick={chooseType}>Joueur</Button>
                <Button id={2} variant={type ? "outlined" : "contained" } onClick={chooseType}>Professionnel</Button>
              </div>
              {type ? 
                <h1> Vous souhaitez nous faire part de vos avis ou conseils ? Avec plaisir !</h1> : 
                <h1> Vous vendez des jeux ou organisez des événements ? Prenons contact !</h1>
                }
              
            </div>
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1 }, display: 'contents' }}
              noValidate
              autoComplete="off"
            >
                <TextField
                  id="outlined-multiline-flexible"
                  label="Adresse email"
                  multiline
                  maxRows={4}
                />
                <TextField
                  id="outlined-textarea"
                  label="Sujet"
                  multiline
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={10}
                />
            </Box>
            <Button endIcon={<SendIcon />}>
              Envoyer
            </Button>
          </div>
          
        </div>
        
      </AnimatedGamePage>
      </div>
    </>
  );
}

export default Contact;