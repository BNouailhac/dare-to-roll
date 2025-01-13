import styles from './Map.module.css';
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';

const Map = props => {
  const {
    handleSelectGame,
    handleHome,
    handleGame,
    handleMap,
    handleCalendar,
    handleContact,
  } = props;
  
  return (
    <>
      <NavBar
          handleHome={handleHome}
          handleGame={handleGame}
          handleMap={handleMap}
          handleCalendar={handleCalendar}
          handleContact={handleContact}
        />
    </>
  );
}

export default Map;