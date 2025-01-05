import styles from './Map.module.css';
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';

const Map = props => {
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
    </>
  );
}

export default Map;