import IndvWord from "./IndvWord";
import words from "../../words.js";
import "../../mainGame.css";
import bat1 from "../../assets/bat1.png";
import bat2 from "../../assets/bat2.png";
import bat3 from "../../assets/bat3.png";
import bat4 from "../../assets/bat4.png";
import bat5 from "../../assets/bat5.png";
import bat6 from "../../assets/bat6.png";
import bat7 from "../../assets/bat7.png";
import bat8 from "../../assets/bat8.png";

import { useState, useRef } from "react";

const category = "foodAndDrinks";
const level = "advanced";
let batteryImgUrl;

const currentQuizGameData = words[category][level];

function MainGame() {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [count, setCount] = useState(1);
  const [wrongCount, setWrongCount] = useState(0);
  const [currentWord, setCurrentWord] = useState(() => {
    let randomIdx = Math.floor(Math.random() * currentQuizGameData.length);
    return {
      word: currentQuizGameData[randomIdx].word,
      hint: currentQuizGameData[randomIdx].hint,
    };
  });

  console.log(wrongCount);

  const [userWord, setUserWord] = useState([]);

  let lastUserWord = userWord[userWord.length - 1];
  let correctWordsArray = currentWord.word.toUpperCase().split("").filter();

  function getUserWord(letter) {
    setUserWord((prevWords) => [...prevWords, letter]);
    let isGuessedLetterinCurrWord = !currentWord.word
      .toUpperCase()
      .split("")
      .includes(letter);

    if (isGuessedLetterinCurrWord) {
      setWrongCount((prevCount) => {
        return prevCount + 1;
      });
    }
  }

  switch (wrongCount) {
    case 0:
      batteryImgUrl = bat1;
      break;
    case 1:
      batteryImgUrl = bat2;
      break;
    case 2:
      batteryImgUrl = bat3;
      break;
    case 3:
      batteryImgUrl = bat4;
      break;
    case 4:
      batteryImgUrl = bat5;
      break;
    case 5:
      batteryImgUrl = bat6;
      break;
    case 6:
      batteryImgUrl = bat7;
      break;
    case 7:
      batteryImgUrl = bat8;
      break;
  }

  const showAllAlphabets = alphabets
    .split("")
    .map((letter, idx) => (
      <IndvWord onClick={getUserWord} key={idx} val={letter} />
    ));

  const showCurrentWord = currentWord.word
    .toUpperCase()
    .split("")
    .map((letter, idx) => {
      let isIncluded = userWord.includes(letter.toUpperCase());

      console.log(currentWord.word.toUpperCase().split(""));
      console.log(userWord);

      // let correctWordsArray = userWord.filter((userLetter) => {
      //   currentWord.word.toUpperCase().split("").includes(userLetter);
      // });

      // console.log("correctWordsArray: ", correctWordsArray);

      //   if(userWord.includes(letter)){

      //   }

      //   let cdorrectLetters = currentWord.word
      //   .toUpperCase()
      //   .split("")
      //   .map((letter) => {
      //     if (userWord.includes(letter)) {
      //       return letter;
      //     }
      //   });

      // console.log(userWord);
      // console.log(correctLetters);

      return (
        <p key={idx} className="indvCurrentWord">
          <span style={{ visibility: isIncluded ? "visible" : "hidden" }}>
            {letter.toUpperCase()}
          </span>
        </p>
      );
    });

  return (
    <>
      <div className="fullGameDiv">
        <div className="mainGameDiv">
          <div className="count">
            <h1>Word {count}</h1>
          </div>
          <div className="indvCurrentWordDiv">{showCurrentWord}</div>
          <p className="hintText">Hint: {currentWord.hint}</p>
          <div className="keyboard">{showAllAlphabets}</div>
        </div>
        <div className="displayThemeDiv">
          <div className="scoresDiv">scores</div>
          <div className="batteryDiv">
            <img
              className="batteryImage"
              src={batteryImgUrl}
              alt="battery image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainGame;

//1. if attempts are over, display all words, correct in green wrong in red.
//2. give battery transition when it decreases.
//3. if guessed word is wrong, turn it to red and if it is correct, turn it to green in keyboard.
//4. implement score functionality.
// 0 wrongCount -> score  will be 1000
// 1 wrongCount -> score  will be 750
// 2 wrongCount -> score  will be 500
// 3 wrongCount -> score  will be 300
// 4 wrongCount -> score  will be 250
// 5 wrongCount -> score  will be 200
// 6 wrongCount -> score  will be 100
// 7 wrongCount -> score  will be 50
// on 9th attempt game over -> score 0
//5. display popup on correctguess or game over and give play again game btn but scores should be stored in local storage.
//6. create screen where user chooses category and level.
//7. if level is beginner time is 1/2 min, interm -> 1 min, hard -> 3min. when time is over game is over and popup of total score and play again btn is showed.
//8. implement sound functionality when battery decreases and correct guess is made.
//9. apply media queries and good UI to two pages created. play game and game over.
//10.
