import IndvWord from "./IndvWord";
import words from "../../words.js";
import "../../mainGame.css";
import { useState } from "react";

const category = "foodAndDrinks";
const level = "advanced";
const currentQuizGameData = words[category][level];

function MainGame() {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [currentWord, setCurrentWord] = useState(() => {
    let randomIdx = Math.floor(Math.random() * currentQuizGameData.length);
    return {
      word: currentQuizGameData[randomIdx].word,
      hint: currentQuizGameData[randomIdx].hint,
    };
  });

  const [userWord, setUserWord] = useState([]);

  function getUserWord(letter) {
    setUserWord((prevWords) => [...prevWords, letter]);
  }

  console.log("userword: ", userWord);

  const showAllAlphabets = alphabets
    .split("")
    .map((letter, idx) => (
      <IndvWord onClick={getUserWord} key={idx} val={letter} />
    ));

  const showCurrentWord = currentWord.word.split("").map((letter, idx) => (
    <p className="indvCurrentWord" key={idx}>
      {letter.toUpperCase()}
    </p>
  ));

  return (
    <div className="mainGameDiv">
      <div className="scoresDiv">scores</div>
      <div className="indvCurrentWordDiv">{showCurrentWord}</div>
      <p>Hint 💡: {currentWord.hint}</p>
      <div className="keyboard">{showAllAlphabets}</div>
    </div>
  );
}

export default MainGame;
