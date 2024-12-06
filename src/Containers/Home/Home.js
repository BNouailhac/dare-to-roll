import React from 'react';
import styles from './Home.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import Cart from '../../Components/Cart/Cart';
import games from '../../utils/games';
import Card from '../../Components/Card/Card';

const Home = props => {
  const {
    cartAmount,
    cart,
    cartDisplayed,
    handleOpenCart,
    handleCloseCart,
    clearCart,
    handleAddToCart,
    handleRemoveFromCart,
    handleSelectGame,
    openGamePage
  } = props;

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  }

  return (
    <div className={styles.main}>
      {cartDisplayed ? <Cart 
              cartDisplayed={cartDisplayed} 
              handleOpenCart={handleOpenCart}
              handleCloseCart={handleCloseCart}
              cart={cart}
              cartAmount={cartAmount}
              clearCart={clearCart}
              handleRemoveFromCart={handleRemoveFromCart}
              openGamePage={openGamePage}
      /> : null}
        <div className={styles.home}>

                <video autoPlay muted loop className={styles.video}>
                  <source src={require("../../Resources/image/HomePageVideo.webm")} type="video/webm" />
                </video>

                <NavBar 
                  handleHome={handleHome}
                  cartAmount={cartAmount}
                  handleOpenCart={handleOpenCart}
                  handleCloseCart={handleCloseCart}
                />
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.splash}>
                          <h1>Dare to Roll</h1>
                          <p className={styles.intro}>Tous nos jeux sont fait Maison ! Parcourez notre <span className={styles.careers}>catalogue</span> ou <span className={styles.careers}>contactez-nous</span> avec vos retours ou vos proposition de jeux.</p>
                        </div>
                        <div>

                        </div>
                    </div>
    
                    <div className={styles.right}>
                      <div className={styles.homeRight}>
                        <h2>Notre dernier jeux !</h2>
                        <Card 
                          game={games[games.length - 1]} 
                          key={games[games.length - 1].name} 
                          handleAddToCart={handleAddToCart} 
                          handleSelectGame={handleSelectGame}
                        />
                      </div>
                    </div>
                </div>
        </div>
    </div>
  );
}

export default Home;