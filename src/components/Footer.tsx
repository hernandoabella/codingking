import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid p-8">
        <p className="text-center">
          &copy; Coding-King {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
