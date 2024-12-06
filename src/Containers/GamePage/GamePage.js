import styles from './GamePage.module.css';
import React, { useState } from 'react';
import AnimatedGamePage from '../AnimatedPage/AnimatedGamePage';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as Arrow } from "../../Resources/image/arrow.svg";
import Slider from '../../Components/Slider/Slider';
//import { ReactComponent as Add } from "../../Resources/image/add.svg";
//import AddedToCartBig from '../../Components/AddedToCart/AddedToCartBig';
import Cart from '../../Components/Cart/Cart';
import templateGame from '../../utils/templateGame';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import Tooltip from '@mui/material/Tooltip';

const GamePage = props => {
  const {
    handleHover,
    hoverState,
    handleHome,
    landingPage,
    cartAmount,
    cart,
    selectedGame,
    setSelectedGame,
    allGames,
    handleAddToCart,
    handleOpenCart,
    handleCloseCart,
    cartDisplayed,
    clearCart,
    handleRemoveFromCart,
    openGamePage
  } = props;

  const [carouselState, setCarouselState] = useState(0);
  
  return (
    <>
        <div className={styles.gamepage}>
            {cartDisplayed ? <Cart 
              cartDisplayed={cartDisplayed}
              handleOpenCart={handleOpenCart}
              handleCloseCart={handleCloseCart}
              cart={cart}
              cartAmount={cartAmount}
              handleHover={handleHover}
              hoverState={hoverState}
              clearCart={clearCart}
              handleRemoveFromCart={handleRemoveFromCart}
              openGamePage={openGamePage}
            /> : null}

            <NavBar
              handleHover={handleHover}
              hoverState={hoverState}
              handleHome={handleHome}
              landingPage={landingPage}
              cartAmount={cartAmount}
              handleOpenCart={handleOpenCart}
              handleCloseCart={handleCloseCart}
            />

            <AnimatedGamePage>
              <div className={styles.gamepageContent}>
                <header>
                    <button 
                      style={{ color: hoverState[19].hovered ? "#92f" : "#cccccc" }} 
                      className={styles.goBack}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                      onClick={handleHome}
                      id="19"
                      aria-label='Back'
                    >
                        <Arrow style={{ fill: hoverState[19].hovered ? "#92f" : "#cccccc" }} className={styles.arrow} />
                    </button>
                    <h1>{selectedGame ? selectedGame.name : templateGame.name}</h1>
                </header>

                <section className={styles.game}>
                  {<Slider 
                    selectedGame={selectedGame}
                    setSelectedGame={setSelectedGame}
                    allGames={allGames}
                    carouselState={carouselState}
                    setCarouselState={setCarouselState}
                    hoverState={hoverState}
                    handleHover={handleHover}
                  />}
                  <div className={styles.gameInfo}>
                    <div className={styles.about}>
                      <div className={styles.aboutTop}>
                        <h2>Description</h2>
                        <p style={{marginBottom: "15px"}}>{selectedGame ? selectedGame.desc : templateGame.desc}</p>
                        <h2>Comment jouer ?</h2>
                        <p>{selectedGame ? selectedGame.howto : templateGame.howto}</p>
                        <h3>Fiche technique :</h3>
                        <div>
                          <h4>Date de sortie: {selectedGame ? selectedGame.release : templateGame.release}</h4>
                          <h4>Createur: {selectedGame ? selectedGame.Createur : templateGame.Createur}</h4>
                          <h4>Illustration: {selectedGame ? selectedGame.Illustration : templateGame.Illustration}</h4>
                          <h4>Testeur: {selectedGame ? selectedGame.Testeur : templateGame.Testeur}</h4>
                          <h4>Editeur: {selectedGame ? selectedGame.Editeur : templateGame.Editeur}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div style={{display: 'flex', gap: '25px', justifyContent: "space-between"}}>
                  <div className={styles.infoComp}>
                    <Tooltip title="Nombre de joueurs" style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <PeopleIcon sx={{ fontSize: 40, color: 'white' }} />
                      <h3 style={{ fontSize: 18, color: 'white' }}>{selectedGame ? selectedGame.nbgamer : '?'}</h3>
                    </Tooltip >
                    <Tooltip title="Durée d'une partie" style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <AccessTimeIcon sx={{ fontSize: 40, color: 'white' }} />
                      <h3 style={{ fontSize: 18, color: 'white' }}>{selectedGame ? selectedGame.timegames : '?'}</h3>
                    </Tooltip>
                    <Tooltip title="Âge recommandé" style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <EscalatorWarningIcon sx={{ fontSize: 40, color: 'white' }} />
                      <h3 style={{ fontSize: 18, color: 'white' }}>{selectedGame ? selectedGame.age : '?'}</h3>
                    </Tooltip>
                    <Tooltip title="Langue(s)" style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <LanguageIcon sx={{ fontSize: 40, color: 'white' }} />
                      <h3 style={{ fontSize: 18, color: 'white' }}>{selectedGame ? selectedGame.Language : '?'}</h3>
                    </Tooltip>
                  </div>
                  <div className={styles.buy}>
                      
                      <div className={styles.infos}>
                          <h3>{selectedGame ? selectedGame.price : templateGame.price} €</h3>
                      </div>
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        style={{fontFamily: "GT Medium", fontSize: "17px"}}
                        tabIndex={-1}
                        startIcon={<ShoppingCartIcon />}
                      >
                        Commander
                      </Button>
                      {/* To cart segment
                      {selectedGame ? selectedGame.inCart ? <AddedToCartBig /> : 
                      <button 
                        id="21" 
                        onMouseEnter={handleHover} 
                        onMouseLeave={handleHover} 
                        className={styles.addToCartButton}
                        style={{ color: hoverState[21].hovered ? "#92f" : "#999999" }} 
                        onClick={handleAddToCart} 
                        aria-label="Add"
                      >
                        Add to cart
                        <Add 
                          className={styles.add} 
                          style={{ fill: hoverState[21].hovered ? "#92f" : "#999999" }}
                        />
                      </button> : 

                      <button 
                        id="21" 
                        onMouseEnter={handleHover} 
                        onMouseLeave={handleHover} 
                        style={{ color: hoverState[21].hovered ? "#D2042D" : "#999999" }} 
                        onClick={handleAddToCart} 
                        aria-label="Add"
                      >
                        Not available
                        <Add 
                          className={styles.add} 
                          style={{ fill: hoverState[21].hovered ? "#D2042D" : "#999999" }}
                        />
                      </button>}*/}
                    </div>
                  </div>
              </div>
            </AnimatedGamePage>
        </div>
    </>
  );
}

export default GamePage;