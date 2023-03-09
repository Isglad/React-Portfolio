import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-dark fixed-bottom d-flex justify-content-center">
      <a href="https://github.com/Isglad" target="_blank" rel="noreferrer">
        <img
          src="https://img.icons8.com/color/48/000000/github--v1.png"
          alt="GitHub"
          className="icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/gladys-isingizwe/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="LinkedIn"
          className="icon"
        />
      </a>
      <a
        href="https://medium.com/@gladyisingizwe"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/medium-monogram.png"
          alt="Medium"
          className="icon"
        />
      </a>
    </footer>
  );
}
