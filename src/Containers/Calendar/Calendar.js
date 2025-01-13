import styles from './Calendar.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import AnimatedGamePage from '../AnimatedPage/AnimatedGamePage';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import EventsCard from '../../Components/EventsCard/EventsCard';
import events from '../../utils/events';
import { ReactComponent as Arrow } from "../../Resources/image/arrow.svg";

const Calendar = props => {
  const {
    handleHome,
    handleGame,
    handleMap,
    handleCalendar,
    handleContact,
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
      />
      <video autoPlay muted loop className={styles.video}>
        <source src={require("../../Resources/image/HomePageVideo.webm")} type="video/webm" />
      </video>
      <div>
      <AnimatedGamePage>
        <div className={styles.right}>
          <div className={styles.homeRight}>
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
              <h1> Retrouvez nous lors d'évènements pour tester nos jeux !</h1>
            </header>
            <div style={{ justifyContent: "center", display: 'grid', gap: '15px' }} >
              {events.map((event, index) => (
                <EventsCard
                  event={event}
                  key={"event_" + index}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedGamePage>
      </div>
    </>
  );
}

export default Calendar;