import React from "react";
import {
  AiFillFolderOpen,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="Footer">
      <ul className="list-non-bullet">
        <li className="list-item-inline">
          <a
            href="https://github.com/hsnice16"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="Icon" />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            href="https://www.linkedin.com/in/hsnice16/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="Icon" />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            href="https://twitter.com/hsnice16"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle className="Icon" />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            href="https://hsnice16.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFolderOpen className="Icon" />
          </a>
        </li>
      </ul>
      <div>
        <span>© {new Date().getFullYear()}</span> | hsnice16
      </div>
    </div>
  );
}
