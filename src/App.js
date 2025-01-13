import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import GamePage from './Containers/GamePage/GamePage';
import Games from './Containers/Games/Games';
import Map from './Containers/Map/Map';
import Calendar from './Containers/Calendar/Calendar';
import Contact from './Containers/Contact/Contact';
import NotFound from './Containers/NotFound/NotFound';
import Home from './Containers/Home/Home';
import { AnimatePresence } from "framer-motion";
import games from './utils/games';
import templateGame from './utils/templateGame';

function App() {
  const [allGames, setAllGames] = useState(games);
  const [selectedGame, setSelectedGame] = useState(false);

const navigate = useNavigate();
const location = useLocation();

if (location.pathname !== "/dare-to-roll/" && selectedGame === false) {
  let surname = location.pathname.substring(29);
  let currentGame = games.find(game => game.surname === surname);
  if (currentGame !== undefined) {
    setSelectedGame(currentGame);
  } else {
    setSelectedGame(templateGame);
  }
}

const handleHome = () => {
  navigate('/dare-to-roll/');
}

const handleGame = () => {
  navigate('/games/');
}

const handleMap = () => {
  navigate('/world/');
}

const handleCalendar = () => {
  navigate('/calendar/');
}

const handleContact = () => {
  navigate('/contact/');
}

const handleSelectGame = (e) => {
  if (e.target.tagName === "BUTTON") {
    return
  } else if (e.target.classList[0] !== "AddToCart_addToCart__zbJPe") {
      if (e.target.parentNode?.id) {
        navigate(`/games/${games[e.target.parentNode.id].surname}`);
        setSelectedGame(games[e.target.parentNode.id]);
      } else {
        navigate(`/games/${games[e.target.offsetParent.id].surname}`);
        setSelectedGame(games[e.target.offsetParent.id]);
      }
  }
}

const openGamePage = (e) => {
  let selectedGameSurname = e.target.id;
  navigate(`/games/${selectedGameSurname}`);
}

  return (
      <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/dare-to-roll/" element={<Home 
                                        handleHome={handleHome}
                                        handleGame={handleGame}
                                        handleMap={handleMap}
                                        handleCalendar={handleCalendar}
                                        handleContact={handleContact}
                                        handleSelectGame={handleSelectGame}
                                        openGamePage={openGamePage}
                                      />} />
            <Route path="/games/:gameId" element={<GamePage
                                               handleSelectGame={handleSelectGame} 
                                               selectedGame={selectedGame}
                                               setSelectedGame={setSelectedGame}
                                               handleHome={handleHome}
                                               handleGame={handleGame}
                                               handleMap={handleMap}
                                               handleCalendar={handleCalendar}
                                               handleContact={handleContact}
                                               allGames={allGames}
                                               openGamePage={openGamePage}
                                            />} />
            <Route path="/games/" element={<Games
              handleSelectGame={handleSelectGame} 
              handleHome={handleHome}
              handleGame={handleGame}
              handleMap={handleMap}
              handleCalendar={handleCalendar}
              handleContact={handleContact}
            />} />
            <Route path="/world/" element={<Map
              handleSelectGame={handleSelectGame}
              handleHome={handleHome}
              handleGame={handleGame}
              handleMap={handleMap}
              handleCalendar={handleCalendar}
              handleContact={handleContact}
            />} />
            <Route path="/calendar/" element={<Calendar
              handleHome={handleHome}
              handleGame={handleGame}
              handleMap={handleMap}
              handleCalendar={handleCalendar}
              handleContact={handleContact}
            />} />
            <Route path="/contact/" element={<Contact
              handleHome={handleHome}
              handleGame={handleGame}
              handleMap={handleMap}
              handleCalendar={handleCalendar}
              handleContact={handleContact}
            />} />
            <Route path="*" element={<NotFound
                            handleHome={handleHome}
                            handleGame={handleGame}
                            handleMap={handleMap}
                            handleCalendar={handleCalendar}
                            handleContact={handleContact}
                            openGamePage={openGamePage}
          />} />
          </Routes>
      </AnimatePresence>
  );
}

export default App;
