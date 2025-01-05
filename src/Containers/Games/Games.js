import styles from './Games.module.css';
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import AnimatedGamePage from '../AnimatedPage/AnimatedGamePage';
import games from '../../utils/games';
import CardCatalogue from '../../Components/CardCatalogue/CardCatalogue';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { ReactComponent as Arrow } from "../../Resources/image/arrow.svg";
import { useNavigate } from 'react-router-dom';

const Games = props => {
  const {
    cartAmount,
    handleAddToCart,
    handleSelectGame,
    handleHome,
    handleGame,
    handleMap,
    handleCalendar,
    handleContact,
    handleOpenCart,
    handleCloseCart,
  } = props;

  const navigate = useNavigate();
  
  return (
    <>
      <NavBar
        handleHome={handleHome}
        handleGame={handleGame}
        handleMap={handleMap}
        handleCalendar={handleCalendar}
        handleContact={handleContact}
        cartAmount={cartAmount}
        handleOpenCart={handleOpenCart}
        handleCloseCart={handleCloseCart}
      />
      <video autoPlay muted loop className={styles.video}>
        <source src={require("../../Resources/image/HomePageVideo.webm")} type="video/webm" />
      </video>
      <AnimatedGamePage>
        <div className={styles.catalogue}>
          <div className={styles.game}>
          <header>
            <button 
              style={{ color: "#cccccc" }} 
              className={styles.goBack}
              onClick={() => navigate(-1)}
              id="19"
              aria-label='Back'
            >
                <Arrow style={{ fill: "#cccccc" }} className={styles.arrow} />
            </button>
            <h1>Notre catalogue de jeux !</h1>
          </header>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                {games.map((game, index) => (
                  <Grid>
                    <CardCatalogue
                      game={game}
                      key={index} 
                      handleAddToCart={handleAddToCart} 
                      handleSelectGame={handleSelectGame}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </AnimatedGamePage>
    </>
  );
}

export default Games;