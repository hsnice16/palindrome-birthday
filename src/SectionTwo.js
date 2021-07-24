import React, { useState } from "react";
import { GiClick } from "react-icons/gi";
import HandsWithCalendar from "./assets/hands-with-calendar.jpg";
import CalculatingGif from "./assets/calculating-gif.gif";
import {
  getPalindromeFormat,
  findNearestPalindromeDateAndMissedDays
} from "./functions";

export default function SectionTwo() {
  const [showIsPalindrome, setShowIsPalindrome] = useState(false);
  const [showIsNotPalindrome, setShowIsNotPalindrome] = useState(false);
  const [birthDay, setBirthDay] = useState("");

  const [palindromeBirthDayFormat, setPalindromeBirthDayFormat] = useState("");
  const [nearestPalindromeDate, setNearestPalindromeDate] = useState("");
  const [missedDays, setMissedDays] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState("");

  const [calculating, setCalculating] = useState(false);

  const handleBirthDayChange = (event) => {
    if (showIsPalindrome) setShowIsPalindrome(false);
    if (showIsNotPalindrome) setShowIsNotPalindrome(false);
    if (showErrorMessage) setShowErrorMessage("");

    setBirthDay(event.target.value);
  };

  const handleCheckBtnClick = () => {
    if (birthDay === "") {
      setShowErrorMessage("Enter valid date");
      return;
    }

    const [year, month, date] = birthDay.split("-");

    const palindromeFormat = getPalindromeFormat(date, month, year);

    setCalculating(true);
    setTimeout(() => {
      if (palindromeFormat !== "") {
        setPalindromeBirthDayFormat(palindromeFormat);
        setShowIsPalindrome(true);
      } else {
        const [
          nearestPalindromeDate,
          missedDays
        ] = findNearestPalindromeDateAndMissedDays(date, month, year);

        if (nearestPalindromeDate === "" && missedDays === "") {
          setShowErrorMessage("Sorry !! No nearest palindrome date found");
        } else {
          setNearestPalindromeDate(nearestPalindromeDate);
          setMissedDays(missedDays);
          setShowIsNotPalindrome(true);
        }
      }
      setCalculating(false);
    }, 1000);
  };

  return (
    <div className="SectionTwo">
      <div className="TextContainer">
        <h3>
          Enter your <span>Birthdate</span> and We will tell you it is a&nbsp;
          <span>palindrome</span> Or <span>not</span>
        </h3>
        <p>
          This app checks your birthdate in 4 formats dd-mm-yyyy, mm-dd-yyyy,
          mm-dd-yy, and yyyy-mm-dd
        </p>
        <p>
          e.g. if your birthdate is 01 Jan 2000, then app will check for
          01012000, 01012000, 010100, and 20000101
        </p>

        <input
          type="date"
          id="birthday-input"
          value={birthDay}
          onChange={handleBirthDayChange}
        />

        <button onClick={handleCheckBtnClick}>
          Check <GiClick className="GiClickIcon" />
        </button>

        {showErrorMessage && (
          <div className="IsNotPalindrome ResponseText">
            {/* only for design purpose, that className is used */}
            {showErrorMessage}
          </div>
        )}

        {showIsPalindrome && (
          <div className="IsPalindrome ResponseText">
            Whoa!!! Your birthdate in format {palindromeBirthDayFormat} is
            palindrome
          </div>
        )}

        {showIsNotPalindrome && (
          <div className="IsNotPalindrome ResponseText">
            Awww! Your birthdate is not palindrome. Nearest palindrome date
            is&nbsp;
            {nearestPalindromeDate}, You missed it by {missedDays} days.
          </div>
        )}
      </div>
      <div className="ImageContainer">
        {calculating === false ? (
          <img
            src={HandsWithCalendar}
            alt="hands with calendar pic taken from unsplash"
          />
        ) : (
          <>
            <img src={CalculatingGif} alt="calculating gif taken from giphy" />
            <div>Just wait for a second...</div>
          </>
        )}{" "}
      </div>
    </div>
  );
}
