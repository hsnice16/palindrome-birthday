import React from "react";
import CalendarImage from "./assets/calendar-image.jpg";
import { AiFillGithub } from "react-icons/ai";

export default function SectionOne() {
  return (
    <div className="SectionOne">
      <div className="GithubRepoLinkContainer">
        <div className="GithubIconContainer">
          <a
            href="https://github.com/hsnice16"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="GithubIcon" />
          </a>
        </div>
      </div>
      <div className="ImageNTextContainer">
        <div className="ImageContainer">
          <img src={CalendarImage} alt="calendar pic taken from unsplash" />
        </div>
        <div className="TextContainer">
          <h3>
            Check your <span>Birthdate</span> is <span>Palindrome</span> or not.
          </h3>
          <p>
            A palindrome is a word/number which reads the same backward as
            forward
          </p>
          <button
            onClick={() => {
              document.documentElement.scrollTop =
                document.documentElement.scrollHeight;
            }}
          >
            Let's Check It{" "}
            <span role="img" aria-label="backhand index pointing down emoji">
              👇
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
